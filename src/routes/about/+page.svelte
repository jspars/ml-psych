    <script>
	import AboutCard from './AboutCard.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<PageHeader backgroundImage="/images/about-header.png" headerText="About" />
<section class="container mt-5">
    <div class="row my-auto">
        <div class="col col-lg-8">
            <p class="prose">
                Born and raised in Kentucky, after spending my graduate training in the Northeast, I was ready
                to return to the warmer weather and sunshine of the South.
            </p>
            <p class="prose">
                Due to this desire, I completed my APA accredited pre-doctoral internship at Western Carolina
                University in Cullowhee, NC and completed a post-doc at Friendly City Psychology in
                Harrisonburg, VA. I am happy to be living in a warmer climate and have enjoyed calling the
                Friendly City home for the last few years.
            </p>
            <p class="prose">
                I am excited to open Lawson Psychotherapy and want to express my gratitude to the clients who
                have entrusted me with their care. It is an honor to be a psychotherapist, and I deeply
                appreciate the clients who allow me to journey alongside them in making sense of their
                experiences.
            </p>
            <div class="about-copy">
                <h3 class="prose text-2xl">My approach</h3>
                <p class="prose">
                    I believe being deeply understood, in the context of a safe and collaborative therapeutic
                    relationship, is the catalyst for healing and transformation. In our work together, what often
                    are considered symptoms are viewed as important messages about one’s lived experiences and
                    psychological needs. We will work together to understand your distress, and the deeper meaning
                    underlying that distress. My focus in therapy is on understanding the root cause of your
                    suffering, rather than focusing on treating symptoms alone.
                </p>
                <p class="prose">
                    My orientation to clinical work is grounded in psychodynamic, humanistic, existential, and
                    phenomenological approaches to human suffering. I see our early experiences as largely
                    influential and formative of our later adult experiences. With this in mind, much of my work
                    draws on attachment theory, and understanding how early attachment relationships shape and
                    inform how we relate and attach to others in adulthood. I also take seriously how experiences
                    of oppression contribute to distress and suffering. I actively integrate a focus on various
                    aspects of identity (i.e. gender, sexual orientation, ability, race, class, socioeconomic
                    status) and how those aspects shape and inform your experience in the world.
                </p>
                <p class="prose">
                    As a psychodynamic psychologist drawing upon self-psychology, I focus on how unmet
                    psychological needs may contribute to your experience of suffering. I especially enjoy doing
                    this work with couples and have specific training in Emotionally-Focused Therapy (EFT) for
                    Couples. Using an EFT framework, I help couples examine patterns they find themselves stuck
                    in, alongside understanding the attachment yearnings present in couple distress.
                </p>
                <p class="prose">
                    I continue to grow and hone my therapeutic approach by participating in advanced training in
                    Intersubjective Self-Psychology through the Training and Research in Intersubjective Self
                    Psychology (TRISP) Foundation in New York, NY, as well as continued consultation and training
                    in Emotionally Focused Therapy.
                </p>
                <p class="prose">
                    Clinical areas of interest include working with individuals who wish to examine family of
                    origin concerns, as well as supporting individuals who have experienced religious trauma. I
                    love working with members of the LGBTQIA+ community, and have specific training and experience
                    in supporting trans* individuals pursuing transition. I also enjoy working with women’s issues
                    across the lifespan, individuals processing and recovering from traumatic experience,
                    first-generation college students and the transition to college or higher education. During my
                    graduate training and post-graduate experience, I’ve worked in community mental health
                    centers, community clinics, university counseling centers, and private practice.
                </p>
            </div>
    
        </div>
        <div class="col col-lg-4">
            <div class="about-card">
                <AboutCard />
            </div>
        </div>
    </div>
</section>

<style>
	@media only screen and (max-width: 768px) {
		.about-container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.about-card {
			order: 1;
			margin: auto 1rem;
			margin-bottom: 2rem;
		}

		.about-copy {
			order: 2;
		}
	}

	.about-container {
		display: flex;
		justify-content: space-between;
	}

	.about-card {
		max-width: 350px;
		/* flex-shrink: 0; */
		margin-left: 2rem;
	}

	.about-copy {
		/* max-width: 600px */
	}
</style>
