<script>
	import 'modern-css-reset/dist/reset.css';
</script>

<slot />

<style lang="scss">
	@font-face {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 400;
		src: local(''), url('$lib/fonts/nunito-v24-latin_cyrillic-regular.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */
				url('$lib/fonts/nunito-v24-latin_cyrillic-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}

	/* nunito-500 - latin_cyrillic */
	@font-face {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 500;
		src: local(''), url('$lib/fonts/nunito-v24-latin_cyrillic-500.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */ url('$lib/fonts/nunito-v24-latin_cyrillic-500.woff')
				format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}

	/* nunito-600 - latin_cyrillic */
	@font-face {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 600;
		src: local(''), url('$lib/fonts/nunito-v24-latin_cyrillic-600.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */ url('$lib/fonts/nunito-v24-latin_cyrillic-600.woff')
				format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}

	/* nunito-700 - latin_cyrillic */
	@font-face {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 700;
		src: local(''), url('$lib/fonts/nunito-v24-latin_cyrillic-700.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */ url('$lib/fonts/nunito-v24-latin_cyrillic-700.woff')
				format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}

	/* nunito-800 - latin_cyrillic */
	@font-face {
		font-family: 'Nunito';
		font-style: normal;
		font-weight: 800;
		src: local(''), url('$lib/fonts/nunito-v24-latin_cyrillic-800.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */ url('$lib/fonts/nunito-v24-latin_cyrillic-800.woff')
				format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}

	:global(:root) {
		--blue: #117fff;
		--text-blue: #1162ff;
		--yellow: #fff507;
		--dark-blue: #0a5bdb;
		--light-blue: #0d6ded;
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
		height: 100lvh;
		overflow-x: hidden;
		overflow-y: auto;
		perspective: 1px;
		transform-style: preserve-3d;
		scroll-behavior: smooth;
		scroll-padding-top: 200px;
		@media screen and (max-width: $mobile-breakpoint) {
			background-color: var(--yellow);
			scroll-padding-top: 55px;
		}
	}
</style>
