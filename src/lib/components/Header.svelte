<script>
	import { clickOutside } from '$lib/click-outside.js';
	import Logo from '$lib/icons/logo.svg';
	import Rollover from '$lib/black-icons/rollover.svg';
	import UA from '$lib/icons/UA.svg?url';
	import GB from '$lib/icons/GB.svg?url';

	import Counter from '$lib/components/Counter.svelte';

	let selected = 'UA';
	let open = false;
	export let activeSection = 1;
</script>

<div class="fixed">
	<div class="bg">
		<div class="container">
			<a href="#" class="logo"><Logo width="186" height="64" /></a>
			<div
				class="lang-contain"
				class:open
				on:click={() => (open = !open)}
				use:clickOutside
				on:outclick={() => (open = false)}
			>
				<div class="langselector">
					<img
						src={UA}
						alt={'Ukraine language selector'}
						on:click={() => (selected = 'UA')}
						class:active={selected === 'UA'}
					/>
					<img
						src={GB}
						alt={'English language selector'}
						on:click={() => (selected = 'GB')}
						class:active={selected === 'GB'}
					/>
				</div>
			</div>
			<div class="paginator">
				<a href="#first" class="link" class:active={activeSection >= 1}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#second" class="link" class:active={activeSection >= 2}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#third" class="link" class:active={activeSection >= 3}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#fourth" class="link" class:active={activeSection >= 4}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#fifth" class="link" class:active={activeSection >= 5}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#sixth" class="link" class:active={activeSection >= 6}>
					<Rollover width="22" height="22" />
				</a>
			</div>
			<span class="motto"
				>В нелегкий час наш ліцей виконує важливу місію з розвитку та виховання майбутніх патріотів
				та лідерів європейської країни</span
			>
			<a class="support" href="#">Підтримати ліцей</a>
		</div>
	</div>
	<Counter />
</div>

<style lang="scss">
	.fixed {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 5;
	}
	.bg {
		background-color: var(--yellow);
		height: 94px;
		display: flex;
	}

	.container {
		flex: 1;
		margin: 0 auto;
		max-width: 1240px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.lang-contain {
		margin: 0 28px 0 auto;
		width: 39px;
		height: 39px;
		overflow: hidden;

		.langselector {
			width: 98px;
			border-radius: 30px;
			display: flex;
			justify-content: space-between;

			img {
				cursor: pointer;
				&.active {
					order: -1;
				}
			}
		}
		&.open {
			overflow: visible;
			height: 50px;
			width: 50px;
			position: relative;
			left: -6px;
			margin-right: 16px;
			.langselector {
				padding: 3px;
				border: 2px solid var(--white);
			}
		}
	}

	.paginator {
		width: 192px;
		height: 22px;
		display: flex;
		justify-content: space-between;
	}

	:global(.link .outer) {
		stroke: transparent;
	}
	:global(.link:hover .outer) {
		stroke: var(--blue);
	}

	:global(.link.active .inner) {
		fill: var(--blue);
	}

	.support {
		margin-left: 29px;
		height: 45px;
		width: 223px;
		color: var(--white);
		text-transform: uppercase;
		font-weight: 700;
		font-size: 15px;
		padding: 11px 25px 11px 25px;
		background: linear-gradient(211.5deg, var(--blue) -6.64%, var(--blue-green) 81%);
		border-radius: 10px;
		text-decoration: none;
		text-align: center;
	}

	.motto {
		margin-left: auto;
		width: 323px;
		height: 45px;
		font-weight: 500;
		font-size: 15px;
		line-height: 1;
		text-align: right;
		color: var(--blue);
	}
</style>
