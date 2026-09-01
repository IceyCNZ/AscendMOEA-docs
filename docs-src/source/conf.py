from __future__ import annotations

import os
from datetime import date
from pathlib import Path

project = "AscendMOEA"
author = "AscendMOEA Developers"
copyright = f"{date.today().year}, AscendMOEA Developers"
version = "1.0.0"
release = version
language = "zh_CN"

extensions = [
    "myst_parser",
    "autodoc2",
    "sphinx.ext.intersphinx",
    "sphinx_copybutton",
    "sphinx_design",
    "sphinxcontrib.mermaid",
]

source_suffix = {".rst": "restructuredtext", ".md": "markdown"}
root_doc = "index"
templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store", "README.md"]

myst_enable_extensions = [
    "attrs_block",
    "colon_fence",
    "deflist",
    "fieldlist",
    "substitution",
    "tasklist",
]
myst_heading_anchors = 3
myst_enable_checkboxes = True
myst_fence_as_directive = ["mermaid"]

# Static API analysis keeps documentation builds independent from Torch/NPU imports.
package_setting = os.environ.get("ASCENDMOEA_SOURCE_DIR", "../../src/ascendmoea")
package_path = Path(package_setting)
if not package_path.is_absolute():
    package_path = Path(__file__).parent / package_path
if not package_path.is_dir():
    raise RuntimeError(
        "AscendMOEA source is required to build the API reference. "
        "Set ASCENDMOEA_SOURCE_DIR to the ascendmoea package directory."
    )
autodoc2_packages = [
    {
        "path": package_setting,
        "module": "ascendmoea",
        "exclude_dirs": ["__pycache__", "vendor"],
    }
]
autodoc2_output_dir = "api/generated"
autodoc2_render_plugin = "myst"
autodoc2_module_all_regexes = [
    r"ascendmoea$",
    r"ascendmoea\.algorithms$",
    r"ascendmoea\.operators(?:\..*)?$",
    r"ascendmoea\.(?:experiment|metrics|plotting|workflow)$",
]
autodoc2_hidden_objects = {"private", "dunder", "inherited"}
autodoc2_skip_module_regexes = [
    r"ascendmoea\.vendor(?:\..*)?",
]
autodoc2_sort_names = False
autodoc2_index_template = """Python API Reference
====================

These pages are generated from the current source tree and Python docstrings.

.. toctree::
   :titlesonly:
   :maxdepth: 3
   :glob:

   ascendmoea/ascendmoea
   ascendmoea/ascendmoea.algorithms*
   ascendmoea/ascendmoea.compiled_truncation
   ascendmoea/ascendmoea.core
   ascendmoea/ascendmoea.device
   ascendmoea/ascendmoea.encoded_ga
   ascendmoea/ascendmoea.experiment
   ascendmoea/ascendmoea.metrics
   ascendmoea/ascendmoea.operators*
   ascendmoea/ascendmoea.plotting
   ascendmoea/ascendmoea.problems
   ascendmoea/ascendmoea.registry
   ascendmoea/ascendmoea.utils
   ascendmoea/ascendmoea.workflow
"""

intersphinx_mapping = {
    "python": ("https://docs.python.org/3", None),
    "numpy": ("https://numpy.org/doc/stable/", None),
    "torch": ("https://docs.pytorch.org/docs/stable/", None),
}

html_theme = "shibuya"
html_title = "AscendMOEA Documentation"
html_short_title = "AscendMOEA"
html_logo = "_static/AscendMOEA_logo.svg"
html_favicon = "_static/favicon.svg"
html_static_path = ["_static"]
html_css_files = ["custom.css"]
html_js_files = ["site.js"]
html_copy_source = True
html_show_sourcelink = True
html_last_updated_fmt = "%Y-%m-%d"

html_theme_options = {
    "accent_color": "blue",
    "color_mode": "auto",
    # Let code blocks follow the active light/dark colour scheme.
    "dark_code": False,
    "github_url": "https://github.com/dqlme/AscendMOEA",
    # Discussion is rendered after the documentation navigation by our layout.
    "globaltoc_expand_depth": 0,
    "toctree_maxdepth": 4,
    "show_ai_links": True,
    # A sentinel enables the header block; the override renders localized links.
    "nav_links": [{"title": "navigation", "url": "index"}],
}

html_context = {
    "source_type": "github",
    "source_user": "IceyCNZ",
    "source_repo": "AscendMOEA-docs",
    "source_version": "main",
    "source_docs_path": "/docs-src/source/",
    "repo_type": "github",
    "repo_user": "dqlme",
    "repo_repo": "AscendMOEA",
    "languages": [("中文", "index.html"), ("English", "en/index.html")],
}

copybutton_prompt_text = r">>> |\.\.\. |\$ "
copybutton_prompt_is_regexp = True

pygments_style = "friendly"
pygments_dark_style = "github-dark"

html_sidebars = {
    "**": [
        "sidebars/localtoc.html",
        "sidebars/repo-stats.html",
    ]
}
