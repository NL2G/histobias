/** Add an entry here to publish another paper. The section and citation update automatically. */
export type Publication = {
  id: string;
  title: string;
  authors: string[];
  date: string; // ISO date, or year when no exact publication date is supplied
  venue: string;
  summary: string;
  tags: string[];
  paperUrl: string;
  pdfUrl: string;
  pdfLabel?: string;
  publicationDetails?: string;
  arxivId?: string;
  doi?: string;
  citationKey: string;
  bibtex?: string; // Optional complete citation, e.g. for a conference or journal paper
  figure: {
    src: string; // Put the image in public/publications/ and use /publications/filename.png
    width: number;
    height: number;
    alt: string;
    caption: string;
    credit: string;
    sourceUrl: string;
    license: string;
    licenseUrl: string;
  };
};

export const publications: Publication[] = [
  {
    id: "bundesscraper",
    title: "BundesScraper: Creating an Accessible Corpus of German Parliamentary Speeches",
    authors: ["Johannes Felix Käßmaier", "Katharina Soemer"],
    date: "2026",
    venue: "INFORMATIK 2026",
    publicationDetails: "Lecture Notes in Informatics, P384, pp. 1023–1036",
    summary: "BundesScraper provides a customisable pipeline for collecting German Bundestag speeches from 1949–2026. Researchers can select time ranges, filter by keywords, and preprocess and export the resulting corpus. The tool is designed to make parliamentary text data accessible to researchers and students with limited programming experience.",
    tags: ["Parliamentary speeches", "Corpus creation", "Computational social science"],
    paperUrl: "https://dl.gi.de/items/4d028b97-8080-4bda-a8a7-9ac292593585",
    pdfUrl: "https://dl.gi.de/bitstreams/41af638c-5c06-40a7-aac9-166d5bf41014/download#page=1023",
    pdfLabel: "Proceedings PDF",
    citationKey: "kaessmaier2026bundesscraper",
    bibtex: `@inproceedings{kaessmaier2026bundesscraper,
  author = {Käßmaier, Johannes Felix and Soemer, Katharina},
  title = {{BundesScraper}: Creating an Accessible Corpus of German Parliamentary Speeches},
  booktitle = {INFORMATIK 2026: Digitale Resilienz},
  editor = {Dehne, Julian and Tschorsch, Florian},
  series = {Lecture Notes in Informatics (LNI)},
  volume = {P384},
  pages = {1023--1036},
  year = {2026},
  publisher = {Gesellschaft für Informatik e.V.},
  address = {Bonn},
  issn = {2944-7682},
  url = {https://dl.gi.de/items/4d028b97-8080-4bda-a8a7-9ac292593585}
}`,
    figure: {
      src: "/publications/bundesscraper-contributions.png",
      width: 1073,
      height: 688,
      alt: "BundesScraper's three contributions: accessibility for researchers without coding experience, modular selection and filtering of parliamentary data, and timely access to current speeches.",
      caption: "Figure 1 · BundesScraper’s three contributions: accessibility, modularity, and timeliness.",
      credit: "Käßmaier & Soemer (2026), p. 1025. Extracted from the published PDF; surrounding page content omitted.",
      sourceUrl: "https://dl.gi.de/bitstreams/41af638c-5c06-40a7-aac9-166d5bf41014/download#page=1025",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
  {
    id: "chronolens",
    title: "ChronoLens: Measuring Language Change Across Time, Languages, and Linguistic Levels",
    authors: ["Gagan Bhatia", "Julian Schlenker", "Simone Paolo Ponzetto", "Steffen Eger"],
    date: "2026-08-04",
    venue: "arXiv",
    summary: "ChronoLens measures historical language change across five languages and four linguistic levels: morphology, syntax, semantics, and pragmatics. It combines multilingual language models with aligned sparse features to analyse parliamentary texts from 1803–2026, comparing both the magnitude and direction of change.",
    tags: ["Historical language change", "Multilingual NLP", "Interpretability"],
    paperUrl: "https://arxiv.org/abs/2608.03507",
    pdfUrl: "https://arxiv.org/pdf/2608.03507",
    arxivId: "2608.03507",
    doi: "10.48550/arXiv.2608.03507",
    citationKey: "bhatia2026chronolensmeasuringlanguagechange",
    figure: {
      src: "/publications/chronolens-overview.svg",
      width: 1123,
      height: 342,
      alt: "ChronoLens method overview: matched sentences from languages or historical periods enter condition-specific encoders and decoders to learn aligned sparse features; held-out feature ablations then identify morphology, syntax, semantics and pragmatics.",
      caption: "Figure 1 · ChronoLens method: matched sentences, crosscoder training, aligned sparse features, and post-hoc linguistic attribution.",
      credit: "Bhatia, Schlenker, Ponzetto & Eger (2026). Figure reproduced without modification.",
      sourceUrl: "https://arxiv.org/html/2608.03507v1#S4.F1",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
];

export function bibtexFor(paper: Publication): string {
  if (paper.bibtex) return paper.bibtex;
  if (!paper.arxivId) throw new Error(`Provide a BibTeX citation for ${paper.id}.`);
  return `@misc{${paper.citationKey},
  title = {${paper.title}},
  author = {${paper.authors.join(" and ")}},
  year = {${paper.date.slice(0, 4)}},
  eprint = {${paper.arxivId}},
  archivePrefix = {arXiv},
  primaryClass = {cs.CL},
  doi = {${paper.doi}},
  url = {${paper.paperUrl}}
}`;
}
