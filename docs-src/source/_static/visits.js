(() => {
  const mapUrl = new URL("visit-map.json", document.currentScript.src);
  const svgNamespace = "http://www.w3.org/2000/svg";
  const thresholds = [1, 10, 100, 1000];

  const getLevel = (count) => thresholds.filter((threshold) => count >= threshold).length;

  async function readJson(url, { timeout = 8000, ...options } = {}) {
    const response = await fetch(url, {
      credentials: "omit",
      referrerPolicy: "no-referrer",
      signal: AbortSignal.timeout(timeout),
      ...options,
    });
    if (!response.ok) throw new Error(`Visit statistics request failed: ${response.status}`);
    return response.json();
  }

  function renderMap(page, geometry, counts, labels, regionName, formatViews) {
    const canvas = page.querySelector("[data-visits-canvas]");
    const tooltip = page.querySelector("[data-visits-tooltip]");
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("viewBox", `0 0 ${geometry.width} ${geometry.height}`);
    svg.setAttribute("role", "group");
    svg.setAttribute("aria-label", labels.map);

    // Draw small-region markers after the land so neighbors cannot cover them.
    for (const region of geometry.regions) {
      const { code, path, point } = region;
      const count = counts?.get(code) ?? 0;
      const feature = document.createElementNS(svgNamespace, "g");
      feature.classList.add("book-visits-map-feature");
      feature.dataset.visitLevel = getLevel(count);
      if (code && counts) {
        feature.dataset.mapRegion = code;
        if (count > 0) {
          feature.setAttribute("tabindex", "0");
          feature.setAttribute("role", "img");
          feature.setAttribute("aria-label", `${regionName(code)}, ${formatViews(count)}`);
        }
      }
      if (path) {
        const shape = document.createElementNS(svgNamespace, "path");
        shape.setAttribute("d", path);
        feature.append(shape);
      }
      if (point) {
        const marker = document.createElementNS(svgNamespace, "circle");
        marker.setAttribute("cx", point[0]);
        marker.setAttribute("cy", point[1]);
        marker.setAttribute("r", count > 0 ? 2.3 : 1.3);
        feature.append(marker);
      }
      svg.append(feature);
    }

    const showTooltip = (feature, clientX, clientY) => {
      const code = feature?.dataset.mapRegion;
      if (!code) {
        tooltip.hidden = true;
        return;
      }
      tooltip.querySelector("strong").textContent = regionName(code);
      tooltip.querySelector("span").textContent = formatViews(counts.get(code) ?? 0);
      tooltip.hidden = false;
      const bounds = canvas.getBoundingClientRect();
      const left = clientX - bounds.left + 12;
      const top = clientY - bounds.top;
      tooltip.style.left = `${Math.max(8, Math.min(left, bounds.width - tooltip.offsetWidth - 8))}px`;
      tooltip.style.top = `${Math.max(8, Math.min(top - tooltip.offsetHeight - 10, bounds.height - tooltip.offsetHeight - 8))}px`;
    };

    svg.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "touch") {
        showTooltip(event.target.closest("[data-map-region]"), event.clientX, event.clientY);
      }
    });
    svg.addEventListener("click", (event) => {
      showTooltip(event.target.closest("[data-map-region]"), event.clientX, event.clientY);
    });
    svg.addEventListener("pointerleave", () => { tooltip.hidden = true; });
    svg.addEventListener("focusin", (event) => {
      const bounds = event.target.getBoundingClientRect();
      showTooltip(event.target, bounds.left + bounds.width / 2, bounds.top + bounds.height / 2);
    });
    svg.addEventListener("focusout", () => { tooltip.hidden = true; });
    svg.addEventListener("keydown", (event) => {
      if (event.key === "Escape") tooltip.hidden = true;
    });
    tooltip.hidden = true;
    canvas.querySelector("svg")?.remove();
    canvas.prepend(svg);
    page.querySelector("[data-visits-map]").hidden = false;

    const legend = page.querySelector("[data-visits-legend]");
    legend.replaceChildren(...["0", "1–9", "10–99", "100–999", "1,000+"].map((range, level) => {
      const item = document.createElement("li");
      item.dataset.visitLevel = level;
      item.textContent = range;
      return item;
    }));
    legend.hidden = !counts;
  }

  function renderTotals(page, counts, regionName, numberFormat) {
    const rows = [...counts].sort(([left, a], [right, b]) => b - a || left.localeCompare(right));
    page.querySelector("[data-visits-total]").textContent = numberFormat.format(
      rows.reduce((total, [, views]) => total + views, 0),
    );
    page.querySelector("[data-visits-region-total]").textContent = numberFormat.format(
      rows.filter(([code]) => code !== "ZZ").length,
    );
    page.querySelector("[data-visits-overview]").hidden = false;
    const tableBody = page.querySelector("[data-visits-rows]");
    tableBody.replaceChildren(...rows.map(([code, views]) => {
      const row = document.createElement("tr");
      const region = document.createElement("th");
      region.scope = "row";
      region.textContent = regionName(code);
      const count = document.createElement("td");
      count.textContent = numberFormat.format(views);
      row.append(region, count);
      return row;
    }));
    page.querySelector("[data-visits-breakdown]").hidden = rows.length === 0;
  }

  function init() {
    const sidebar = document.querySelector("[data-visit-sidebar]");
    if (!sidebar) return;
    const detailPage = document.querySelector("[data-visits-page]");
    const english = document.body.dataset.docsLanguage === "en";
    const locale = english ? "en" : "zh-CN";
    const labels = english ? {
      sidebar: "Visit statistics",
      loading: "Loading visit statistics…",
      disabled: "Visit statistics have not been enabled.",
      unavailable: "Visit statistics are temporarily unavailable.",
      mapFailure: "The world map could not load.",
      empty: "No page views have been recorded yet.",
      mainlandChina: "Mainland China",
      unknown: "Unknown region",
      map: "World map of page views by country or region",
    } : {
      sidebar: "访问统计",
      loading: "正在读取访问统计…",
      disabled: "访问统计尚未启用。",
      unavailable: "暂时无法读取访问统计。",
      mapFailure: "暂时无法加载世界地图。",
      empty: "目前还没有访问记录。",
      mainlandChina: "中国大陆",
      unknown: "未知地区",
      map: "按国家或地区统计页面访问量的世界地图",
    };
    const numberFormat = new Intl.NumberFormat(locale);
    const regionNames = new Intl.DisplayNames([locale], { type: "region" });
    const regionName = (code) => {
      if (code === "CN") return labels.mainlandChina;
      return code === "ZZ" ? labels.unknown : regionNames.of(code);
    };
    const formatViews = (views) => english
      ? `${numberFormat.format(views)} page view${views === 1 ? "" : "s"}`
      : `累计 ${numberFormat.format(views)} 次访问`;

    const sidebarRegion = sidebar.querySelector("[data-visit-region]");
    const sidebarCount = sidebar.querySelector("[data-visit-count]");
    sidebarRegion.textContent = labels.sidebar;
    const showRegion = ({ region, views }) => {
      if (!/^[A-Z]{2}$/.test(region) || !Number.isSafeInteger(views) || views < 0) return;
      sidebarRegion.textContent = regionName(region);
      sidebarCount.textContent = formatViews(views);
      sidebarCount.hidden = false;
    };

    const api = sidebar.dataset.visitsApi;
    if (!detailPage) {
      if (!api || !/^https?:$/.test(location.protocol)) return;
      const noTracking = navigator.globalPrivacyControl === true || navigator.doNotTrack === "1";
      const recordVisit = () => {
        const url = new URL(api);
        if (noTracking) url.searchParams.set("summary", "1");
        readJson(url, { method: noTracking ? "GET" : "POST", keepalive: !noTracking })
          .then(showRegion)
          .catch(() => { sidebarCount.textContent = labels.unavailable; sidebarCount.hidden = false; });
      };
      if (document.prerendering) {
        document.addEventListener("prerenderingchange", recordVisit, { once: true });
      } else {
        recordVisit();
      }
      return;
    }

    const status = detailPage.querySelector("[data-visits-status]");
    const retry = detailPage.querySelector("[data-visits-retry]");
    let mapPromise;
    const load = async () => {
      status.textContent = labels.loading;
      retry.hidden = true;
      mapPromise ??= readJson(mapUrl, { timeout: 30_000 }).catch((error) => {
        mapPromise = undefined;
        throw error;
      });
      const [map, data] = await Promise.allSettled([mapPromise, api ? readJson(api) : null]);
      let counts = null;
      if (data.status === "fulfilled" && data.value) {
        showRegion(data.value);
        counts = new Map(data.value.regions
          .filter(({ region, views }) => /^[A-Z]{2}$/.test(region) && Number.isSafeInteger(views) && views > 0)
          .map(({ region, views }) => [region, views]));
        renderTotals(detailPage, counts, regionName, numberFormat);
      }
      if (map.status === "fulfilled") {
        renderMap(detailPage, map.value, counts, labels, regionName, formatViews);
      }
      const messages = [];
      if (!api) messages.push(labels.disabled);
      else if (!counts) messages.push(labels.unavailable);
      else if (!counts.size) messages.push(labels.empty);
      if (map.status === "rejected") messages.push(labels.mapFailure);
      status.textContent = messages.join(" ");
      retry.hidden = data.status !== "rejected" && map.status !== "rejected";
    };
    retry.addEventListener("click", load);
    load();
  }

  if (document.readyState === "loading") {
    // Start as soon as the page is parsed, even while theme assets are loading.
    document.addEventListener("readystatechange", init, { once: true });
  } else {
    init();
  }
})();
