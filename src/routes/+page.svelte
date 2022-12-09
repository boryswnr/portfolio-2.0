<script lang="ts">
	import { intersectionObserver, angle } from '../utils';
	import { onMount } from 'svelte';
	import WelcomeSign from '../components/WelcomeSign.svelte';
	import TechStack from '../components/TechStack.svelte';
	import ProjectCards from '../components/ProjectCards.svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons/index.js';
	let mouseX: number;
	let mouseY: number;
	let colorsNumber = 0;
	let colorsArray = ['black', 'pink', 'green', 'purple', 'orange', 'blue'];

	onMount(() => {
		intersectionObserver();
	});

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
		const rickImage = document.getElementById('rick');
		const imageMiddle = rickImage?.getBoundingClientRect();
		if (imageMiddle) {
			const imageMiddleX = imageMiddle.left + imageMiddle.width / 2;
			const imageMiddleY = imageMiddle.top + imageMiddle.height / 2;
			const angleDeg = angle(mouseX, mouseY, imageMiddleX, imageMiddleY);
			const eyes: NodeListOf<HTMLElement> = document.querySelectorAll('.eye-div');
			eyes.forEach((eye) => {
				eye.style.transform = `rotate(${-60 + angleDeg}deg)`;
			});
		}
	}

	function changeEyeColor() {
		const eyeballs = document.querySelectorAll('.eyeball') as NodeListOf<HTMLElement>;
		colorsNumber + 1 >= colorsArray.length ? (colorsNumber = 0) : (colorsNumber += 1);
		eyeballs.forEach((eye) => {
			eye.style.backgroundColor = colorsArray[colorsNumber];
		});
	}
</script>

<svelte:window on:mousemove={handleMouseMove} on:click={changeEyeColor} />

<WelcomeSign />

<section class="hide section about-me" id="about-me">
	<h2 class="title about-me">About me</h2>
	<p class="about-me-paragraph">
		I am a mostly self-taught developer in making. I would like to become fullstack eventually, but
		I'm not sure yet what path will take me there. <br /> <br />
		Personally, I am hard-working, communicative, great team player and ambitious. Apart from coding,
		I like working out, music, hiking, playing with my dog. <br /> <br />
		Interested in hiring me?
	</p>
	<a href="BorysWerner-CV.pdf" download class="cv-download btn">Download CV</a>
</section>

<section class="hide section technologies">
	<TechStack />
</section>

<section class="hide section projects" id="projects">
	<h3 class="title my-projects">My projects</h3>
	<p class="projects-foreword">
		Here are some of the projects I have made. I code in Python in my current job, but I can't show
		you those, since my work is subject to non-disclosure agreement.
	</p>

	<div class="gallery">
		<div class="hide project-container" style="--order: 1">
			<ProjectCards
				githubLink="https://github.com/boryswnr/party_app"
				photo1="project-screens/party-app-1.png"
				photo2="project-screens/party-app-2.png"
				photo3="project-screens/party-app-3.png"
				photo4="project-screens/party-app-4.png"
			/>
			<h6 class="project-title">Shared Music controller app</h6>
			<p class="project-description">
				A fullstack project built around Spotify API to let people play/pause music and vote on
				skipping a song. No deployment available. I am working on a version that will be deployed
				live.
			</p>
		</div>

		<div class="hide project-container" style="--order: 2">
			<ProjectCards
				githubLink="https://github.com/boryswnr/shopping-cart"
				deploymentLink="https://borys-shopping-cart.netlify.app/"
				photo1="project-screens/shopping-cart-1.png"
				photo2="project-screens/shopping-cart-2.png"
				photo3="project-screens/shopping-cart-3.png"
			/>
			<h6 class="project-title">E-commerce frontend</h6>
			<p class="project-description">
				A frontend of an e-commerce shopping cart. Technologies used: TypeScript, React. A shopping
				cart you can find on any on-line shop. Basic styling via bootstrap.
			</p>
		</div>

		<div class="hide project-container" style="--order: 3">
			<ProjectCards
				githubLink="https://github.com/boryswnr/game-of-life"
				deploymentLink="https://boryswnr.github.io/game-of-life/"
				photo1="project-screens/game-of-life-1.png"
				photo2="project-screens/game-of-life-2.png"
				photo3="project-screens/game-of-life-3.png"
			/>
			<h6 class="project-title">A game of life</h6>
			<p class="project-description">
				Technologies used: JavaScript, HTML, CSS. <br />
				Conway's game of life, with rules slightly modified.
			</p>
		</div>

		<div class="hide project-container" style="--order: 4">
			<ProjectCards
				githubLink="https://github.com/boryswnr/weatherApp"
				deploymentLink="https://boryswnr.github.io/weatherApp/"
				photo1="project-screens/weather-app-1.png"
				photo2="project-screens/weather-app-2.png"
			/>
			<h6 class="project-title">Weather forecast app.</h6>
			<p class="project-description">
				Technologies used: HTML, CSS, JavaScript, web API.
				<br />A simple website to check a weather for the next few days. Uses free web API and JS
				geolocation.
			</p>
		</div>
	</div>
</section>

<section class="section hide contact-form" id="contact">
	<h3 class="contact title">Contact</h3>

	<div class="links-wrapper">
		<p>Find me here:</p>
		<a
			target="_blank"
			rel="noreferrer noopener"
			href="https://www.linkedin.com/in/borys-wnr/"
			class="icon-link linkedin"><Fa icon={faLinkedin} /></a
		>
		<a
			target="_blank"
			rel="noreferrer noopener"
			href="https://github.com/boryswnr"
			class="icon-link github"><Fa icon={faGithub} /></a
		>
	</div>

	<p class="form-inv">Wanna use my fancy form?</p>

	<ContactForm />

	<p class="email-note">
		Prefer simple e-mail? Mail me <a class="mail-to" href="mailto: boryswnr@protonmail.com">here.</a
		>
	</p>
</section>

<style lang="scss">
	@import '../styling/mainPage.scss';
	@import '../styling/components/showOnScroll';

	.project-container {
		transition-delay: calc(100ms * var(--order));
	}
</style>
