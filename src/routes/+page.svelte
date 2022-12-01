<script lang="typescript">
	import { intersectionObserver, angle } from '../utils';
    import {onMount} from 'svelte';
	import WelcomeSign from '../components/WelcomeSign.svelte';
	import TechStack from '../components/TechStack.svelte';
	import ProjectCards from '../components/ProjectCards.svelte';
    let mouseX: number;
    let mouseY: number;
    let focusedProject;

    onMount(() => {
            intersectionObserver()
        })

    function handleMouseMove(e: MouseEvent) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        const rickImage = document.getElementById("rick");
        const imageMiddle = rickImage?.getBoundingClientRect();
        if (imageMiddle) {
        const imageMiddleX = imageMiddle.left + imageMiddle.width / 2;
        const imageMiddleY = imageMiddle.top + imageMiddle.height / 2;
        const angleDeg = angle(mouseX, mouseY, imageMiddleX, imageMiddleY);
        const eyes: NodeListOf<HTMLElement> = document.querySelectorAll('.eye-image'); 
            eyes.forEach(eye => { eye.style.transform = `rotate(${90 + angleDeg}deg)`})
        }
    }

    function focusOnProject(e: MouseEvent) {
        console.log(e);
        let target = e.target as HTMLElement;
        if (target.classList.contains("project-screen")) {
            target = target.parentElement?.parentElement?.parentElement as HTMLElement
            console.log("target:", target)
        }
        const projectWrapper = document.querySelector(".details");
        const projectsArray = document.querySelectorAll(".project-container");
        console.log(projectsArray);
        projectsArray.forEach(project => project.classList.toggle('show'));
        target.classList.add("show", "active");
        projectWrapper?.classList.add("show-details")
        let card1 =  document.getElementById("card-1") as HTMLElement;
        let card2 =  document.getElementById("card-2") as HTMLElement;
        let card3 =  document.getElementById("card-3") as HTMLElement;
        let card4 =  document.getElementById("card-4") as HTMLElement;
        card1.style.transform = "translate(-45%, -45%) rotate(-8deg)";
        card2.style.transform = "translate(-45%, 45%) rotate(-5deg)";
        card3.style.transform = "translate(45%, -45%) rotate(6deg)";
        card4.style.transform = "translate(45%, 45%) rotate(-6deg)";        
    }

    function printClickTarget(e: MouseEvent) {
        console.log(e.target)
    }
  
  
    
</script>

<svelte:window on:mousemove={handleMouseMove} on:click={printClickTarget} />

<WelcomeSign />

<section class="hide section technologies">
    <TechStack />
</section>

<section class="hide section projects">
    <h3>
        My projects
    </h3>

    <div class="gallery">        
        <div 
        class="hide project-container" 
        style="--order: 1" 
        on:click={focusOnProject}
        > 
            <ProjectCards />
        </div>
        
        <div class="hide project-container" style="--order: 2">
          <ProjectCards />
        </div>
        
        <div class="hide project-container" style="--order: 3">
           <ProjectCards />
        </div>
        
        <div class="hide project-container" style="--order: 4">
            <ProjectCards />
        </div>
    
    </div>
    
</section>
<section class="hide">

    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
</section>
<section class="hide">

    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    </p>
</section>
<section class="hide">

    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    </p>
</section>
<section class="hide">

    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    </p>
</section>
<section class="hide">

    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    </p>
</section>
<section class="hide">

    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    </p>
</section>
<section class="hide">

    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    </p>
</section>

<style lang="scss">
    @import "../styling/mainPage.scss";
    @import "../styling/components/showOnScroll";

    .project-container {
        transition-delay: calc(100ms * var(--order));
    }
</style>