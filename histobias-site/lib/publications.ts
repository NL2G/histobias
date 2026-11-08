/** Add an entry here to publish another paper. The section and citation update automatically. */
export type Publication = {
  id: string;
  title: string;
  authors: string[];
  date: string; // ISO date; newest papers appear first
  status: string;
  summary: string;
  tags: string[];
  paperUrl: string;
  pdfUrl: string;
  arxivId: string;
  doi: string;
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
    id: "chronolens",
    title: "ChronoLens: Measuring Language Change Across Time, Languages, and Linguistic Levels",
    authors: ["Gagan Bhatia", "Julian Schlenker", "Simone Paolo Ponzetto", "Steffen Eger"],
    date: "2026-08-04",
    status: "arXiv preprint",
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
