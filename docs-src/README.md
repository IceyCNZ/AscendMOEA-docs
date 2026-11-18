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

Both public documentation hosts use the same Cloudflare Worker. A SQLite-backed
Durable Object accumulates page views by the country or region determined at
Cloudflare's edge. Its database stores region codes and counts. The statistics
page reads those counts and does not increment them. Browser privacy preferences
and obvious automated requests are honored by the counter.

The public Worker endpoint is configured in `source/conf.py`. Deploy updates
from `analytics/` with `npx wrangler@4 deploy` using the authorized Cloudflare
account. Keep the existing Durable Object binding and instance name to preserve
the stored counts. Set `ASCENDMOEA_VISITS_API` during a Sphinx build to use a
different endpoint, or set it to an empty string to preview without a service.
The official Read the Docs and GitHub Pages origins are allowed by default.
Local testing can set `VISITS_ORIGINS` through `wrangler dev --var`.

The world map uses Natural Earth 1:50m Admin 0 map units. To refresh the
preprojected asset, install `d3-geo@3.1.1` in `analytics/` and run
`node build-map.mjs`. An optional GeoJSON path uses a local source instead.
