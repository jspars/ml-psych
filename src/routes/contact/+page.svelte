<script>
    import ContactForm from '$lib/components/ContactForm.svelte'
    import ContactHeader from '$lib/components/PageHeader.svelte';

</script>

<ContactHeader headerText="Contact me" subheaderText="Leave your contact information, and I will respond within two business days." backgroundImage="/images/contact-header.png" />

<section class="container">
    <ContactForm />
</section>

<style>

</style>