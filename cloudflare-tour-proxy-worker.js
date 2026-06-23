const TOUR_ORIGIN = "http://43.135.167.74";

export default {
  async fetch(request) {
    const requestUrl = new URL(request.url);
    const targetUrl = new URL(requestUrl.pathname + requestUrl.search, TOUR_ORIGIN);

    const proxyRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      redirect: "manual"
    });

    const upstream = await fetch(proxyRequest);
    const headers = new Headers(upstream.headers);

    headers.delete("content-security-policy");
    headers.delete("x-frame-options");
    headers.delete("set-cookie");

    const location = headers.get("location");
    if (location && location.startsWith(TOUR_ORIGIN)) {
      headers.set("location", location.replace(TOUR_ORIGIN, requestUrl.origin));
    }

    const contentType = headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      let html = await upstream.text();
      html = html
        .replaceAll(TOUR_ORIGIN, requestUrl.origin)
        .replaceAll("http://43.135.167.74", requestUrl.origin)
        .replaceAll("//43.135.167.74", `//${requestUrl.host}`);
      return new Response(html, {
        status: upstream.status,
        statusText: upstream.statusText,
        headers
      });
    }

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers
    });
  }
};
