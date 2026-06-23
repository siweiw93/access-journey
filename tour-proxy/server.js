import http from "node:http";

const ORIGIN = "http://43.135.167.74";
const PORT = Number(process.env.PORT || 5199);

function buildTargetUrl(requestUrl) {
  const url = new URL(requestUrl, `http://localhost:${PORT}`);
  return new URL(url.pathname + url.search, ORIGIN);
}

function copyRequestHeaders(request) {
  const headers = new Headers();
  const allowed = ["accept", "accept-language", "content-type", "range", "user-agent"];

  for (const key of allowed) {
    const value = request.headers[key];
    if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
  }

  if (!headers.has("user-agent")) {
    headers.set("user-agent", "AccessMapJourneyTourProxy/1.0");
  }

  return headers;
}

function getPublicOrigin(request) {
  const host = request.headers.host || `localhost:${PORT}`;
  const forwardedProto = request.headers["x-forwarded-proto"];
  const proto = Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto;
  const protocol = proto || (host.startsWith("localhost") ? "http" : "https");
  return `${protocol}://${host}`;
}

function copyResponseHeaders(upstreamHeaders, publicOrigin) {
  const headers = {};
  const blocked = new Set([
    "content-encoding",
    "content-length",
    "content-security-policy",
    "set-cookie",
    "transfer-encoding",
    "x-frame-options"
  ]);

  upstreamHeaders.forEach((value, key) => {
    if (!blocked.has(key.toLowerCase())) {
      headers[key] = value;
    }
  });

  headers["access-control-allow-origin"] = "*";

  if (headers.location) {
    headers.location = String(headers.location)
      .replaceAll(ORIGIN, publicOrigin)
      .replaceAll("//43.135.167.74", `//${new URL(publicOrigin).host}`);
  }

  return headers;
}

async function readBody(request) {
  if (request.method === "GET" || request.method === "HEAD") return undefined;

  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks);
}

function rewriteText(body, publicOrigin) {
  return body
    .replaceAll(ORIGIN, publicOrigin)
    .replaceAll("http://43.135.167.74", publicOrigin)
    .replaceAll("//43.135.167.74", `//${new URL(publicOrigin).host}`);
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "OPTIONS") {
      response.writeHead(204, {
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET,POST,HEAD,OPTIONS",
        "access-control-allow-headers": "*"
      });
      response.end();
      return;
    }

    const publicOrigin = getPublicOrigin(request);
    const targetUrl = buildTargetUrl(request.url || "/");
    const body = await readBody(request);

    const upstream = await fetch(targetUrl, {
      method: request.method,
      headers: copyRequestHeaders(request),
      body,
      redirect: "manual"
    });

    console.log(`${request.method} ${request.url} -> ${upstream.status} ${targetUrl.href}`);

    const headers = copyResponseHeaders(upstream.headers, publicOrigin);
    const contentType = upstream.headers.get("content-type") || "";

    if (contentType.includes("text/") || contentType.includes("javascript") || contentType.includes("json")) {
      const text = rewriteText(await upstream.text(), publicOrigin);
      response.writeHead(upstream.status, headers);
      response.end(text);
      return;
    }

    response.writeHead(upstream.status, headers);
    if (upstream.body) {
      const reader = upstream.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        response.write(Buffer.from(value));
      }
    }
    response.end();
  } catch (error) {
    response.writeHead(502, { "content-type": "text/plain; charset=utf-8" });
    response.end(`Proxy error: ${error instanceof Error ? error.message : String(error)}`);
  }
});

server.listen(PORT, () => {
  console.log(`AccessMap tour proxy running at http://localhost:${PORT}`);
});
