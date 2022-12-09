<script lang="ts">
	import Hamburger from '../components/Hamburger.svelte';
	let open = false;
	let menuHidden = true;
	function openMenu() {
		open = !open;
		menuHidden = !menuHidden;
	}
</script>

<Hamburger {open} {openMenu} />

<nav class={menuHidden ? 'navbar hidden' : 'navbar'}>
	<ul class="nav-list">
		<li class="nav-list-item">
			<a href="#home" class="link" on:click={openMenu}> Home </a>
		</li>
		<li class="nav-list-item">
			<a href="#about-me" class="link" on:click={openMenu}> About me </a>
		</li>
		<li class="nav-list-item">
			<a href="#projects" class="link" on:click={openMenu}> Projects </a>
		</li>
		<li class="nav-list-item">
			<a href="#contact" class="link" on:click={openMenu}> Contact </a>
		</li>
	</ul>
</nav>

<div class="main-wrapper">
	<slot />

	<footer class="footer">&#169; BorysWnr 2022</footer>
</div>

<style lang="scss">
	@import '../styling/layout.scss';
</style>
