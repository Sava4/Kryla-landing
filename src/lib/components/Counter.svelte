<script>
	import { tweened } from 'svelte/motion';
	import { elasticInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Loader from '$lib/icons/loader.svg';

	export let loc = 'UA'
	let suma = 2000000;
	let width = 10;
	let loading = true;
	const number = tweened(1000, {
		duration: 2000,
		easing: elasticInOut
	});
	const uahFmt = new Intl.NumberFormat('uk', { maximumFractionDigits: 0 });
	$: value = uahFmt.format(Math.abs($number)) + `${ loc === 'UA' ? ' грн' : ' UAH'}`;
	$: total = uahFmt.format(suma) + `${ loc === 'UA' ? ' грн' : ' UAH'}`;
	onMount(() => {
		fetch('https://kryla.school/api/counter')
			.then((res) => res.json())
			.then((r) => {
				const { zibrano, potribno } = r.data.attributes;
				suma = potribno;
				loading = false;
				width = Math.round((zibrano / suma) * 100) - 1;
				number.set(zibrano);
			})
			.catch((err) => {
				console.log('API not available, using defaults');
				console.log(err);
				loading = false;
				width = Math.round((450000 / suma) * 100);
				number.set(450000);
			});
	});
</script>

<div class="container">
	<div class="ruler">
		<div class="counter" style="width: calc({width}% - {total.length - 3}ch);">
			<p class="value">{value}</p>
		</div>
	</div>
	{#if !loading}
		<p class="total">{total}</p>
	{:else}
		<Loader class="loader" width="80" height="25" />
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		max-width: 1240px;
		position: relative;
		margin: 10px auto 0;
	}

	.ruler {
		flex: 1;
		height: 12px;
		background-image: url('$lib/images/ruler-bg.svg');
		background-repeat: repeat-x;
		background-size: 38px 12px;
	}

	.counter {
		height: 14px;
		background-image: linear-gradient(269.88deg, #07d2b4 0%, #117fff 50.1%);
		font-size: 12px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 0 10px 10px 0;
		min-width: 10%;
		transition: width 2s ease-in-out;

		@media screen and (max-width: $mobile-breakpoint) {
			min-width: 25%;
			font-size: 10px;
		}
	}

	.value {
		position: absolute;
		top: 0;
		right: 9px;
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
		color: var(--white);

		@media screen and (max-width: $mobile-breakpoint) {
			font-size: 10px;
		}
	}

	.total {
		font-weight: 700;
		font-size: 12px;
		line-height: 14px;
		color: var(--yellow);
		@media screen and (max-width: $mobile-breakpoint) {
			font-size: 10px;
		}
	}

	:global(.loader) {
		position: relative;
		top: -5px;
	}
</style>
