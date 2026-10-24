/**
 * Services model — consumed by the ServiceGrid homepage section.
 *
 * Content-as-data (DESIGN §4.2): edit here and the grid follows.
 * Copy status: Couples Therapy is the Figma-approved populated-card copy
 * (verbatim). Individual/Teletherapy bodies are agent drafts pending their
 * Figma-approved counterpart — owner supplies text, or approves drafts.
 * Header imagery defers to redesign/assets (Card's flat --surface-decor
 * wash shows meanwhile). hrefs owners-confirmed:
 * couples/individual → /my_approach, teletherapy → /psypact.
 */

/** @type {Array<{ slug: string, title: string, body: string, href: string }>} */
export const SERVICES = [
	{
		slug: 'couples',
		title: 'Couples Therapy',
		// Verbatim from the Figma populated Card (owner-provided).
		body: "Navigate life's challenges together with support that honors your relationship.",
		href: '/my_approach'
	},
	{
		slug: 'individual',
		title: 'Individual Therapy',
		// DRAFT — needs the owner's Figma-approved copy.
		body: 'Psychodynamic therapy for adults, informed by existential-humanistic and phenomenological perspectives — a place where the focus is understanding you.',
		href: '/my_approach'
	},
	{
		slug: 'teletherapy',
		title: 'Teletherapy',
		// DRAFT — needs the owner's Figma-approved copy.
		body: 'Secure video sessions across most states through PSYPACT® — the same psychodynamic work, wherever you live.',
		href: '/psypact'
	}
];
