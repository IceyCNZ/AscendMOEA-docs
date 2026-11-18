# AscendMOEA documentation

This directory contains the maintainable Sphinx sources for the bilingual
AscendMOEA documentation.

## Layout

- `source/`: Chinese and English Markdown, templates, API pages, and assets.
- `_build/`: generated output; `html/` is the deployable combined site.
- `Makefile` and `make.bat`: cross-platform Sphinx build entry points.
- `requirements.txt`: documentation build dependencies.
- `analytics/`: visit statistics service and the world map data generator.

## Build

```bash
python -m pip install -r requirements.txt
make html
```

On Windows:

```bat
make.bat html
```

All source and asset references are relative to this directory. The generated
HTML keeps Chinese pages at the site root and English pages under `en/` so the
same output can be published to GitHub Pages and exported by Read the Docs.

The API reference reads the package from `../../src/ascendmoea`, relative to
`source/`, by default. Set
`ASCENDMOEA_SOURCE_DIR` to another package directory when the documentation and
AscendMOEA repositories are checked out separately; relative values are resolved
from `source/`.

## Visit statistics

Both documentation hosts call the same Cloudflare Pages Function, which
forwards the request to the visit statistics Worker through a service binding.
The Worker uses the country or region determined at Cloudflare's edge. A
SQLite-backed Durable Object stores region codes and counts. The statistics
page reads those counts without adding a visit. The counter honors browser
privacy preferences and excludes obvious automated requests.

The public endpoint is configured in `source/conf.py`. Deploy Worker updates
from `analytics/` with `npx wrangler@4 deploy`. Deploy Pages Function updates
from `analytics/pages/` with
`npx wrangler@4 pages deploy ./public --project-name ascendmoea-visits --branch main`.
Use the authorized Cloudflare account for both deployments. Keep the Durable
Object namespace and instance name to retain the stored counts.

Set `ASCENDMOEA_VISITS_API` during a Sphinx build to use a different endpoint, or
set it to an empty string to preview without a service. The official Read the
Docs and GitHub Pages origins are allowed by default. Local testing can set
`VISITS_ORIGINS` through `wrangler dev --var`.

The world map uses Natural Earth 1:50m Admin 0 map units. To refresh the
preprojected asset, install `d3-geo@3.1.1` in `analytics/` and run
`node build-map.mjs`. An optional GeoJSON path uses a local source instead.
