# HistoBias research website

**Analyzing Historical and Cross-Cultural Bias through the lens of NLP**

DFG grant reference: **EG 375/12-1**.

## Local development

```powershell
cd histobias-site
npm ci
npm run dev:pages
```

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds a static Next.js export and deploys it with the official GitHub Pages actions. It runs on pushes to `main` or `master`, or manually from the Actions tab.

In the GitHub repository, select **Settings → Pages → Build and deployment → Source: GitHub Actions** before the first deployment. No custom secrets are needed. The workflow uses GitHub's Pages base path so images and scripts work at both a repository subpath and a custom domain.

Test the static build locally:

```powershell
cd histobias-site
$env:NEXT_PUBLIC_BASE_PATH = '/histobias'
npm run build:pages
```

Run `npm run preview:pages` in the same terminal to preview the export at `http://127.0.0.1:4173/histobias/`. The output is `histobias-site/out/`. Clear `NEXT_PUBLIC_BASE_PATH` for a root-domain build. Nothing is published by the build command.

## Editing content

- Project copy and team biographies: `histobias-site/app/page.tsx`
- Publications: `histobias-site/lib/publications.ts`
- Publication instructions: `histobias-site/PUBLICATIONS.md`
- Type sizes and layout: `histobias-site/app/globals.css`
- Logo: `histobias-site/public/histobias-logo.svg`

Researcher and figure credits are recorded in the publication instructions and shown on the website. Johannes Käßmaier currently uses an initials portrait.

The website is deployed to https://gagan3012.github.io/histobias/ through the GitHub Pages workflow.

