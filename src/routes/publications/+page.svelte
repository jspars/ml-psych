<script>
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Publication from './Publication.svelte';
    import Presentation from './Presentation.svelte';
    import { base } from '$app/paths';
    
</script>
<PageHeader backgroundImage="/images/about-header.png" headerText="My publications and presentations" />


<section class="container max-w-[1000px] min-h-[45vh]">
    <div class="mx-auto">
        <Publication 
            pubTitle="Gender implications of the touch taboo in psychotherapy: 
                A feminist rhetorical analysis" 
            pubJournal="Women & Language" 
            pubJournalDetails="Issue 38, vol. 2; p. 55-79" 
            pubDate="2015" 
            pubDescription="A taboo against touch seems to pervade psychotherapy 
                practice. This feminist rhetorical analysis elucidates the 
                gender dynamics at play in the discourse on touch within 
                psychotherapy research and practice. I argue that touch 
                functions as a feminine gendered communication style rendering 
                it easily dismissed from hegemonic and patriarchal voices in 
                psychotherapy." 
            pubLink=""/>
        <Publication 
            pubTitle="The healing nature of communion: Scottish psychoanalysis, 
                R.D. Laing, and therapeutic communities" 
            pubJournal="Journal of Theoretical and Philosophical Psychology" 
            pubJournalDetails="Issue 36, vol. 1; p. 20-28" 
            pubDate="2016" 
            pubDescription="Here I review the theological and historical 
                significance of communion in
                Scottish psychoanalysis as it influences the life and work of 
                R.D. Laing. Particular attention is paid to Laing’s 
                conceptualization of communion as crucial in working with 
                individuals suffering from schizophrenia. Specific case 
                examples are culled from Laing’s memoir Wisdom, Madness, and 
                Folly: The Making of a Psychiatrist. Following Laing’s work, 
                communing with the other is argued as the essential 
                precondition for healing as embodied in the work of some 
                therapeutic communities, where physically communing, or 
                being-with patients, is the impetus for psychological healing." 
            pubLink=""/>  
        <Publication 
            pubTitle="Experiences of At-Homeness in therapeutic communities: 
                A theoretical exploration" 
            pubJournal="The Humanistic Psychologist" 
            pubJournalDetails="Issue 46, vol. 4; p. 412-423" 
            pubDate="2018" 
            pubDescription="The feeling of at-homeness provides an important 
                orienting context in human experience. The importance of 
                at-homeness is explored in phenomenological literature, and 
                then I apply this literature to the experience of living in 
                therapeutic communities. At-homeness is argued as a potential 
                healing element for the existential aloneness those without a 
                relational home may experience."
            pubLink=""/>
        <Publication 
            pubTitle="Open Dialogue: An applied Laingian practice" 
            pubJournal="Existential Analysis: Journal for the Society of 
                Existential Analysis" 
            pubJournalDetails="Issue 27, vol. 2; p. 339-351" 
            pubDate="2016" 
            pubDescription="I explore the similarities between the 
                ideas and writings of psychiatrist and analyst R.D. Laing, and 
                the practice of Open Dialogue in Western Lapland, Finland. Open 
                Dialogue is a community mental health orientation to working 
                with first-break psychosis. Since Laing did not propose a 
                therapeutic way of working with families with a member 
                experiencing psychosis, Open Dialogue may be as close as we get 
                to an applied Laingian approach." 
            pubLink=""/>
        <hr />
        <Presentation 
            presTitle="Farm-based therapeutic communities as a frontier for 
                humanistic psychology" 
            presEvent="Paper presented at the Society for Humanistic 
            Psychology’s 12th Annual Conference" 
            presEventDetails="Oregon State University. Corvallis, OR" 
            presDate="2019" 
            presDescription="" 
            presLink=""/>
        <Presentation 
            presTitle=" “After all this time, we can’t have any contact?” 
                Navigating intimate connections in therapeutic communities" 
            presEvent="Paper presented as part of the panel: “After all this 
                time? Always”: Temporality, Morality, and Embodied Experiences 
                of Intimate Connection at the Society of Psychological 
                Anthropology’s Biennial Meeting" 
            presEventDetails="Tamaya Resort, Santa Ana Pueblo, New Mexico" 
            presDate="2019" 
            presDescription="" 
            presLink=""/>
        <Presentation 
            presTitle="Experiences of “At-Homeness” in therapeutic communities" 
            presEvent="Paper presented at the Interdisciplinary Coalition of 
                North American Phenomenologists (ICNAP)" 
            presEventDetails="ASU College of Letters and Sciences, Arizona" 
            presDate="2016" 
            presDescription="" 
            presLink=""/>
        <Presentation 
            presTitle="Open Dialogue as the embodiment of human science-based 
                practice" 
            presEvent="Paper presented at Society for Humanistic Psychology’s 
                (Div 32) Student Awards Symposium" 
            presEventDetails="Sidney M. Jourard Award Presentation. 
                American Psychological Association Convention, Washington D.C." 
            presDate="2014" 
            presDescription="" 
            presLink=""/>         
	</div>   
</section>

<style>
    h1 {
        margin-top: 3em;
        font-size: 1.75rem;
        font-weight: 300;
        font-family: 'Roboto', sans-serif;
    }
</style>