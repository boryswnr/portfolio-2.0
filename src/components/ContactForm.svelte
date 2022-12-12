<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
	let formSent = false;

	async function handleSubmit() {
		const response = await fetch('/.netlify/functions/mail', {
			method: 'POST',
			body: JSON.stringify({ name, email, message })
		});
		console.log('repsonse:', response);
		console.log('formsent:', formSent);
		response.ok ? (formSent = true) : (formSent = false);
	}
</script>

{#if formSent}
	<p>Message sent via form!</p>
{/if}

<form name="contact" on:submit|preventDefault={handleSubmit}>
	<input name="name" placeholder="Name" type="text" required bind:value={name} />

	<input name="e-mail" placeholder="E-mail" type="email" required bind:value={email} />

	<textarea
		name="message"
		class="message"
		required
		placeholder="What would you like to tell me?"
		bind:value={message}
	/>

	<button type="submit" class="submit btn">Send message</button>
</form>

<style lang="scss">
	@import '../styling/components/contactForm';
</style>
