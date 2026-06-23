const TOUR_ORIGIN = "http://43.135.167.74";

export default {
  async fetch(request) {
    const requestUrl = new URL(request.url);
    const targetUrl = new URL(requestUrl.pathname + requestUrl.search, TOUR_ORIGIN);

    const headers = new Headers();
    const accept = request.headers.get("accept");
    const range = request.headers.get("range");
    const contentType = request.headers.get("content-type");

    if (accept) headers.set("accept", accept);
    if (range) headers.set("range", range);
    if (contentType) headers.set("content-type", contentType);
    headers.set("user-agent", "AccessMapJourneyTourProxy/1.0");

    const proxyRequest = new Request(targetUrl, {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      redirect: "manual"
    });

    const upstream = await fetch(proxyRequest);
    const responseHeaders = new Headers(upstream.headers);

    responseHeaders.delete("content-security-policy");
    responseHeaders.delete("x-frame-options");
    responseHeaders.delete("set-cookie");
    responseHeaders.set("access-control-allow-origin", "*");

    const location = responseHeaders.get("location");
    if (location && location.startsWith(TOUR_ORIGIN)) {
      responseHeaders.set("location", location.replace(TOUR_ORIGIN, requestUrl.origin));
    }

    const responseType = responseHeaders.get("content-type") || "";
    if (responseType.includes("text/html")) {
      let html = await upstream.text();
      html = html
        .replaceAll(TOUR_ORIGIN, requestUrl.origin)
        .replaceAll("http://43.135.167.74", requestUrl.origin)
        .replaceAll("//43.135.167.74", `//${requestUrl.host}`);
      return new Response(html, {
        status: upstream.status,
        statusText: upstream.statusText,
        headers: responseHeaders
      });
    }

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders
    });
  }
};
