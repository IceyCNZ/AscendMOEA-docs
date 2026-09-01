(() => {
  const containsCjk = (value) => /[\u3400-\u9fff]/u.test(value);

  if (!window.Search || window.Search.__ascendChineseSearchPatched) return;
  window.Search.__ascendChineseSearchPatched = true;

  window.Search.performTermsSearch = (searchTerms, excludedTerms) => {
    const { terms, titleterms: titleTerms, filenames, docnames: docNames, titles } = Search._index;
    const scoreMap = new Map();
    const fileMap = new Map();

    searchTerms.forEach((word) => {
      const files = [];
      const records = [
        { files: Object.hasOwn(terms, word) ? terms[word] : undefined, score: Scorer.term },
        { files: Object.hasOwn(titleTerms, word) ? titleTerms[word] : undefined, score: Scorer.title },
      ];
      const supportsPartialMatch = word.length > 2 || containsCjk(word);
      if (supportsPartialMatch) {
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (!Object.hasOwn(terms, word)) {
          Object.keys(terms).forEach((term) => {
            if (term.match(escaped)) records.push({ files: terms[term], score: Scorer.partialTerm });
          });
        }
        if (!Object.hasOwn(titleTerms, word)) {
          Object.keys(titleTerms).forEach((term) => {
            if (term.match(escaped)) records.push({ files: titleTerms[term], score: Scorer.partialTitle });
          });
        }
      }

      records.forEach((record) => {
        if (record.files === undefined) return;
        const matchedFiles = record.files.length === undefined ? [record.files] : record.files;
        files.push(...matchedFiles);
        matchedFiles.forEach((file) => {
          if (!scoreMap.has(file)) scoreMap.set(file, new Map());
          scoreMap.get(file).set(word, record.score);
        });
      });
      files.forEach((file) => {
        if (!fileMap.has(file)) fileMap.set(file, [word]);
        else if (!fileMap.get(file).includes(word)) fileMap.get(file).push(word);
      });
    });

    const results = [];
    for (const [file, words] of fileMap) {
      const requiredCount = [...searchTerms].filter((term) => term.length > 2 || containsCjk(term)).length;
      if (words.length !== searchTerms.size && words.length !== requiredCount) continue;
      if ([...excludedTerms].some((term) =>
        terms[term] === file || titleTerms[term] === file ||
        (terms[term] || []).includes(file) || (titleTerms[term] || []).includes(file),
      )) continue;

      const score = Math.max(...words.map((word) => scoreMap.get(file).get(word)));
      results.push([docNames[file], titles[file], "", null, score, filenames[file], SearchResultKind.text]);
    }
    return results;
  };
})();
