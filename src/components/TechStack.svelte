<script lang="ts">
	import { intersectionObserver } from '../utils';
	import { onMount } from 'svelte';

	onMount(() => {
		intersectionObserver();
	});
</script>

<h3 class="title tech-stack">Technologies I work with</h3>
<div class="technologies-frame">
	<div class="logo-wrapper hide" style="--order: 1">
		<img class="logo" src="tech-stack-svgs/JavaScript.svg" alt="JS logo" />
	</div>
	<div class="logo-wrapper hide" style="--order: 2">
		<img class="logo" src="tech-stack-svgs/Typescript.svg" alt="TS logo" />
	</div>
	<div class="logo-wrapper hide" style="--order: 3">
		<img class="logo" src="tech-stack-svgs/React.svg" alt="React logo" />
	</div>
	<div class="logo-wrapper hide" style="--order: 4">
		<img class="logo" src="tech-stack-svgs/Python.svg" alt="Python logo" />
	</div>
	<div class="logo-wrapper hide" style="--order: 5">
		<img class="logo" src="tech-stack-svgs/Svelte.svg" alt="Svelte logo" />
	</div>
	<div class="logo-wrapper hide" style="--order: 6">
		<img class="logo" src="tech-stack-svgs/HTML5.svg" alt="HTML logo" />
	</div>
	<div class="logo-wrapper hide" style="--order: 7">
		<img class="logo" src="tech-stack-svgs/CSS3.svg" alt="CSS logo" />
	</div>
	<div class="logo-wrapper hide" style="--order: 8">
		<img class="logo" src="tech-stack-svgs/Sass.svg" alt="Sass logo" />
	</div>
</div>

<style lang="scss">
	@import '../styling/components/techStack';
	@import '../styling/components/showOnScroll';

	.logo-wrapper {
		&:nth-child(n) {
			transition-delay: calc(100ms * var(--order));
		}
	}
</style>
