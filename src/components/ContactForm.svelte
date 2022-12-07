<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
	function handleSubmit() {}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input placeholder="Name" type="text" required bind:value={name} />

	<input placeholder="E-mail" type="email" required bind:value={email} />

	<textarea class="message" placeholder="What would you like to tell me?" bind:value={message} />

	<button type="submit" class="submit">Submit</button>
</form>

<style lang="scss">
	@import '../styling/components/contactForm';
</style>
