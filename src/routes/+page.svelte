<script lang="typescript">
	import { intersectionObserver, angle } from '../utils';
	import { onMount } from 'svelte';
	import WelcomeSign from '../components/WelcomeSign.svelte';
	import TechStack from '../components/TechStack.svelte';
	import ProjectCards from '../components/ProjectCards.svelte';
	let mouseX: number;
	let mouseY: number;
	let focusedProject;

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
			const eyes: NodeListOf<HTMLElement> = document.querySelectorAll('.eye-image');
			eyes.forEach((eye) => {
				eye.style.transform = `rotate(${90 + angleDeg}deg)`;
			});
		}
	}

	// function focusOnProject(e: MouseEvent) {
	//     console.log(e);
	//     let target = e.target as HTMLElement;
	//     if (target.classList.contains("project-screen")) {
	//         target = target.parentElement?.parentElement?.parentElement as HTMLElement
	//         console.log("target:", target)
	//     }
	//     const projectWrapper = document.querySelector(".details");
	//     const projectsArray = document.querySelectorAll(".project-container");
	//     console.log(projectsArray);
	//     projectsArray.forEach(project => project.classList.toggle('show'));
	//     target.classList.add("show", "active");
	//     projectWrapper?.classList.add("show-details")
	//     let card1 =  document.getElementById("card-1") as HTMLElement;
	//     let card2 =  document.getElementById("card-2") as HTMLElement;
	//     let card3 =  document.getElementById("card-3") as HTMLElement;
	//     let card4 =  document.getElementById("card-4") as HTMLElement;
	//     card1.style.transform = "translate(-45%, -45%) rotate(-8deg)";
	//     card2.style.transform = "translate(-45%, 45%) rotate(-5deg)";
	//     card3.style.transform = "translate(45%, -45%) rotate(6deg)";
	//     card4.style.transform = "translate(45%, 45%) rotate(-6deg)";
	// }

	// function printClickTarget(e: MouseEvent) {
	//     console.log(e.target)
	// }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<WelcomeSign />

<section class="hide section about-me">
	<h2 class="section-title">About me</h2>
	<p class="about-me-paragraph">
		I am a mostly self-taught developer in making. I would like to become fullstack eventually, but
		I'm not sure yet what path will take me there. <br /> <br />
		Personally, I am hard-working, communicative, great team player and ambitious. Apart from coding,
		I like working out, music, hiking, playing with my dog. <br /> <br />
		Interested in hiring me?
	</p>
	<a href="BorysWerner-CV.pdf" download class="cv-download-btn">Download CV</a>
</section>

<section class="hide section technologies">
	<TechStack />
</section>

<section class="hide section projects">
	<h3>My projects</h3>
	<p class="projects-foreword">
		Here are some of the projects I have made. I code in Python in my current job, but I can't show
		you those, since my work is subject to non-disclosure agreement.
	</p>

	<div class="gallery">
		<div class="hide project-container" style="--order: 1">
			<ProjectCards githubLink="https://github.com/boryswnr/party_app" />
			<h6 class="project-title">Shared Music controller app</h6>
			<p class="project-description">
				A fullstack project built around Spotify API to let people play/pause music and vote on
				skipping a song. No deployment available. See README in the repo to for instructions on how
				to spin it up.
			</p>
		</div>

		<div class="hide project-container" style="--order: 2">
			<ProjectCards githubLink="https://github.com/boryswnr/shopping-cart" />
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
<section class="hide " />
<section class="hide">
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur
		nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga
		laborum ea corporis delectus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
		commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt
		excepturi esse alias id, fuga laborum ea corporis delectus? Lorem, ipsum dolor sit amet
		consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore
		obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis
		delectus?
	</p>
</section>
<section class="hide">
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur
		nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga
		laborum ea corporis delectus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
		commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt
		excepturi esse alias id, fuga laborum ea corporis delectus? Lorem, ipsum dolor sit amet
		consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore
		obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis
		delectus?
	</p>
</section>
<section class="hide">
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur
		nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga
		laborum ea corporis delectus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
		commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt
		excepturi esse alias id, fuga laborum ea corporis delectus? Lorem, ipsum dolor sit amet
		consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore
		obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis
		delectus?
	</p>
</section>
<section class="hide">
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur
		nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga
		laborum ea corporis delectus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
		commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt
		excepturi esse alias id, fuga laborum ea corporis delectus? Lorem, ipsum dolor sit amet
		consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore
		obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis
		delectus?
	</p>
</section>
<section class="hide">
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur
		nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga
		laborum ea corporis delectus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
		commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt
		excepturi esse alias id, fuga laborum ea corporis delectus? Lorem, ipsum dolor sit amet
		consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore
		obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis
		delectus?
	</p>
</section>
<section class="hide">
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur
		nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga
		laborum ea corporis delectus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
		commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt
		excepturi esse alias id, fuga laborum ea corporis delectus? Lorem, ipsum dolor sit amet
		consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore
		obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis
		delectus?
	</p>
</section>

<style lang="scss">
	@import '../styling/mainPage.scss';
	@import '../styling/components/showOnScroll';

	.project-container {
		transition-delay: calc(100ms * var(--order));
	}
</style>
