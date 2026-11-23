export const siteCitation: {
  title: string;
  author: string;
  year: number;
  url: string;
  doi?: string;
} = {
  title: "HistoBias: Analyzing Historical and Cross-Cultural Bias through the Lens of NLP",
  author: "HistoBias Project Team",
  year: 2026,
  url: "https://nl2g.github.io/histobias/",
};

export const siteDoiUrl = siteCitation.doi && `https://doi.org/${siteCitation.doi}`;

export const siteBibtex = [
  `@misc{histobias${siteCitation.year},`,
  `  author = {{${siteCitation.author}}},`,
  `  title = {{${siteCitation.title}}},`,
  `  year = {${siteCitation.year}},`,
  `  url = {${siteCitation.url}},`,
  ...(siteCitation.doi ? [`  doi = {${siteCitation.doi}},`] : []),
  "}",
].join("\n");
