<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
	function handleSubmit() {}
</script>

<form name="contact" netlify on:submit|preventDefault={handleSubmit}>
	<input placeholder="Name" type="text" required bind:value={name} />

	<input placeholder="E-mail" type="email" required bind:value={email} />

	<textarea
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
