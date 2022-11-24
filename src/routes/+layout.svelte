<script lang="Typescript">
    import Hamburger from "../components/Hamburger.svelte";
</script>

<Hamburger />

<nav class="navbar hidden" id="menu">
    <ul class="nav-list">
        <li class="nav-list-item">
            <a href="/" class="link">
            Home
            </a>
        </li>
        <li class="nav-list-item">
            <a href="/" class="link">
            Skills
            </a>
        </li>
        <li class="nav-list-item">
            <a href="/" class="link">
            Projects
            </a>
        </li>
    </ul>
</nav>

<div class="main-wrapper">
    <slot></slot>
</div>

<style lang="scss">
    @import "../styling/layout.scss";
</style>