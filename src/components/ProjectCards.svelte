<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/index.js';
	import { faLink } from '@fortawesome/free-solid-svg-icons/index.js';
	export let githubLink = '';
	export let deploymentLink = '';
	export let photo1 = '';
	export let photo2 = '';
	export let photo3 = '';
	export let photo4 = '';
</script>

<div class="project-wrapper">
	<div class="project-card">
		<img class="project-screen" src={photo1} alt="a screen of the project" id="card-4" />
		{#if photo2}
			<img class="project-screen" src={photo2} alt="a screen of the project" id="card-1" />
		{/if}
		{#if photo3}
			<img class="project-screen" src={photo3} alt="a screen of the project" id="card-3" />
		{/if}
		{#if photo4}
			<img class="project-screen" src={photo4} alt="a screen of the project" id="card-2" />
		{/if}
		<!-- TODO: ADD GITHUB AND DEPLOYMENT BTNS -->
	</div>
	<div class="links-wrapper">
		<a target="_blank" rel="noreferrer noopener" class="link-icon" href={githubLink}>
			<Fa icon={faGithub} />
		</a>
		{#if deploymentLink}
			<a target="_blank" rel="noreferrer noopener" class="link-icon" href={deploymentLink}>
				<Fa icon={faLink} />
			</a>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../styling/components/projectCards';
</style>
