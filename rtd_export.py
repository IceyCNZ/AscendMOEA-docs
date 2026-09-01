from __future__ import annotations

import html
import os
import posixpath
import shutil
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit


ROOT = Path(__file__).resolve().parent
LANGUAGE = os.environ.get("READTHEDOCS_LANGUAGE", "zh-cn").lower()
VERSION = os.environ.get("READTHEDOCS_VERSION", "latest")
OUTPUT = Path(os.environ["READTHEDOCS_OUTPUT"]).resolve() / "html"
EXCLUDED_ROOT_ENTRIES = {
    ".git",
    ".github",
    ".readthedocs.yaml",
    "_readthedocs",
    "__pycache__",
    "rtd_export.py",
}


def language_url(language: str, relative_path: str) -> str:
    relative_path = relative_path.lstrip("./")
    if relative_path in {"", "index.html"}:
        return f"/{language}/{VERSION}/"
    return f"/{language}/{VERSION}/{relative_path}"


def resolved_site_path(page: PurePosixPath, target: str) -> str:
    return posixpath.normpath(posixpath.join(str(page.parent), target))


def without_language_query(query: str) -> str:
    values = [(key, value) for key, value in parse_qsl(query, keep_blank_values=True) if key != "lang"]
    return urlencode(values)


class PageTransformer(HTMLParser):
    def __init__(self, language: str, page: PurePosixPath, promoted: bool = False) -> None:
        super().__init__(convert_charrefs=False)
        self.language = language
        self.page = page
        self.promoted = promoted
        self.output: list[str] = []

    def rewrite_url(self, tag: str, attributes: dict[str, str | None], value: str) -> str:
        if not value or value.startswith(("#", "//")):
            return value

        parsed = urlsplit(value)
        if parsed.scheme or parsed.netloc:
            return value

        path = parsed.path.replace("\\", "/")
        link_language = (attributes.get("lang") or "").lower()

        if self.language == "zh-cn":
            resolved = resolved_site_path(self.page, path) if path else str(self.page)
            if link_language == "en" or resolved.startswith("en/"):
                if resolved.startswith("en/"):
                    target = resolved.removeprefix("en/")
                elif self.page.as_posix().startswith("api/") or self.page.name == "search.html":
                    target = self.page.as_posix()
                else:
                    target = "index.html"
                return urlunsplit(("", "", language_url("en", target), without_language_query(parsed.query), parsed.fragment))

        if self.language == "en":
            if link_language == "zh-cn":
                if self.page.as_posix().startswith("api/") or self.page.name == "search.html":
                    target = self.page.as_posix()
                else:
                    target = path
                    while target.startswith("../"):
                        target = target[3:]
                return urlunsplit(("", "", language_url("zh-cn", target), without_language_query(parsed.query), parsed.fragment))

            if link_language == "en":
                return "#"

            resolved = resolved_site_path(self.page, path) if path else str(self.page)
            if resolved.startswith("en/"):
                target = resolved.removeprefix("en/")
                return urlunsplit(("", "", language_url("en", target), without_language_query(parsed.query), parsed.fragment))

            if self.promoted and path.startswith("../"):
                path = path[3:]

        return urlunsplit(("", "", path, parsed.query, parsed.fragment))

    def render_start_tag(self, tag: str, attrs: list[tuple[str, str | None]], closed: bool) -> None:
        attributes = dict(attrs)
        rendered: list[tuple[str, str | None]] = []

        for key, value in attrs:
            if tag == "html" and key == "lang":
                value = "en" if self.language == "en" else "zh-CN"
            elif tag == "html" and key == "data-content_root" and self.promoted:
                value = "./"
            elif key in {"href", "src", "action"} and value is not None:
                value = self.rewrite_url(tag, attributes, value)
            rendered.append((key, value))

        if tag == "html" and not any(key == "data-rtd-language-build" for key, _ in rendered):
            rendered.append(("data-rtd-language-build", self.language))

        suffix = "/>" if closed else ">"
        parts = [f"<{tag}"]
        for key, value in rendered:
            if value is None:
                parts.append(f" {key}")
            else:
                parts.append(f' {key}="{html.escape(value, quote=True)}"')
        parts.append(suffix)
        self.output.append("".join(parts))

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.render_start_tag(tag, attrs, closed=False)

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.render_start_tag(tag, attrs, closed=True)

    def handle_endtag(self, tag: str) -> None:
        self.output.append(f"</{tag}>")

    def handle_data(self, data: str) -> None:
        self.output.append(data)

    def handle_entityref(self, name: str) -> None:
        self.output.append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        self.output.append(f"&#{name};")

    def handle_comment(self, data: str) -> None:
        self.output.append(f"<!--{data}-->")

    def handle_decl(self, decl: str) -> None:
        self.output.append(f"<!{decl}>")

    def handle_pi(self, data: str) -> None:
        self.output.append(f"<?{data}>")

    def transformed(self) -> str:
        return "".join(self.output)


def transform_html(source: Path, destination: Path, page: PurePosixPath, promoted: bool = False) -> None:
    parser = PageTransformer(LANGUAGE, page, promoted=promoted)
    parser.feed(source.read_text(encoding="utf-8"))
    parser.close()
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(parser.transformed(), encoding="utf-8", newline="\n")


def copy_site() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for entry in ROOT.iterdir():
        if entry.name in EXCLUDED_ROOT_ENTRIES:
            continue
        destination = OUTPUT / entry.name
        if entry.is_dir():
            shutil.copytree(entry, destination, dirs_exist_ok=True)
        else:
            shutil.copy2(entry, destination)


def build_language_site() -> None:
    copy_site()

    if LANGUAGE == "en":
        for page in OUTPUT.rglob("*.html"):
            relative = PurePosixPath(page.relative_to(OUTPUT).as_posix())
            if relative.parts and relative.parts[0] == "en":
                continue
            transform_html(page, page, relative)

        for source in sorted((ROOT / "en").glob("*.html")):
            relative = PurePosixPath(source.name)
            transform_html(source, OUTPUT / source.name, relative, promoted=True)
    else:
        for page in OUTPUT.rglob("*.html"):
            relative = PurePosixPath(page.relative_to(OUTPUT).as_posix())
            if relative.parts and relative.parts[0] == "en":
                continue
            transform_html(page, page, relative)


if __name__ == "__main__":
    build_language_site()
