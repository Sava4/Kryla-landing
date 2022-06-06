<script>
	import lazyload from 'vanilla-lazyload';
	import { browser } from '$app/env';

	import 'modern-css-reset/dist/reset.css';
	import '../app.css';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<slot />

<style>
	:global(:root) {
		--blue: #117fff;
		--yellow: #fff507;
		--blue-green: #04e9a4;
		--lime-green: #11ff37;
		--white: #fff;

		--lightest-gray: #dee2e6;
		--lighter-gray: #ced4da;
		--light-gray: #adb5bd;
		--gray: #868e96;
		--dark-gray: #495057;
		--darker-gray: #343a40;
		--darkest-gray: #212529;
		--black: var(--darkest-gray);
	}
	:global(html),
	:global(body) {
		padding: 0px;
		margin: 0px;
	}

	:global(html) {
		overflow: hidden;
	}

	:global(body) {
		font-family: 'Nunito', sans-serif;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		perspective: 1px;
		transform-style: preserve-3d;
	}
</style>
