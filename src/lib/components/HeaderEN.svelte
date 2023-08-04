<script>
	import { clickOutside } from '$lib/click-outside.js';
	import Logo from '$lib/icons/logo.svg';
	import Rollover from '$lib/black-icons/rollover.svg';
	import UA from '$lib/icons/UA.svg?url';
	import GB from '$lib/icons/GB.svg?url';

	import Counter from '$lib/components/Counter.svelte';

	let selected = 'GB';
	let open = false;
	export let activeSection = 1;
</script>

<div class="fixed">
	<div class="bg">
		<div class="container">
			<a href="https://kryla.school/charity/en"><Logo class="logo" width="186" height="64" /></a>
			<div
				class="lang-contain"
				class:open
				on:click={() => (open = !open)}
				use:clickOutside
				on:outclick={() => (open = false)}
			>
				<div class="langselector">
					<a href="https://kryla.school/charity">
						<img
							src={UA}
							alt={'Ukraine language selector'}
							on:click={() => (selected = 'UA')}
							class:active={selected === 'UA'}
						/>
					</a>
					<img
						src={GB}
						alt={'English language selector'}
						on:click={() => (selected = 'GB')}
						class:active={selected === 'GB'}
					/>
				</div>
			</div>
			<div class="paginator">
				<a href="#kryla" class="link" class:active={activeSection >= 1}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#path" class="link" class:active={activeSection >= 2}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#challenges" class="link" class:active={activeSection >= 3}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#history" class="link" class:active={activeSection >= 4}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#owl" class="link" class:active={activeSection >= 5}>
					<Rollover width="22" height="22" />
				</a>
				<a href="#photo" class="link" class:active={activeSection >= 6}>
					<Rollover width="22" height="22" />
				</a>
			</div>
			<span class="motto"
				>At this difficult time, our lyceum is fulfilling an important mission to develop and
				educate future patriots and leaders of a European country</span
			>
			<a class="support" href="#support">Support our lyceum</a>
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
		@media screen and (max-width: $mobile-breakpoint) {
			height: 55px;
		}
	}

	.container {
		flex: 1;
		margin: 0 auto;
		max-width: 1240px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media screen and (max-width: $mobile-breakpoint) {
			max-width: 90%;
		}

		:global(.logo) {
			@media screen and (max-width: $mobile-breakpoint) {
				width: 108px;
				height: 37.5px;
			}
		}

		.lang-contain {
			margin: 0 auto;
			width: 45px;
			height: 45px;
			overflow: hidden;
			position: relative;
			top: -2px;
			@media screen and (max-width: $mobile-breakpoint) {
				order: 2;
				margin: 0 0 0 18px;
				width: 30px;
				height: 30px;
			}

			.langselector {
				width: 98px;
				border-radius: 30px;
				display: flex;
				justify-content: space-between;
				padding: 3px;
				border: 2px solid transparent;

				@media screen and (max-width: $mobile-breakpoint) {
					width: 34px;
					height: 62px;
					flex-direction: column;
				}

				img {
					cursor: pointer;
					&.active {
						order: -1;
					}
				}
			}
			&.open {
				overflow: visible;
				.langselector {
					border: 2px solid var(--white);
				}
			}
		}

		.paginator {
			margin-left: auto;
			width: 192px;
			height: 22px;
			display: flex;
			justify-content: space-between;
			@media screen and (max-width: $mobile-breakpoint) {
				display: none;
			}
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
			/* background: linear-gradient(211.5deg, var(--blue) -6.64%, var(--blue-green) 81%); */
			background: linear-gradient(90deg, #04e9a4, #117fff, #11ff37, #117fff, #04e9a4);
			background-size: 500%;
			border-radius: 10px;
			text-decoration: none;
			text-align: center;

			@media screen and (max-width: $mobile-breakpoint) {
				height: 24px;
				width: 126px;
				border-radius: 5px;
				padding: 5px 10px;
				margin-left: auto;
				font-size: 9px;
				letter-spacing: 0em;
			}
			@keyframes animate {
				0% {
					background-position: 0%;
				}
				100% {
					background-position: 500%;
				}
			}
			&:hover {
				animation: animate 10s linear infinite;
			}
		}

		.motto {
			margin-left: auto;
			width: 330px;
			height: 45px;
			font-weight: 500;
			font-size: 15px;
			line-height: 1;
			text-align: right;
			color: var(--blue);
			@media screen and (max-width: $mobile-breakpoint) {
				display: none;
			}
		}
	}
</style>
