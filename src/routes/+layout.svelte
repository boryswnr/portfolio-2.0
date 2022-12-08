<script lang="typescript">
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
			<a href="/" class="link"> Home </a>
		</li>
		<li class="nav-list-item">
			<a href="/" class="link"> Skills </a>
		</li>
		<li class="nav-list-item">
			<a href="/" class="link"> Projects </a>
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
