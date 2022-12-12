<script lang="ts">
	import { env } from '$env/dynamic/private';

	let name = '';
	let email = '';
	let message = '';
	let formSent = false;

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const response = await fetch('https://api.sendgrid.com/v3/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${env.SENDGRID_API_KEY}`
			},
			body: JSON.stringify({
				personalizations: [
					{
						to: [{ email: 'boryswnr@protonmail.com' }],
						subject: [{ subject: 'New contact form message' }]
					}
				],
				from: { email: 'boryswnr@protonmail.com' },
				content: [
					{
						type: 'text/plain',
						value: `Sender: ${name}, ${email}. Message: ${message}`
					}
				]
			})
		});
		formSent = true;
		console.log('repsonse:', response);
		console.log('formsent:', formSent);
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
