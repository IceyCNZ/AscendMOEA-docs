import { readFile, writeFile } from "node:fs/promises";

const { geoArea, geoNaturalEarth1, geoPath } = await import(process.env.D3_GEO_MODULE || "d3-geo");
const dataUrl = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.2/geojson/ne_50m_admin_0_map_units.geojson";
const inputPath = process.argv[2];
const data = inputPath
  ? JSON.parse(await readFile(inputPath, "utf8"))
  : await fetch(dataUrl).then((response) => {
    if (!response.ok) throw new Error(`Could not download Natural Earth data: ${response.status}`);
    return response.json();
  });

const groups = new Map();
for (const { properties, geometry } of data.features) {
  const code = [properties.ISO_A2_EH, properties.ISO_A2].find((value) => /^[A-Z]{2}$/.test(value)) ?? "";
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  const group = groups.get(code) ?? [];
  for (const polygon of polygons) {
    // D3 uses clockwise exterior rings for regions smaller than a hemisphere.
    group.push(geoArea({ type: "Polygon", coordinates: polygon }) > 2 * Math.PI
      ? polygon.map((ring) => [...ring].reverse())
      : polygon);
  }
  groups.set(code, group);
}

const width = 1080;
const height = 545;
const features = Array.from(groups, ([code, coordinates]) => ({
  type: "Feature",
  properties: { code },
  geometry: { type: "MultiPolygon", coordinates },
}));
const projection = geoNaturalEarth1().fitExtent(
  [[15, 14], [width - 15, height - 14]],
  { type: "FeatureCollection", features },
);
const project = geoPath(projection).digits(1);
const regions = features.map((feature) => {
  const region = { code: feature.properties.code, path: project(feature) };
  if (region.code && project.area(feature) < 5) {
    region.point = project.centroid(feature).map((value) => Number(value.toFixed(1)));
  }
  return region;
});
regions.sort((left, right) => Number(Boolean(left.point)) - Number(Boolean(right.point)));

const output = new URL("../source/_static/visit-map.json", import.meta.url);
await writeFile(output, JSON.stringify({ width, height, regions }) + "\n");
console.log(`Projected ${regions.length} country and region shapes.`);
