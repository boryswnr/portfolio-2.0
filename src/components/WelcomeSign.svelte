<script lang="typescript">
    import {onMount} from 'svelte';

    // onMount(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('show');
    //             // } else {
    //             //     entry.target.classList.remove('show');
    //             }
    //         })
    //     })
    
    //     const hiddenElements = document.querySelectorAll('.section');
    //     hiddenElements.forEach((el) => el.classList.remove("show"))
    //     hiddenElements.forEach((el) => observer.observe(el))

    // })
</script>

<div class="welcome-sign">
    <div class="img-container">
        <img alt="a small eye following cursor" src="./eye.png" class="eye-image left">
        <img alt="a small eye following cursor" src="./eye.png" class="eye-image right">
        <img alt="Rick graphic" src="./rick-portrait.png" class="photo" id="rick">
    </div>
    <h1 class="title">Hi, I'm Borys. Welcome to my website.</h1>
</div>

<style lang="scss">
    @import "../styling/welcomeSign.scss"

</style>