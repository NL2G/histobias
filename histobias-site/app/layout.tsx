import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "../lib/asset-path";
import { siteCitation, siteDoiUrl } from "../lib/site-citation";

export const metadata: Metadata = {
  title: "HistoBias — Historical and Cross-Cultural Bias",
  description: "Analyzing Historical and Cross-Cultural Bias through the lens of NLP. A DFG-funded interdisciplinary research project, 2025–2028. Grant EG 375/12-1.",
  alternates: { canonical: siteCitation.url },
  other: {
    "DC.title": siteCitation.title,
    "DC.creator": siteCitation.author,
    "DC.date": String(siteCitation.year),
    "DC.identifier": siteDoiUrl ? [siteDoiUrl, siteCitation.url] : siteCitation.url,
  },
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
