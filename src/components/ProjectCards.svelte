<script>
    let deploymentAvailable = true;
    let githubLink = "";
    let deplymentLink = "";
</script>

<div class="project-wrapper">
    <div class="project-card">
        <img 
        class="project-screen" 
        src="http://picsum.photos/300/200?1" 
        alt="" 
        id="card-1"
        >
        <img 
        class="project-screen" 
        src="http://picsum.photos/300/200?2" 
        alt="" 
        id="card-2"
        >
        <img 
        class="project-screen" 
        src="http://picsum.photos/300/200?3" 
        alt="" 
        id="card-3"
        >
        <img 
        class="project-screen" 
        src="http://picsum.photos/300/200?4" 
        alt="" 
        id="card-4"
        >
        <div class="details">

            <h6 class="description title">
                Title
            </h6>
            <p class="description text">
                Description of the project
            </p>
            <a class="github btn" href="http://github.com">
                <img alt="a github icon" src="./github.svg">
            </a>
        </div>
        <!-- TODO: ADD GITHUB AND DEPLOYMENT BTNS -->
    </div>
</div>

<style lang="scss">
    @import "../styling/components/projectCards";
</style>