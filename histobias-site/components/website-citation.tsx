"use client";

import { useState } from "react";
import { siteBibtex, siteCitation, siteDoiUrl } from "../lib/site-citation";

export default function WebsiteCitation() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyBibtex() {
    try {
      await navigator.clipboard.writeText(siteBibtex);
      setCopyStatus("BibTeX copied.");
    } catch {
      setCopyStatus("Select the BibTeX below to copy it.");
    }
  }

  return (
    <section className="wrap website-citation" id="cite" aria-labelledby="cite-heading">
      <h2 id="cite-heading">Cite this <em>website</em></h2>
      <p>
        {siteCitation.author}. ({siteCitation.year}). <cite>{siteCitation.title}</cite>.{" "}
        <a href={siteDoiUrl || siteCitation.url}>{siteDoiUrl || siteCitation.url}</a>
      </p>
      <details className="publication-citation">
        <summary>
          BibTeX <span className="details-indicator" aria-hidden="true">+</span>
        </summary>
        <div className="citation-content">
          <div className="citation-toolbar">
            <div>
              <button type="button" onClick={copyBibtex}>Copy BibTeX</button>
              <a download="histobias.bib" href={`data:application/x-bibtex;charset=utf-8,${encodeURIComponent(siteBibtex + "\n")}`}>
                Download .bib
              </a>
            </div>
          </div>
          <p className="citation-status" role="status">{copyStatus}</p>
          <pre tabIndex={0} aria-label="BibTeX citation for the HistoBias website"><code>{siteBibtex}</code></pre>
        </div>
      </details>
    </section>
  );
}
