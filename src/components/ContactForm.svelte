<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
</script>

<form name="contact" method="post" data-netlify="true" on:submit|preventDefault>
	<input type="hidden" name="form-name" value="contact" />

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
