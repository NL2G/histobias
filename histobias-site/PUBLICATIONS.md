# Adding a publication

1. Put the paper's figure image in `public/publications/`.
2. Copy the existing entry in `lib/publications.ts` and edit its title, authors, date, description, links, citation fields, topics, and figure information. Give it a unique `id` and `citationKey`.
3. Use an ISO date (`YYYY-MM-DD`), or just the year when the publisher does not provide an exact date. Papers sort newest first automatically. The publication list, BibTeX, and `.bib` download are generated from the entries.
4. Include the figure's source, author attribution, license, and whether it was modified. Write descriptive alt text.
5. Run `npm run build:pages` to verify the static export. When ready, push the repository to run its GitHub Pages workflow.

The citation helper generates arXiv citations. For a journal or conference paper, set the optional `bibtex` field to its complete citation; this overrides the generated citation. The `arxivId` and `doi` fields are optional. Use `venue` for the venue label (for example, "arXiv" or "INFORMATIK 2026"), `publicationDetails` for proceedings series and pages, and `pdfLabel` when the PDF link points to a complete volume.

## Current asset sources

- ChronoLens Figure 1: https://arxiv.org/html/2608.03507v1/crosscoder_final_detail.svg — Bhatia, Schlenker, Ponzetto & Eger (2026), CC BY-SA 4.0, unchanged. https://creativecommons.org/licenses/by-sa/4.0/
- Julian Schlenker portrait: user-supplied University of Mannheim image, https://www.uni-mannheim.de/media/_processed_/f/e/csm_js_uma_3ab50d2d4a.jpeg
- Gagan Bhatia portrait: https://gagan3012.github.io/images/photo.jpg
- HistoBias logo and symbol: original SVG assets in `public/histobias-logo.svg` and `public/histobias-mark.svg`.

Biographies use the supplied supervisor relationships and public university/personal research profiles. Johannes's research description references his university profile: https://www.fb03.uni-frankfurt.de/183311737/Johannes_K%C3%A4%C3%9Fmaier. His profile uses initials because no portrait was provided.

Professor portraits: UTN — https://www.utn.de/files/2024/11/Steffen_Eger_30723_w.jpg; Mannheim — https://www.uni-mannheim.de/media/_processed_/2/6/csm_Simone_ca057631d6.jpg; Frankfurt / ConTrust — https://contrust.uni-frankfurt.de/files/2022/02/Danni2_07-2019.jpg

- BundesScraper Figure 1: https://dl.gi.de/bitstreams/41af638c-5c06-40a7-aac9-166d5bf41014/download#page=1025 — Johannes Felix Käßmaier and Katharina Soemer (2026), CC BY-SA 4.0 (volume licence, front matter). Extracted from page 1025; surrounding page content omitted. Paper: pp. 1023–1036, INFORMATIK 2026: Digitale Resilienz, LNI P384. The publisher provides the year only; no day or month is inferred.
