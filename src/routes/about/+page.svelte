    <script>
	import AboutCard from './AboutCard.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<PageHeader backgroundImage="/images/about-header.png" headerText="About" />
<section class="container mt-5">
    <div class="row m-auto">
        <div class="col col-lg-6 mx-auto">
            <p>
                Born and raised in Kentucky, after spending my graduate training in the Northeast, I was ready
                to return to the warmer weather and sunshine of the South.
            </p>
            <p>
                Due to this desire, I completed my APA accredited pre-doctoral internship at Western Carolina
                University in Cullowhee, NC and completed a post-doc at Friendly City Psychology in
                Harrisonburg, VA. 
            </p>
            <p>
                I opened Lawson Psychotherapy in Harrisonburg in early 2024 and am excited to relocate 
                my business to Richmond, VA this summer. I am continually grateful to the clients who 
                have entrusted me with their care. Therapy is deep, vulnerable, and hard work, and I 
                am honored to be part of this journey with my clients.
            </p>
            <p>
                I continue to grow and hone my therapeutic approach by participating in advanced training.
                My PhD program focused on psychodynamic, phenomenological, and critical psychological
                approaches to understanding human development and suffering. This means, I take what 
                happens in your early development very seriously, alongside exploring the ways societal 
                structures and systems contribute to your experiences in the world.
            <p>
                I’ve completed a certificate in Psychoanalytic Couple Therapy through 
                the Institute for Clinical Social Work, a psychodynamic graduate institute 
                in Chicago, under the direction of Dr. Carla Leone, Dr. Arthur Nielsen, 
                and Dr. Karen Bloomberg. I also continue to study with the Training and 
                Research in Intersubjective Self Psychology (TRISP) Foundation in New York, NY. 
                I am always seeking continuing education as a life-long learner, and as someone 
                who is passionate about providing meaningful and effective psychotherapy.
            </p>
            <div class="about-copy">
                <h3 class="text-2xl">My approach</h3>
                <p class="">
                    I believe being deeply understood, in the context of a safe and collaborative therapeutic
                    relationship, is the catalyst for healing and transformation. In our work together, what often
                    are considered symptoms are viewed as important messages about one’s lived experiences and
                    psychological needs. We will work together to understand your distress, and the deeper meaning
                    underlying that distress. My focus in therapy is on understanding the root cause of your
                    suffering, rather than focusing on treating symptoms alone.
                </p>
                <p class="">
                    My orientation to clinical work is grounded in psychodynamic, humanistic, existential, and
                    phenomenological approaches to human suffering. I see our early experiences as largely
                    influential and formative of our later adult experiences. With this in mind, much of my work
                    draws on attachment theory, and understanding how early attachment relationships shape and
                    inform how we relate with others in adulthood. I also take seriously how experiences
                    of oppression contribute to distress and suffering. I actively integrate a focus on various
                    aspects of identity (i.e. gender, sexual orientation, ability, race, class, socioeconomic
                    status) and how those aspects shape and inform your experience in the world.  As a psychodynamic 
                    psychologist drawing upon self-psychology, I focus on how unmet psychological needs may 
                    contribute to your experience of suffering.
                </p>
                <p class="">
                    I provide both individual and couples therapy. In working with couples, I integrate 
                    psychoanalytic/psychodynamic therapy, and Sue Johnson’s Emotionally Focused Therapy 
                    for Couples. Using these approaches, I help couples identify, examine, and change 
                    patterns they find themselves stuck in, alongside understanding the softer and more 
                    vulnerable emotions present in  couples’ distress. We also examine family of origin 
                    contributors to couples’ distress, and unconscious dynamics at play in patterns of 
                    interaction.
                </p>
                <p class="">
                    My areas of expertise include working with: 
                </p>
                <ul class="my-list">
                    <li>
                        Individuals who wish to examine family of origin concerns
                    </li>
                    <li>
                        Individuals who have experienced religious trauma
                    </li>
                    <li>
                        Members of the LGBTQIA+ community
                    </li>
                    <li>
                        Trans* folks exploring gender identity and transition
                    </li>
                    <li>
                        Women’s issues and experiences
                    </li>
                    <li>
                        Individuals processing and recovering from traumatic experience
                    </li>
                    <li>
                        First generation college students and the transition to college and graduate school
                    </li>
                    <li>
                        Neurodiverse couples
                    </li>
                </ul>
            </div>
    
        </div>
        <div class="col col-lg-4">
            <div class="about-card">
                <AboutCard />
            </div>
        </div>
    </div>
</section>

<style lang="scss">
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


	}

    .my-list {
        list-style: disc;
        margin-left: 2rem;
        margin-bottom: 3rem;
    }

</style>
