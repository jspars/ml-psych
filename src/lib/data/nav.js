/**
 * Primary navigation model — used by Header (and repeated in Footer).
 *
 * Content as data, per docs/DESIGN.md §4.2: pages compose from data instead of
 * hardcoded markup. Labels come from the v1 nav (Bootstrap era); tweak here and
 * both Header and Footer follow.
 *
 * `cta: true` items render with the Button primitive (primary/filled).
 * Keep hrefs in sync with src/lib/site.js ROUTES — that file remains the
 * sitemap source of truth.
 */

/** @type {Array<{ label: string, href: string, cta?: boolean }>} */
export const NAV_ITEMS = [
	{ label: 'About', href: '/about' },
	{ label: 'Fees', href: '/fees_and_insurance' },
	{ label: 'FAQ', href: '/faq' },
	{ label: 'Publications', href: '/publications' },
	{ label: 'Non-VA', href: '/psypact' },
	{ label: 'Get in touch now', href: '/contact', cta: true }
];
