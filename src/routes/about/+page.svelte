<script lang="ts">
    import AboutCard from "./AboutCard.svelte";

</script>

<div class="m-10 about-container">
    <div class="about-copy">
        <h2>About me</h2>
        <p class="prose">
            I received my doctorate in clinical psychology from Duquesne University, 
            with a specific focus on human science psychology, psychoanalysis, and 
            qualitative research. I also completed a masters in clinical psychology 
            from Saint Michael’s College, with an emphasis on psychodynamic and humanistic 
            approaches to clinical work. I completed my APA accredited pre-doctoral 
            internship at Western Carolina University and my post-doctoral residency 
            at Friendly City Psychology in Harrisonburg, VA. 
        </p>
        <h2>My approach</h2>
        <p class="prose">
            I believe being deeply understood, in the context of a safe and collaborative 
            therapeutic relationship, is the catalyst for healing and transformation. 
            In our work together, what often are considered symptoms are viewed as important 
            messages about one’s lived experiences and psychological needs. We will work 
            together to understand your distress, and the deeper meaning underlying that distress. 
            My focus in therapy is on understanding the root cause of your suffering, rather 
            than focusing on treating symptoms alone. 
        </p>
        <p class="prose">
            My orientation to clinical work is grounded in psychodynamic, humanistic, existential, 
            and phenomenological approaches to human suffering. I see our early experiences as largely 
            influential and formative of our later adult experiences. With this in mind, much of my work 
            draws on attachment theory, and understanding how early attachment relationships shape and 
            inform how we relate and attach to others in adulthood. I also take seriously how experiences 
            of oppression contribute to distress and suffering. I actively integrate a focus on various 
            aspects of identity (i.e. gender, sexual orientation, ability, race, class, socioeconomic status) 
            and how those aspects shape and inform your experience in the world. 
        </p>
        <p class="prose">
            As a psychodynamic psychologist drawing upon self-psychology, I focus on how unmet psychological 
            needs may contribute to your experience of suffering. I especially enjoy doing this work with 
            couples and have specific training in Emotionally-Focused Therapy (EFT) for Couples. 
            Using an EFT framework, I help couples examine patterns they find themselves stuck in, 
            alongside understanding the attachment yearnings present in couple distress. 
        </p>
        <p class="prose">
            I continue to grow and hone my therapeutic approach by participating in advanced training 
            in Intersubjective Self-Psychology through the Training and Research in Intersubjective 
            Self Psychology (TRISP) Foundation in New York, NY, as well as continued consultation and 
            training in Emotionally Focused Therapy. 
        </p>
        <p class="prose">
            Clinical areas of interest include working with individuals who wish to examine family 
            of origin concerns, as well as supporting individuals who have experienced religious trauma. 
            I love working with members of the LGBTQIA+ community, and have specific training and 
            experience in supporting trans* individuals pursuing transition. I also enjoy working with 
            women’s issues across the lifespan, individuals processing and recovering from traumatic experience, 
            first-generation college students and the transition to college or higher education. During my 
            graduate training and post-graduate experience, I’ve worked in community mental health centers, 
            community clinics, university counseling centers, and private practice. 
        </p>
    </div>
    <div class="about-card">
        <AboutCard />
    </div>
    

    
</div>



<style>
    .about-container {
        display: flex;
        justify-content: space-between;
    }

    .about-card {
        max-width: 350px;
        flex-shrink: 0;
    }

    .about-copy {
        flex-grow: 1;
    }
</style>