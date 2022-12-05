<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/index.js';
	import { faLink } from '@fortawesome/free-solid-svg-icons/index.js';
	export let githubLink = '';
	export let deploymentLink = '';
</script>

<div class="project-wrapper">
	<div class="project-card">
		<img class="project-screen" src="http://picsum.photos/300/200?1" alt="" id="card-1" />
		<img class="project-screen" src="http://picsum.photos/300/200?2" alt="" id="card-2" />
		<img class="project-screen" src="http://picsum.photos/300/200?3" alt="" id="card-3" />
		<img class="project-screen" src="http://picsum.photos/300/200?4" alt="" id="card-4" />

		<!-- TODO: ADD GITHUB AND DEPLOYMENT BTNS -->
	</div>
	<div class="links-wrapper">
		<a href={githubLink}>
			<Fa icon={faGithub} />
		</a>
		{#if deploymentLink}
			<a href={deploymentLink}>
				<Fa icon={faLink} />
			</a>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../styling/components/projectCards';
</style>
