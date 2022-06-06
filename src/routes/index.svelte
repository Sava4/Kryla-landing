<script>
	import Header from '$lib/components/Header.svelte';

	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { Image } from '@rodneylab/sveltekit-components';
	import Diamond from '$lib/images/diamond-values.svg';
	import Values from '$lib/images/values.svg';

	import puzzle from '$lib/images/puzzle.png';
	import idea from '$lib/images/idea.png';
	import umbrella from '$lib/images/umbrella.png';
	import heart from '$lib/images/heart.png';
	import cloud from '$lib/images/cloud.png';
	import dialogue from '$lib/images/dialogue.png';

	import ways from '$lib/images/ways.svg?url';

	// import krylaImg from '$lib/images/kryla.png?w=720&png&src';
	// import srcsetJpeg from '$lib/images/kryla.png?w=1240;640&jpeg&srcset';
	// import srcsetWebp from '$lib/images/kryla.png?w=1240;640&webp&srcset';

	// const { width, height, src } = meta;
	// console.log('Meta', meta)
	// const sources = [
	//   { srcset: srcsetWebp, type: 'image/webp' },
	//   { srcset: srcsetJpeg, type: 'image/jpeg' },
	// ];

	// const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';

	//  console.log('Sizes', sizes)
	onMount(() => {
		if (browser) {
			document.lazyloadInstance.update();
		}
	});
</script>

<Header />
<div class="parallax">
	<h1>Ми навчаємо вільних дітей</h1>
	<h2>Вільної, красивої та щасливої України</h2>
	<div class="ourvalues">
		<Diamond width="240" height="238" />
		<Values class="cinnnosti" width="239" height="237" />
	</div>
	<div class="values">
		<div class="val">
			<img src={puzzle} alt="Puzzle head icon" />
			<p>Чесність та людяність</p>
		</div>
		<div class="val">
			<img src={idea} alt="Light bulb icon" />
			<p>Свідомість та схильність до саморефлексії</p>
		</div>
		<div class="val">
			<img src={umbrella} alt="Umbrella icon" />
			<p>Відповідальність за себе, сім’ю, спільноту, державу та світ</p>
		</div>
		<div class="val">
			<img src={heart} alt="Heart icon" />
			<p>Патріотизм як любов до свого народу</p>
		</div>
		<div class="val">
			<img src={cloud} alt="Cloud icon" />
			<p>Природна цікавість та готовність до самовдосконалення</p>
		</div>
		<div class="val">
			<img src={dialogue} alt="Chat dialogue icon" />
			<p>Вміння формувати ідеї шляхом вільного діалогу</p>
		</div>
	</div>
</div>

<div class="outer">
	<div class="inner">
		<img class="waysImg" src={ways} alt={'Ways icon with scrolling text'} />
		<div class="ways-cont">
			<div class="item">
				<p class="name">Команда</p>
				<p class="desc">
					Ретельний добір фахівців-вчителів, якірозділяють і сповідують вказані вище цінності
				</p>
			</div>
			<div class="item">
				<p class="name">Менеджмент</p>
				<p class="desc">
					Діалог між усіма ланками управління та горизонтальні зв’язки між вчителями-учнями-батьками
				</p>
			</div>
			<div class="item">
				<p class="name">Атмосфера</p>
				<p class="desc">
					Ставлення до дитини як до особистості, повноцінногоі рівноправного учасника навчального
					процесу
				</p>
			</div>
			<div class="item">
				<p class="name">Творчість</p>
				<p class="desc">
					Креативність, підтримка усіх мистецьких і наукових проєктів талановитих дітей, надання
					можливості повної творчої реалізації під час навчання в школі
				</p>
			</div>
			<div class="item">
				<p class="name">Соціальний акцент</p>
				<p class="desc">
					Надання дітям та батькам можливості проявити свої здібності у сфері самоврядування, яке
					покладено у фундамент концепту школи.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="wrap">
	<div class="parallax2" />
</div>

<div class="wrp">
	<h2>Outer text Text</h2>
	<Values class="cinnosti" width="239" height="237" />
</div>

