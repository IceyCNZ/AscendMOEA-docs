# AscendMOEA documentation

This directory contains the maintainable Sphinx sources for the bilingual
AscendMOEA documentation.

## Layout

- `source/`: Chinese and English Markdown, templates, API pages, and assets.
- `_build/`: generated output; `html/` is the deployable combined site.
- `Makefile` and `make.bat`: cross-platform Sphinx build entry points.
- `requirements.txt`: documentation build dependencies.

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
