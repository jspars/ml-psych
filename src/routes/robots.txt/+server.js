import { SITE_URL } from '$lib/site.js';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
