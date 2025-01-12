<script>
    import PageHeader from '$lib/components/PageHeader.svelte';
    import { base } from '$app/paths';

</script>
<PageHeader backgroundImage="/images/psypact-header.png" headerText="Inter-state Therapy" />

<section class="container max-w-[1000px] min-h-[45vh]">
    <div class="mx-auto">
        <h1></h1>
        <p>
            Have you ever been forced to end your work with a therapist you 
            really liked, because one of you relocated across state lines?
            PSYPACT&reg; was designed to allow licensed psychologists to conduct 
            teletherapy services across state lines, and over 40 states
            have enacted legislation that allows licensed psychologists
            to provide out of state teletherapy.
        </p><span class="flex flex-wrap max-w-[500px] m-auto">
            <!-- <img src="{base}/images/solo-tele-session.png" width="375" class="mx-auto my-5"/> -->
            <img src="{base}/images/solo-tele-therapist.png" class="mx-auto my-3 object-fit"/>
        </span>
	</div>
	<div class="mx-auto">
		<p>
            I have been given authorization (APIT14018) by the PSYPACT&reg; 
            commission to practice telehealth in any participating state.  To 
            find out if you are in a PSYPACT&reg; state, see 
            <a href="https://psypact.org/mpage/psypactmap" target="_blank">
            the official PSYPACT Map</a>.  If you are located in a PSYPACT&reg; state and 
            are interested in learning more about working together virtually, 
             complete the <a href="{base}/contact">Contact Form</a>.
		</p>
	</div>
    
</section>

<style>

</style>