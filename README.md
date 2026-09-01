# AscendMOEA Documentation

This repository contains both the maintainable Sphinx sources and the generated
static website for AscendMOEA.

- `docs-src/source/`: Chinese and English documentation sources, theme assets,
  and API reference sources.
- Repository root: generated HTML published by GitHub Pages and exported to the
  linked Chinese and English Read the Docs projects.

To rebuild locally:

```bash
python -m pip install -r docs-src/requirements.txt
export ASCENDMOEA_SOURCE_DIR=../../../AscendMOEA/src/ascendmoea
python -m sphinx -b html -W --keep-going -a docs-src/source docs-src/_build/html
```

`ASCENDMOEA_SOURCE_DIR` points to the `ascendmoea` package directory and is
resolved from `docs-src/source/` when a relative value is used.

After a successful build, publish the contents of `docs-src/_build/html/` to the
repository root while preserving the repository metadata, `docs-src/`, and the
Read the Docs configuration files.
