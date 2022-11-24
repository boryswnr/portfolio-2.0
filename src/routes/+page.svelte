<script lang="typescript">
    let name = "Borys"
    let mouseX: number;
    let mouseY: number;

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

    function angle(cx: number, cy: number, ex: number, ey: number) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI

        return deg
    }
}
    
    
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div class="welcome-sign">
    <div class="img-container">
        <img alt="Rick graphic" src="./rick-portrait.png" class="photo" id="rick">
        <img alt="a small eye following cursor" src="./eye.png" class="eye-image left">
        <img alt="a small eye following cursor" src="./eye.png" class="eye-image right">
    </div>
    <h1 class="title">Hi, I'm {name}. Welcome to my website.</h1>
</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi. Impedit consectetur nulla rem minima inventore obcaecati libero placeat nisi deserunt excepturi esse alias id, fuga laborum ea corporis delectus?
</p>

<style lang="scss">
    @import "../styling/mainPage.scss"
</style>