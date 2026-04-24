const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = normalizePort(process.env.PORT) ?? 5173;
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const url = req.url ?? "/";
  const { pathname } = safeParseUrl(url);
  const safe = safeJoin(PUBLIC_DIR, pathname);
  if (!safe) return send(res, 400, "Bad Request");

  let filePath = safe;
  try {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    if (!fs.existsSync(filePath)) {
      const ext = path.extname(filePath);
      if (!ext) {
        filePath = path.join(PUBLIC_DIR, "index.html");
      } else {
        return send(res, 404, "Not Found");
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    res.statusCode = 200;
    res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
    res.setHeader("Cache-Control", "no-store");
    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    console.error(err);
    send(res, 500, "Internal Server Error");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Pensée Analytique running: http://127.0.0.1:${PORT}`);
  console.log("Press Ctrl+C to stop.");
});

function safeParseUrl(url) {
  try {
    const u = new URL(url, "http://localhost");
    return { pathname: decodeURIComponent(u.pathname) };
  } catch {
    return { pathname: "/" };
  }
}

function safeJoin(baseDir, requestPath) {
  const stripped = requestPath.replace(/^\/+/, "");
  const resolved = path.normalize(path.join(baseDir, stripped));
  const base = path.normalize(baseDir + path.sep);
  if (!resolved.startsWith(base)) return null;
  return resolved;
}

function send(res, status, message) {
  res.statusCode = status;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(message);
}

function normalizePort(value) {
  if (value == null) return null;
  const n = Number(value);
  if (!Number.isFinite(n)) return null;
  if (n < 1 || n > 65535) return null;
  return n;
}

