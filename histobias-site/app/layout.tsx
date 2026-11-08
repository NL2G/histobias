import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "HistoBias — Historical and Cross-Cultural Bias",
  description: "Analyzing Historical and Cross-Cultural Bias through the lens of NLP. A DFG-funded interdisciplinary research project, 2025–2028. Grant EG 375/12-1.",
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
