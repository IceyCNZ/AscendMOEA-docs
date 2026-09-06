(() => {
  if (!("ChineseStemmer" in window)) {
    Object.defineProperty(window, "ChineseStemmer", {
      configurable: true,
      get: () => window.EnglishStemmer,
    });
  }

  const PAGE_PAIRS = {
    "index": "en/index",
    "en/index": "index",
    "00_阅读路线": "en/00_reading_guide",
    "en/00_reading_guide": "00_阅读路线",
    "01_平台定位与边界": "en/01_platform_scope",
    "en/01_platform_scope": "01_平台定位与边界",
    "02_安装与昇腾环境": "en/02_installation",
    "en/02_installation": "02_安装与昇腾环境",
    "03_第一个优化任务": "en/03_first_optimization",
    "en/03_first_optimization": "03_第一个优化任务",
    "04_核心对象与执行流": "en/04_core_workflow",
    "en/04_core_workflow": "04_核心对象与执行流",
    "05_算法目录与选择": "en/05_algorithm_catalog",
    "en/05_algorithm_catalog": "05_算法目录与选择",
    "06_问题库与数据资源": "en/06_problem_library",
    "en/06_problem_library": "06_问题库与数据资源",
    "07_张量算子手册": "en/07_tensor_operators",
    "en/07_tensor_operators": "07_张量算子手册",
    "08_自定义问题开发": "en/08_custom_problems",
    "en/08_custom_problems": "08_自定义问题开发",
    "09_自定义算法开发": "en/09_custom_algorithms",
    "en/09_custom_algorithms": "09_自定义算法开发",
    "10_指标实验与监控": "en/10_experiments",
    "en/10_experiments": "10_指标实验与监控",
    "11_CPU与NPU性能规范": "en/11_performance",
    "en/11_performance": "11_CPU与NPU性能规范",
    "12_多NPU批量调度": "en/12_multi_npu",
    "en/12_multi_npu": "12_多NPU批量调度",
    "13_故障定位手册": "en/13_troubleshooting",
    "en/13_troubleshooting": "13_故障定位手册",
    "14_可运行案例集": "en/14_examples",
    "en/14_examples": "14_可运行案例集",
    "15_API速查": "en/15_api_index",
    "en/15_api_index": "15_API速查",
    "16_API核心与工作流": "en/16_core_api",
    "en/16_core_api": "16_API核心与工作流",
    "17_API算法": "en/17_algorithm_api",
    "en/17_algorithm_api": "17_API算法",
    "18_API问题": "en/18_problem_api",
    "en/18_problem_api": "18_API问题",
    "19_API算子指标实验绘图": "en/19_analysis_api",
    "en/19_analysis_api": "19_API算子指标实验绘图",
    "api/index": "en/api/index",
    "en/api/index": "api/index",
  };

  const ENGLISH_PAGE_NAMES = new Set([
    "index.html",
    "00_reading_guide.html",
    "01_platform_scope.html",
    "02_installation.html",
    "03_first_optimization.html",
    "04_core_workflow.html",
    "05_algorithm_catalog.html",
    "06_problem_library.html",
    "07_tensor_operators.html",
    "08_custom_problems.html",
    "09_custom_algorithms.html",
    "10_experiments.html",
    "11_performance.html",
    "12_multi_npu.html",
    "13_troubleshooting.html",
    "14_examples.html",
    "15_api_index.html",
    "16_core_api.html",
    "17_algorithm_api.html",
    "18_problem_api.html",
    "19_analysis_api.html",
  ]);

  const ready = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, {once: true});
    } else {
      callback();
    }
  };

  ready(() => {
    const pagename = typeof DOCUMENTATION_OPTIONS !== "undefined"
      ? DOCUMENTATION_OPTIONS.pagename || "index"
      : "index";
    const params = new URLSearchParams(window.location.search);
    const sharedApiPage = pagename.startsWith("api/generated/");
    const searchPage = pagename === "search";
    const isEnglish = pagename.startsWith("en/")
      || (sharedApiPage && params.get("lang") === "en")
      || (searchPage && params.get("lang") === "en");
    const siteScript = document.querySelector('script[src*="_static/site.js"]');
    const rootUrl = siteScript ? new URL("../", siteScript.src) : new URL("./", window.location.href);
    const documentUrl = (target) => new URL(`${target}.html`, rootUrl);

    document.documentElement.lang = isEnglish ? "en" : "zh-CN";
    document.body.dataset.docsLanguage = isEnglish ? "en" : "zh";

    const sidebarItems = document.querySelector(
      ".bd-sidebar-primary .sidebar-primary-items__start",
    );
    const sidebarNavigationItem = document.querySelector(".book-sidebar-navigation")
      ?.closest(".sidebar-primary-item");
    const sidebarMetaItem = document.querySelector(".book-sidebar-meta")
      ?.closest(".sidebar-primary-item");
    if (sidebarItems && sidebarNavigationItem && sidebarMetaItem) {
      const scrollArea = document.createElement("div");
      scrollArea.className = "book-sidebar-scroll-area";
      sidebarNavigationItem.before(scrollArea);
      scrollArea.append(sidebarNavigationItem, sidebarMetaItem);
    }

    document.querySelectorAll(".bd-article table").forEach((table) => {
      if (table.parentElement?.matches(".table-wrapper, .pst-scrollable-table-container, .book-table-scroll")) {
        return;
      }
      const wrapper = document.createElement("div");
      wrapper.className = "book-table-scroll";
      wrapper.tabIndex = 0;
      wrapper.setAttribute("role", "region");
      wrapper.setAttribute(
        "aria-label",
        table.querySelector("caption")?.textContent?.trim()
          || (document.documentElement.lang.startsWith("zh") ? "可横向滚动的表格" : "Scrollable table"),
      );
      table.before(wrapper);
      wrapper.appendChild(table);
    });

    document.querySelectorAll("[data-lang-view]").forEach((element) => {
      element.hidden = element.dataset.langView !== (isEnglish ? "en" : "zh");
    });

    const languageSwitcher = document.querySelector(".book-language-switcher");
    const languageButton = document.querySelector(".book-language-button");
    let languageCloseTimer;
    const setLanguageMenuOpen = (isOpen) => {
      window.clearTimeout(languageCloseTimer);
      languageSwitcher?.classList.toggle("is-open", isOpen);
      languageButton?.setAttribute("aria-expanded", String(isOpen));
    };
    const scheduleLanguageMenuClose = () => {
      window.clearTimeout(languageCloseTimer);
      languageCloseTimer = window.setTimeout(() => setLanguageMenuOpen(false), 160);
    };

    languageSwitcher?.addEventListener("mouseenter", () => setLanguageMenuOpen(true));
    languageSwitcher?.addEventListener("mouseleave", scheduleLanguageMenuClose);
    languageSwitcher?.addEventListener("focusin", () => setLanguageMenuOpen(true));
    languageSwitcher?.addEventListener("focusout", (event) => {
      if (!languageSwitcher.contains(event.relatedTarget)) setLanguageMenuOpen(false);
    });
    languageButton?.addEventListener("click", (event) => {
      if (!window.matchMedia("(hover: none)").matches) return;
      event.stopPropagation();
      setLanguageMenuOpen(!languageSwitcher?.classList.contains("is-open"));
    });
    document.addEventListener("click", () => {
      setLanguageMenuOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false);
      }
    });

    const bridgeSidebarToggle = (selector, modalSelector) => {
      const buttons = [...document.querySelectorAll(selector)];
      const boundButton = buttons[0];
      if (!boundButton) return;
      buttons.slice(1).forEach((button) => {
        button.addEventListener("click", () => {
          const modal = document.querySelector(modalSelector);
          if (!modal?.open) boundButton.click();
        });
      });
    };
    bridgeSidebarToggle(".primary-toggle", "#pst-primary-sidebar-modal");
    bridgeSidebarToggle(".secondary-toggle", "#pst-secondary-sidebar-modal");

    const languageLabel = document.querySelector("[data-language-label]");
    if (languageLabel) languageLabel.textContent = isEnglish ? "EN" : "中";

    const currentUrl = new URL(window.location.href);
    const pairedPage = PAGE_PAIRS[pagename];
    let chineseUrl;
    let englishUrl;

    if (sharedApiPage) {
      chineseUrl = new URL(currentUrl);
      chineseUrl.searchParams.delete("lang");
      englishUrl = new URL(currentUrl);
      englishUrl.searchParams.set("lang", "en");
    } else if (searchPage) {
      chineseUrl = documentUrl("search");
      englishUrl = documentUrl("search");
      englishUrl.searchParams.set("lang", "en");
    } else if (isEnglish) {
      chineseUrl = documentUrl(pairedPage || "index");
      englishUrl = documentUrl(pagename);
    } else {
      chineseUrl = documentUrl(pagename);
      englishUrl = documentUrl(pairedPage || "en/index");
    }

    if (window.location.hash) {
      chineseUrl.hash = window.location.hash;
      englishUrl.hash = window.location.hash;
    }

    document.querySelectorAll("[data-language-link]").forEach((link) => {
      const linkLanguage = link.dataset.languageLink;
      link.href = (linkLanguage === "en" ? englishUrl : chineseUrl).href;
      if ((linkLanguage === "en") === isEnglish) link.setAttribute("aria-current", "true");
    });

    document.querySelectorAll('form[role="search"], form.bd-search, form.searchform').forEach((form) => {
      let languageInput = form.querySelector('input[name="lang"]');
      if (isEnglish && !languageInput) {
        languageInput = document.createElement("input");
        languageInput.type = "hidden";
        languageInput.name = "lang";
        form.appendChild(languageInput);
      }
      if (languageInput) {
        languageInput.value = "en";
        languageInput.disabled = !isEnglish;
      }
    });

    if (isEnglish) {
      document.querySelectorAll('a[href*="/api/generated/"]').forEach((link) => {
        const target = new URL(link.href, window.location.href);
        target.searchParams.set("lang", "en");
        link.href = target.href;
      });
    }

    const normalizePath = (value) => decodeURI(value.replace(/\/$/, "/index.html"));
    const currentPath = normalizePath(window.location.pathname);
    document.querySelectorAll(".book-site-navigation a, .book-top-navigation a").forEach((link) => {
      const target = new URL(link.href, window.location.href);
      if (normalizePath(target.pathname) === currentPath) {
        link.classList.add("current");
        link.setAttribute("aria-current", "page");
      }
    });

    const visibleNavigation = document.querySelector(`.book-site-navigation[data-lang-view="${isEnglish ? "en" : "zh"}"]`);
    const currentSidebarLink = visibleNavigation?.querySelector("a.current");
    const navigationSections = [...(visibleNavigation?.querySelectorAll("details.book-nav-section") || [])];
    if (currentSidebarLink) {
      navigationSections.forEach((section) => {
        section.open = section.contains(currentSidebarLink);
      });
    } else if (sharedApiPage && navigationSections.length) {
      navigationSections.forEach((section, index) => {
        section.open = index === navigationSections.length - 1;
      });
    }

    document.querySelectorAll(".prev-next-area a").forEach((link) => {
      if (sharedApiPage) return;
      const pathname = new URL(link.href, window.location.href).pathname;
      const pointsToEnglish = /\/en\//.test(pathname);
      if (pointsToEnglish !== isEnglish) link.remove();
    });

    const localizeEnglishInterface = () => {
      if (!isEnglish) return;
      const replacements = new Map([
        ["上一页", "Previous"],
        ["下一页", "Next"],
        ["上一个", "Previous"],
        ["下一个", "Next"],
        ["previous", "Previous"],
        ["next", "Next"],
        ["讨论区", "Discussions"],
        ["Python API 文档", "Python API Documentation"],
        ["搜索", "Search"],
        ["搜索文档", "Search documentation"],
        ["搜索结果", "Search results"],
        ["颜色模式", "Color mode"],
        ["浅色", "Light"],
        ["深色", "Dark"],
        ["系统设置", "System settings"],
      ]);
      document.querySelectorAll("a, button, span, p, h1, h2, h3, label").forEach((element) => {
        const value = element.textContent.trim();
        if (replacements.has(value)) element.textContent = replacements.get(value);
      });
      document.querySelectorAll('input[type="search"], input[name="q"]').forEach((input) => {
        input.placeholder = "Search documentation";
        input.setAttribute("aria-label", "Search documentation");
      });
      document.querySelectorAll(".search-button__default-text").forEach((element) => {
        element.textContent = "Search";
      });
      document.querySelectorAll(".search-button__button").forEach((button) => {
        button.title = "Search";
        button.setAttribute("aria-label", "Search");
      });
      document.querySelectorAll(".primary-toggle").forEach((button) => {
        button.title = "Site navigation";
        button.setAttribute("aria-label", "Site navigation");
      });
      document.querySelectorAll(".secondary-toggle").forEach((button) => {
        button.title = "On this page";
        button.setAttribute("aria-label", "On this page");
      });
      languageButton?.setAttribute("aria-label", "Switch language");
    };

    localizeEnglishInterface();

    const searchResults = document.querySelector("#search-results");
    if (searchResults) {
      const filterResults = () => {
        const items = [...searchResults.querySelectorAll("ul.search > li")];
        if (!items.length) return;

        items.forEach((item) => {
          const href = item.querySelector("a")?.getAttribute("href") || "";
          const pathname = new URL(href, window.location.href).pathname;
          const filename = pathname.split("/").pop();
          const englishDocument = /\/en\//.test(pathname) && ENGLISH_PAGE_NAMES.has(filename);
          const sharedApiDocument = /\/api\/generated\//.test(pathname);
          item.hidden = !(sharedApiDocument || (isEnglish ? englishDocument : !/\/en\//.test(pathname)));
        });

        if (isEnglish) {
          const resultHeading = searchResults.querySelector("h2");
          if (resultHeading && resultHeading.textContent !== "Search results") {
            resultHeading.textContent = "Search results";
          }
          const summary = searchResults.querySelector(".search-summary");
          if (summary) {
            const count = items.filter((item) => !item.hidden).length;
            const text = `Search complete. ${count} matching pages found.`;
            if (summary.textContent !== text) summary.textContent = text;
          }
        }
      };

      new MutationObserver(filterResults).observe(searchResults, {childList: true, subtree: true});
      filterResults();
    }
  });
})();
