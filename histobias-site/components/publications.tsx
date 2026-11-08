"use client";
import { useState } from "react";
import { assetPath } from "../lib/asset-path";
import { publications, bibtexFor, type Publication } from "../lib/publications";

function PublicationCard({ paper }: { paper: Publication }) {
  const [copyStatus, setCopyStatus] = useState("");
  const bibtex = bibtexFor(paper);
  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopyStatus("Copied ✓");
      setTimeout(() => setCopyStatus(""), 2500);
    } catch { setCopyStatus("Select the citation below to copy it."); }
  }
  return <article className="publication" id={`paper-${paper.id}`}>
    <div className="publication-content">
      <div className="publication-meta"><span>{paper.status}</span><time dateTime={paper.date}>{new Date(paper.date+"T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time></div>
      <h3><a href={paper.paperUrl} target="_blank" rel="noreferrer">{paper.title} <span aria-hidden="true">↗</span></a></h3>
      <p className="publication-authors">{paper.authors.join(" · ")}</p>
      <p className="publication-summary">{paper.summary}</p>
      <div className="publication-actions"><a className="text-link" href={paper.paperUrl} target="_blank" rel="noreferrer">Read paper <span>↗</span></a><a className="text-link" href={paper.pdfUrl} target="_blank" rel="noreferrer">PDF <span>↗</span></a></div>
    </div>
    <figure className="publication-figure"><a href={assetPath(paper.figure.src)} target="_blank" rel="noreferrer" aria-label={`View full-size figure from ${paper.title}`}><img src={assetPath(paper.figure.src)} alt={paper.figure.alt} width={paper.figure.width} height={paper.figure.height} loading="lazy"/><span className="figure-expand">VIEW FULL SIZE ↗</span></a><figcaption><strong>{paper.figure.caption}</strong><span>{paper.figure.credit} <a href={paper.figure.sourceUrl} target="_blank" rel="noreferrer">Source</a> · <a href={paper.figure.licenseUrl} target="_blank" rel="noreferrer">{paper.figure.license}</a></span></figcaption></figure>
    <details className="publication-citation"><summary><span>Cite this paper <small>BIBTEX</small></span><span className="details-indicator" aria-hidden="true">+</span></summary><div className="citation-content"><div className="citation-toolbar"><span>arXiv:{paper.arxivId}</span><div><button onClick={copyCitation}>Copy BibTeX ↗</button><a download={`${paper.id}.bib`} href={`data:application/x-bibtex;charset=utf-8,${encodeURIComponent(bibtex+"\n")}`}>Download .bib ↓</a></div></div><p className="citation-status" role="status">{copyStatus}</p><pre tabIndex={0} aria-label={`BibTeX citation for ${paper.title}`}><code>{bibtex}</code></pre></div></details>
  </article>;
}

export default function Publications() {
  const sorted = [...publications].sort((a,b) => b.date.localeCompare(a.date));
  return <section className="publications-section" id="publications"><div className="wrap"><div className="section-label"><span>04 / PUBLICATIONS</span><span>+</span></div><div className="section-heading"><h2><em>Publications</em></h2><p>Research outputs from HistoBias.</p></div><div className="publications-list">{sorted.map(paper => <PublicationCard key={paper.id} paper={paper}/>)}</div></div></section>;
}
