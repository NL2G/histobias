import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const base = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".txt": "text/plain", ".json": "application/json", ".woff2": "font/woff2" };

createServer(async (req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (base && pathname !== base && !pathname.startsWith(base + "/")) { res.writeHead(404).end(); return; }
    pathname = pathname.slice(base.length);
    let file = path.resolve(root, "." + (pathname || "/"));
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    res.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(await readFile(file));
  } catch { res.writeHead(404).end("Not found"); }
}).listen(4173, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:4173${base}/`));
