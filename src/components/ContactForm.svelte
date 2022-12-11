<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
	function handleSubmit() {
		console.log('submitted');
	}
</script>

<form name="contact" data-netlify="true" on:submit|preventDefault={handleSubmit}>
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
