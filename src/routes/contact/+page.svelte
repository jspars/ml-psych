<script>
    import ContactForm from '$lib/components/ContactForm.svelte';
    import ContactHeader from '$lib/components/PageHeader.svelte';

</script>

<ContactHeader headerText="Contact me" subheaderText="" backgroundImage="/images/contact-header.png" />

<section class="container mx-auto max-w-[750px]">
    <p class="text-xl pt-5">Leave your contact information, and I will respond within two business days.</p>
    <ContactForm />
</section>

<style>

</style>