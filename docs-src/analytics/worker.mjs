import { DurableObject } from "cloudflare:workers";

const publicOrigins = [
  "https://ascendmoea.readthedocs.io",
  "https://iceycnz.github.io",
];

export class VisitCounts extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS visits (
        region TEXT PRIMARY KEY CHECK (region GLOB '[A-Z][A-Z]'),
        views INTEGER NOT NULL CHECK (views > 0)
      ) STRICT
    `);
  }

  record(region) {
    return this.sql.exec(`
      INSERT INTO visits (region, views) VALUES (?, 1)
      ON CONFLICT (region) DO UPDATE SET views = visits.views + 1
      RETURNING views
    `, region).one().views;
  }

  getRegion(region) {
    return this.sql.exec("SELECT views FROM visits WHERE region = ?", region).toArray()[0]?.views ?? 0;
  }

  snapshot() {
    return this.sql.exec("SELECT region, views FROM visits ORDER BY region").toArray();
  }
}

function countsAsView(request) {
  const headers = request.headers;
  const purpose = headers.get("Sec-Purpose") || headers.get("Purpose") || "";
  const agent = headers.get("User-Agent") || "";
  return headers.get("Sec-GPC") !== "1"
    && headers.get("DNT") !== "1"
    && !/prefetch|prerender/i.test(purpose)
    && !/bot\b|crawler|spider|slurp|headless/i.test(agent);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/v1/visits") {
      return Response.json({ error: "Not found" }, { status: 404 });
    }

    const origin = request.headers.get("Origin");
    const allowedOrigins = env.VISITS_ORIGINS?.split(",").map((value) => value.trim()) ?? publicOrigins;
    if (!allowedOrigins.includes(origin)) {
      return Response.json({ error: "Origin not allowed" }, { status: 403 });
    }
    const headers = {
      "Access-Control-Allow-Origin": origin,
      "Cache-Control": "no-store",
      Vary: "Origin",
    };
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          ...headers,
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Max-Age": "600",
        },
      });
    }
    if (!["GET", "POST"].includes(request.method)) {
      return Response.json({ error: "Method not allowed" }, {
        status: 405,
        headers: { ...headers, Allow: "GET, POST, OPTIONS" },
      });
    }

    try {
      const ip = request.headers.get("CF-Connecting-IP");
      if (ip && !(await env.REQUEST_LIMIT.limit({ key: ip })).success) {
        return Response.json({ error: "Rate limit reached" }, { status: 429, headers });
      }

      // Cloudflare supplies this field from the incoming network connection.
      const country = request.cf?.country;
      const region = /^[A-Z]{2}$/.test(country) && country !== "XX" ? country : "ZZ";
      const counts = env.VISITS.getByName("ascendmoea-docs");
      if (request.method === "POST" && countsAsView(request)) {
        return Response.json({ region, views: await counts.record(region) }, { headers });
      }
      if (request.method === "POST" || url.searchParams.get("summary") === "1") {
        return Response.json({ region, views: await counts.getRegion(region) }, { headers });
      }

      const regions = await counts.snapshot();
      return Response.json({
        region,
        views: regions.find((row) => row.region === region)?.views ?? 0,
        regions,
      }, { headers });
    } catch {
      return Response.json({ error: "Visit statistics are unavailable" }, { status: 503, headers });
    }
  },
};
