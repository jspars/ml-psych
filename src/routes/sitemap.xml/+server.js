import { SITE_URL, ROUTES } from '$lib/site.js';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export function GET() {
  // trailingSlash = "always" in src/routes/+layout.js, so every route
  // resolves with a trailing slash. The root route is the bare origin.
  const urls = ROUTES.map((route) => {
    const loc = route === '' ? `${SITE_URL}/` : `${SITE_URL}/${route}/`;
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