<style lang="scss">
	:global(.svg-cont) {
		width: 50px;
		height: 50px;
	}

	:global(.svg-cont .outer) {
		stroke: transparent;
	}
	:global(.svg-cont:hover .outer) {
		stroke: var(--blue);
	}

	:global(.svg-cont.active .inner) {
		fill: var(--blue);
	}

	.parallax {
		width: 100%;
		height: 950px;
		position: relative;
		transform-style: preserve-3d;
		&:after {
			position: absolute;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			/* background-position-y: top 20px; */
			/* background-color: rgba(17, 127, 255, 0.5); */
			/* background-image: url('$lib/images/kryla-bg.png'), linear-gradient(74.09deg, #667EEA 9.19%, #10A9FF 88.91%); */
			background-image: linear-gradient(
					180deg,
					rgba(17, 127, 255, 0.75) 0%,
					rgba(17, 127, 255, 0.9) 54.48%,
					rgba(17, 127, 255, 1) 75%
				),
				url('$lib/images/kryla-bg.png');
			/* background-image: url('$lib/images/with_grad.png'), linear-gradient(74.09deg, rgba(102, 126, 234, 1) 9.19%, rgba(16, 169, 255, 1) 88.91%) */
			top: 0px;
			left: 0px;
			right: 0px;
			bottom: 0px;
			z-index: -2;
			content: '';
			transform: translateZ(-1px) scale(2);
		}
		h1 {
			font-size: 60px;
			font-weight: 800;
			line-height: 75px;
			letter-spacing: 0em;
			text-align: center;
			color: #fff;
			text-transform: uppercase;
			margin-top: 133px;
			margin-bottom: 19px;
		}
		h2 {
			font-size: 30px;
			font-weight: 600;
			line-height: 55px;
			letter-spacing: 0em;
			text-align: center;
			color: #fff;
		}
		.ourvalues {
			position: absolute;
			z-index: -1;
			left: 50%;
			/* top: 175px; */
			top: 270px;
			transform: translateZ(-1px) scale(2) translateX(-21%);
			@keyframes spin {
				100% {
					transform: rotate(360deg);
				}
			}
			:global(.cinnnosti) {
				position: absolute;
				top: 2px;
				left: 0;
				animation: spin 45s linear infinite;
			}
		}

		.values {
			max-width: 1240px;
			margin: 118px auto 0;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			color: #fff;

			.val {
				flex: 1;
				text-align: center;
				img {
					margin-bottom: -20px;
				}
				p {
					width: 160px;
					margin: 0 auto;
					font-size: 15px;
					font-weight: 700;
					line-height: 20px;
					letter-spacing: 0;
				}
			}
		}
	}

	.outer {
		width: 100%;
		background-color: #117fff;
		perspective: 2px;
		.inner {
			.waysImg {
				position: relative;
				left: 50%;
				top: -110px;
				transform: translateX(-50%);
			}

			.ways-cont {
				min-height: 353px;
				max-width: 1240px;
				margin: -78px auto 0;
				padding-bottom: 74px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: stretch;

				.item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #fff;

					.name {
						text-align: right;
						margin-right: 89px;
						font-size: 30px;
						font-weight: 600;
						line-height: 40px;
						letter-spacing: 0em;
					}

					.desc {
						font-size: 15px;
						font-weight: 700;
						line-height: 20px;
						letter-spacing: 0em;
						text-align: left;
					}
					& > p {
						flex: 1;
					}
				}
			}
		}
	}

	/* .wrapper {
  transform-style: preserve-3d;
  width: 100%;
  height: 900px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(17, 127, 255, 0.3);
} */

	.wrap {
		perspective: 1px;
		height: 300px;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.parallax2 {
		transform-style: preserve-3d;
		position: relative;
		&::after {
			position: absolute;
			z-index: -1;
			transform: translateZ(-1px) scale(2);
			background-image: url('$lib/images/painted-hands.png');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			top: 0px;
			bottom: 0px;
			left: 0px;
			right: 0px;
			content: '';
			height: 600px;
		}

		/* perspective: 1px; */
		/* &:after {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -2;
    content: "";
  } */
	}

	.wrp {
		height: 300px;
		background-color: black;

		h2 {
			color: #fff;
		}
	}
</style>
