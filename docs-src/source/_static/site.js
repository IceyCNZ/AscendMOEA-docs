(() => {
  // Sphinx 9's Chinese search bundle aliases the English stemmer under an
  // undefined ChineseStemmer name. Resolve that alias lazily after the
  // language bundle has created EnglishStemmer.
  if (!("ChineseStemmer" in window)) {
    Object.defineProperty(window, "ChineseStemmer", {
      configurable: true,
      get: () => window.EnglishStemmer,
    });
  }

  const params = new URLSearchParams(window.location.search);
  const splitLanguage = document.documentElement.dataset.rtdLanguageBuild || "";
  const isSplitEnglish = splitLanguage === "en";
  const isEnglish = isSplitEnglish
    || (!splitLanguage && window.location.pathname.includes("/en/"))
    || params.get("lang") === "en";
  const script = document.querySelector('script[src*="_static/site.js"]');
  const siteRoot = script ? new URL(script.src).pathname.split("/_static/")[0] : "";
  const url = (path) => `${siteRoot}/${path}`.replace(/\/{2,}/g, "/");
  const englishUrl = (path) => url(`${isSplitEnglish ? "" : "en/"}${path}`);
  document.documentElement.lang = isEnglish ? "en" : "zh-CN";
  document.body.dataset.docsLanguage = isEnglish ? "en" : "zh";

  const topLinks = document.querySelector(".sy-head-links > ul");
  const hasEnglishTopLinks = [...(topLinks?.querySelectorAll("a") || [])]
    .some((link) => link.getAttribute("href")?.includes("00_reading_guide"));

  if (isEnglish && !hasEnglishTopLinks) {
    if (topLinks) topLinks.innerHTML = `
      <li class="link"><a href="${englishUrl("index.html")}">Home</a></li>
      <li class="link"><a href="${englishUrl("00_reading_guide.html")}">Guide</a></li>
      <li class="link"><a href="${englishUrl("15_api_index.html")}">API Reference</a></li>
      <li class="link"><a href="${englishUrl("14_examples.html")}">Examples</a></li>`;

    const navigation = document.querySelector(".docs-nav");
    if (navigation) navigation.innerHTML = `
      <p class="caption">Getting started</p><ul>
        <li><a href="${englishUrl("00_reading_guide.html")}">Documentation guide</a></li>
        <li><a href="${englishUrl("01_platform_scope.html")}">Platform scope</a></li>
        <li><a href="${englishUrl("02_installation.html")}">Installation and Ascend environment</a></li>
        <li><a href="${englishUrl("03_first_optimization.html")}">Your first optimization</a></li></ul>
      <p class="caption">Core components</p><ul>
        <li><a href="${englishUrl("04_core_workflow.html")}">Core objects and workflow</a></li>
        <li><a href="${englishUrl("05_algorithm_catalog.html")}">Algorithm catalog</a></li>
        <li><a href="${englishUrl("06_problem_library.html")}">Problem library</a></li>
        <li><a href="${englishUrl("07_tensor_operators.html")}">Tensor operators</a></li></ul>
      <p class="caption">Development</p><ul>
        <li><a href="${englishUrl("08_custom_problems.html")}">Custom problems</a></li>
        <li><a href="${englishUrl("09_custom_algorithms.html")}">Custom algorithms</a></li>
        <li><a href="${englishUrl("14_examples.html")}">Runnable examples</a></li></ul>
      <p class="caption">Experiments and performance</p><ul>
        <li><a href="${englishUrl("10_experiments.html")}">Metrics, experiments, and monitoring</a></li>
        <li><a href="${englishUrl("11_performance.html")}">CPU and NPU performance</a></li>
        <li><a href="${englishUrl("12_multi_npu.html")}">Multi-NPU scheduling</a></li>
        <li><a href="${englishUrl("13_troubleshooting.html")}">Troubleshooting</a></li></ul>
      <p class="caption">API reference</p><ul>
        <li><a href="${englishUrl("15_api_index.html")}">Public API index</a></li>
        <li><a href="${englishUrl("16_core_api.html")}">Core and workflow API</a></li>
        <li><a href="${englishUrl("17_algorithm_api.html")}">Algorithm API</a></li>
        <li><a href="${englishUrl("18_problem_api.html")}">Problem API</a></li>
        <li><a href="${englishUrl("19_analysis_api.html")}">Operators and analysis API</a></li>
        <li><a href="${englishUrl("api/index.html")}">Python API Documentation</a></li></ul>
      <div class="sidebar-links discussion-last"><ul><li><a class="icon-link" href="https://github.com/dqlme/AscendMOEA/discussions"><span>Discussions</span></a></li></ul></div>`;

    navigation?.querySelectorAll(":scope > p.caption").forEach((caption) => {
      const list = caption.nextElementSibling;
      if (!list || list.tagName !== "UL") return;
      const section = document.createElement("details");
      section.className = "nav-section";
      const summary = document.createElement("summary");
      summary.className = "caption";
      summary.textContent = caption.textContent;
      caption.replaceWith(section);
      section.append(summary, list);
    });
  }

  document.querySelectorAll(".docs-nav a").forEach((link) => {
    if (new URL(link.href, window.location.href).pathname === window.location.pathname) {
      link.classList.add("current");
      link.setAttribute("aria-current", "page");
    }
  });

  const navSections = [...document.querySelectorAll(".docs-nav details.nav-section")];
  if (navSections.length) {
    const currentSection = document.querySelector(".docs-nav a.current")?.closest("details.nav-section");
    const sectionToOpen = currentSection
      || (window.location.pathname.includes("/api/") ? navSections.at(-1) : null);
    if (sectionToOpen) sectionToOpen.open = true;
  }

  const searchForm = document.querySelector("form.searchbox");
  if (searchForm && isEnglish && !searchForm.querySelector('input[name="lang"]')) {
    const language = document.createElement("input");
    language.type = "hidden";
    language.name = "lang";
    language.value = "en";
    searchForm.appendChild(language);
  }

  const resultsSearchForm = document.querySelector("form.searchform");
  if (resultsSearchForm && isEnglish && !resultsSearchForm.querySelector('input[name="lang"]')) {
    const language = document.createElement("input");
    language.type = "hidden";
    language.name = "lang";
    language.value = "en";
    resultsSearchForm.appendChild(language);
  }

  if (isEnglish) {
    document.querySelectorAll('main a[href*="/api/generated/"]').forEach((link) => {
      const target = new URL(link.href, window.location.href);
      target.searchParams.set("lang", "en");
      link.href = target.href;
    });

    const isEnglishHomepage = isSplitEnglish
      ? /\/en\/[^/]+\/?$/.test(window.location.pathname)
      : /\/en\/(?:index\.html)?$/.test(window.location.pathname);
    if (isEnglishHomepage) {
      document.querySelector(".navigation-prev")?.remove();
    }
  }

  const languageButton = document.querySelector(".nav-languages > button");
  if (languageButton && isEnglish) {
    languageButton.setAttribute("aria-label", "Switch language");
    const label = languageButton.querySelector("span");
    if (label) label.textContent = "Language";
  }

  if (!splitLanguage && window.location.pathname.endsWith("/search.html")) {
    const chineseSearchUrl = new URL(window.location.href);
    chineseSearchUrl.searchParams.delete("lang");
    const englishSearchUrl = new URL(window.location.href);
    englishSearchUrl.searchParams.set("lang", "en");
    const languageChoices = document.querySelectorAll(".nav-languages-choices a");
    languageChoices.forEach((link) => {
      if (link.lang === "zh-CN") link.href = chineseSearchUrl.href;
      if (link.lang === "en") link.href = englishSearchUrl.href;
    });
  }

  if (isEnglish) {
    const searchHeading = document.querySelector("#search-documentation");
    if (searchHeading) searchHeading.textContent = "Search";
    const searchInstruction = [...document.querySelectorAll("article > p")].find(
      (paragraph) => paragraph.textContent.trim() === "当搜索多个关键词时，只会显示同时包含所有关键词的内容。",
    );
    if (searchInstruction) {
      searchInstruction.textContent = "When searching for multiple terms, only pages containing all terms are shown.";
    }
    const searchSubmit = document.querySelector(".searchform button");
    if (searchSubmit) searchSubmit.textContent = "Search";
  }

  const searchResults = document.querySelector("#search-results");
  if (searchResults) {
    const localizeResults = () => {
      const items = [...searchResults.querySelectorAll("ul.search > li")];
      if (!items.length) return;

      items.forEach((item) => {
        const href = item.querySelector("a")?.getAttribute("href") || "";
        const pathname = new URL(href, window.location.href).pathname;
        const englishPageNames = new Set([
          "index.html", "00_reading_guide.html", "01_platform_scope.html",
          "02_installation.html", "03_first_optimization.html", "04_core_workflow.html",
          "05_algorithm_catalog.html", "06_problem_library.html", "07_tensor_operators.html",
          "08_custom_problems.html", "09_custom_algorithms.html", "10_experiments.html",
          "11_performance.html", "12_multi_npu.html", "13_troubleshooting.html",
          "14_examples.html", "15_api_index.html", "16_core_api.html",
          "17_algorithm_api.html", "18_problem_api.html", "19_analysis_api.html",
        ]);
        const isEnglishDocument = isSplitEnglish
          ? englishPageNames.has(pathname.split("/").pop())
          : /\/en\//.test(pathname);
        const isGeneratedApiDocument = /\/api\//.test(pathname);
        const belongsToLanguage = isEnglish
          ? isEnglishDocument || isGeneratedApiDocument
          : !isEnglishDocument && !isGeneratedApiDocument;
        item.hidden = !belongsToLanguage;
      });

      const visibleCount = items.filter((item) => !item.hidden).length;
      if (isEnglish) {
        const heading = document.querySelector("#search-documentation");
        if (heading && heading.textContent !== "Search") heading.textContent = "Search";
        const instruction = [...document.querySelectorAll("article > p")].find(
          (paragraph) => paragraph.textContent.trim() === "当搜索多个关键词时，只会显示同时包含所有关键词的内容。",
        );
        if (instruction) {
          instruction.textContent = "When searching for multiple terms, only pages containing all terms are shown.";
        }
        const submitButton = document.querySelector(".searchform button");
        if (submitButton) submitButton.textContent = "Search";
        const resultHeading = searchResults.querySelector("h2");
        if (resultHeading && resultHeading.textContent !== "Search results") resultHeading.textContent = "Search results";
        const summary = searchResults.querySelector(".search-summary");
        const summaryText = `Search complete. ${visibleCount} matching pages found.`;
        if (summary && summary.textContent !== summaryText) summary.textContent = summaryText;
        searchResults.querySelectorAll("li.kind-object > span").forEach((span) => {
          const localized = span.textContent
            .replace("Python 类，在", "Python class, in")
            .replace("Python 函数，在", "Python function, in");
          if (localized !== span.textContent) span.textContent = localized;
        });
      }
    };
    new MutationObserver(localizeResults).observe(searchResults, {childList: true, subtree: true});
    localizeResults();
  }

  if (!isEnglish) return;

  const replacements = new Map([
    ["该页内容", "On this page"],
    ["复制页面", "Copy page"],
    ["查看 Markdown 源代码", "View Markdown source"],
    ["回到顶部", "Back to top"],
    ["上一页", "Previous"],
    ["下一页", "Next"],
    ["上一章", "Previous"],
    ["下一章", "Next"],
    ["搜索", "Search"],
    ["搜索文档", "Search documentation"],
  ]);

  document.querySelectorAll("h3, button span, a span, .page-info > span").forEach((node) => {
    const value = node.textContent.trim();
    if (replacements.has(value)) node.textContent = replacements.get(value);
  });

  const searchInput = document.querySelector('input[name="q"]');
  if (searchInput) {
    searchInput.placeholder = "Search documentation";
    searchInput.setAttribute("aria-label", "Search documentation");
  }
})();
