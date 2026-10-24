/**
 * Services model — consumed by the ServiceGrid homepage section.
 *
 * Content-as-data (DESIGN §4.2): summaries are owner-drafted from existing
 * site copy; edit here and the grid follows. Card header imagery is deferred
 * to redesign/assets (token washes render in the meantime, via each card's
 * `tone`). hrefs map to existing routes — owners confirmed:
 * couples/individual → /my_approach, teletherapy → /psypact.
 */

/** @type {Array<{ slug: string, title: string, body: string, href: string, tone?: string }>} */
export const SERVICES = [
	{
		slug: 'couples',
		title: 'Couples Therapy',
		body: 'Psychodynamic couples work for partners who keep circling the same patterns — attending to how you relate, not just what you argue about.',
		href: '/my_approach',
		tone: 'lavender'
	},
	{
		slug: 'individual',
		title: 'Individual Therapy',
		body: 'Psychodynamic therapy for adults, informed by existential-humanistic and phenomenological perspectives — a place where the focus is understanding you.',
		href: '/my_approach',
		tone: 'sage'
	},
	{
		slug: 'teletherapy',
		title: 'Teletherapy',
		body: 'Secure video sessions across most states through PSYPACT® — the same psychodynamic work, wherever you live.',
		href: '/psypact',
		tone: 'smoke'
	}
];
