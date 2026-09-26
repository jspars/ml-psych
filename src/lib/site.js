/**
 * Canonical site origin, used for absolute URLs in robots.txt and sitemap.xml.
 * No trailing slash.
 */
export const SITE_URL = 'https://lawsonpsych.com';

/**
 * Every prerendered route on the site, as a path relative to the origin.
 * The root route is represented as an empty string.
 *
 * Keep this in sync with src/routes/ — it is the single source of truth for
 * sitemap.xml.
 */
export const ROUTES = [
  '',
  'about',
  'contact',
  'faq',
  'fees_and_insurance',
  'my_approach',
  'privacy',
  'psypact',
  'publications',
  'resources'
];
