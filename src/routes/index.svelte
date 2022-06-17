<script>
	import { inview } from 'svelte-inview';

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

	import WaysIcon from '$lib/icons/ways-icon.svg';
	import WaysSpin from '$lib/icons/ways-spinning.svg';
	import WingRight from '$lib/icons/wing-right.svg';

	import paintedHands from '$lib/images/painted-hands.png';
	import Ticker from 'svelte-ticker';

	import Challenges from '$lib/icons/challenges-icon.svg';
	import ChallSpin from '$lib/icons/challenges-spinning.svg';

	import History from '$lib/icons/history-icon.svg';
	import HistorySpin from '$lib/icons/history-spinning.svg';

	import Circle from '$lib/icons/circle.svg';

	const tickerProps = {
		direction: 'left',
		duration: 90,
		delay: 0,
		loop: true,
		pausing: false,
		alternate: false,
		behavior: 'always'
	};

	const observerOpts = { rootMargin: '20px', threshold: 0.8 };

	let activeSection = 1;
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

<Header {activeSection} />
<div id="first" class="parallax" use:inview={observerOpts} on:enter={() => (activeSection = 1)}>
	<h1>Ми навчаємо вільних дітей</h1>
	<h2>Вільної, красивої та щасливої України</h2>
	<div class="ourvalues-icon">
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
	<div id="second" class="inner" use:inview={observerOpts} on:enter={() => (activeSection = 2)}>
		<Circle class="circle circle-1" />
		<Circle class="circle circle-2" />
		<Circle class="circle circle-3" />
		<Circle class="circle circle-4" />
		<Circle class="circle circle-5" />
		<div class="ways-icon-container">
			<WaysIcon />
			<WaysSpin class="ways-spin" />
			<WingRight class="right" />
			<WingRight class="right transform" />
		</div>
		<div class="ways-cont">
			<div class="item">
				<p class="name">Команда</p>
				<p class="desc">
					Ретельний добір фахівців-вчителів, які<br /> розділяють і сповідують вказані вище цінності
				</p>
			</div>
			<div class="item">
				<p class="name">Менеджмент</p>
				<p class="desc">
					Діалог між усіма ланками управління та<br />
					горизонтальні зв’язки між вчителями-учнями-батьками
				</p>
			</div>
			<div class="item">
				<p class="name">Атмосфера</p>
				<p class="desc">
					Ставлення до дитини як до особистості, повноцінного<br />
					і рівноправного учасника навчального процесу
				</p>
			</div>
			<div class="item">
				<p class="name">Творчість</p>
				<p class="desc">
					Креативність, підтримка усіх мистецьких і наукових проєктів<br />
					талановитих дітей, надання можливості повної творчої реалізації<br />
					під час навчання в школі
				</p>
			</div>
			<div class="item">
				<p class="name">Соціальний акцент</p>
				<p class="desc">
					Надання дітям та батькам можливості проявити свої здібності у сфері<br />
					самоврядування, яке покладено у фундамент концепту школи.
				</p>
			</div>
		</div>
	</div>
	<div
		id="third"
		class="painted-container"
		use:inview={observerOpts}
		on:enter={() => (activeSection = 3)}
	>
		<img src={paintedHands} alt={'Painted hands picture'} />
	</div>

	<div
		id="fourth"
		class="challenges-section"
		use:inview={observerOpts}
		on:enter={() => (activeSection = 4)}
	>
		<div class="challenges-container">
			<Ticker {...tickerProps}>Ми навчаємо вільних дітей &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Ticker>
			<Ticker {...tickerProps} direction="right">
				Ми навчаємо вільних дітей &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</Ticker>
		</div>
		<Circle class="circle circle-6" />
		<Circle class="circle circle-7" />
		<div class="icon-container">
			<Challenges />
			<ChallSpin class="challenges-spin" />
		</div>
		<div class="business">
			<p>Ми не є бізнес-проектом. Нам складно існувати без підтримки меценатів та/або держави.</p>
			<p>Орієнтація лише на прибуткову бізнес-модель обмежила б нас у досягненні наших цілей.</p>
			<p class="accent">Тому</p>
		</div>
		<div class="perelik">
			<p class="first">
				Ми не шукаємо дітей виключно з забезпечених сімей. Талант і бажання вчитися дитини для нас є
				найважливішими. Підтримуємо талановитих дітей стипендіями на навчання.
			</p>
			<p class="second">
				Наші вчителі – найкращі професіонали. Їхній справедливий гонорар – вище середнього на ринку.
			</p>
			<p class="third">
				Ми виступаємо за живий формат навчання та невеликі класи – це максимально трудоємкий і
				вартісний продукт, і саме він веде нас до нашої мети.
			</p>
		</div>
	</div>

	<div id="fifth" class="nash-licei" use:inview={observerOpts} on:enter={() => (activeSection = 5)}>
		<div>
			<p>
				Наш ліцей працює та розвивається в значній мірі за рахунок меценатства (40% бюджету). Форма
				підтримки – оплата частини видатків школи та стипендії для талановитих учнів.
			</p>
			<p>
				До російського вторгнення єдиним джерелом підтримки для школи були власні кошти засновників.
				Втрати доходу у воєнний час ця підтримка не є можливою. Іншим викликом стало те, що
				більшість сімей наших учнів також знаходяться у скрутному фінансовому стані. Багато хто
				втратив бізнес, роботу, житло, покинув свій дім. На сьогодні саме існування школи без
				зовнішньої підтримки є неможливим.
			</p>
			<a href="#">Підтримати ліцей</a>
		</div>
	</div>
	<div class="history">
		<div class="icon-container">
			<History />
			<HistorySpin class="history-spin" />
		</div>
		<div class="qh-content">
			<div class="quote-cont">
				<p class="quote">
					Ми прагнули створити таке середовище, де усі діти відчувають повагу до своєї особистості,
					підтримку їхніх талантів та розвиток навиків співпраці. Школу, де вчителі розвивають
					інтерес дітей до наук, мистецтв та до самого процесу навчання.
				</p>
				<p class="author">Наталія Кощеєва, співзосновниця ліцею “Крила”</p>
			</div>
			<div class="history-steps">
				<div class="year">
					<p class="number">2017</p>
					<p class="text">
						Заклад засновано Олександром та Наталією Кощеєвими головним чином для своїх дітей. “Ми
						відчували, що школи, в яких вони навчались (а серед них були державні, експериментальні,
						альтернативні), не давали їм того, що буде корисним для їхнього життя”, - ділиться
						Наталія Кощеєва.
					</p>
				</div>
				<div class="year">
					<p class="number">2018</p>
					<p class="text">
						Школа об’єднує навколо себе родини та викладачів, яким близькі її цінності. У школі
						навчається близько 20 учнів 1-7 класів, працює 15 вчителів.
					</p>
				</div>
				<div class="year">
					<p class="number">2019</p>
					<p class="text">
						Команда закладу поступово поповнюється неймовірним складом вчителів-професіоналів,
						об‘єднаних цінностями свободи самовираження, поваги до дитини, любові до рідної мови та
						свого народу. Крилата родина поповнюється новими сім’ями та збільшується вдвічі.
					</p>
				</div>
				<div class="year">
					<p class="number">2020</p>
					<p class="text">Заклад набуває статусу гімназії та випускає перших 9-ти класників.</p>
				</div>
				<div class="year">
					<p class="number">2021</p>
					<p class="text">
						Київський ліцей “Крила” стає продовженням гімназії та отримує державну ліцензію для
						підготовки учнів 10-11 класів.
					</p>
				</div>
				<div class="year">
					<p class="number">2022</p>
					<p class="text">
						Навіть у ці непрості часи у ліцеї здобуває освіту близько 70 учнів 1-11 класів та працює
						25 вчителів.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="test" />
</div>

<style lang="scss">
	:global() {
		@keyframes spin {
			100% {
				transform: rotate(360deg);
			}
		}
		@keyframes grow {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(1.1);
			}
		}
	}

	:global(.circle) {
		position: absolute;
		fill: var(--yellow);
		animation: grow 2s 0s ease-in-out infinite alternate;
		z-index: -1;
	}
	.parallax {
		width: 100%;
		height: 950px;
		position: relative;
		transform-style: preserve-3d;
		&::after {
			position: absolute;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			@supports not (background-image: url('$lib/images/kryla-with-effect.webp')) {
        	background-image:  linear-gradient(
					180deg,
					rgba(17, 127, 255, 0) 0%,
					rgba(17, 127, 255, 0) 50%,
					rgba(17, 127, 255, 0.7) 70%,
					rgba(17, 127, 255, 0.95) 90%,
					rgba(17, 127, 255, 1) 95%
				),
				url('$lib/images/kryla-with-effect-sm.png');
			}
			@supports (background-image: url('$lib/images/kryla-with-effect.webp')) {
				background-image: linear-gradient(
					180deg,
					rgba(17, 127, 255, 0) 0%,
					rgba(17, 127, 255, 0) 50%,
					rgba(17, 127, 255, 0.7) 70%,
					rgba(17, 127, 255, 0.95) 90%,
					rgba(17, 127, 255, 1) 95%
				),
				url('$lib/images/kryla-with-effect.webp');
			}
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
			color: var(--white);
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
			color: var(--white);
		}
		.ourvalues-icon {
			position: absolute;
			z-index: -1;
			left: 50%;
			top: 270px;
			transform: translateZ(-1px) scale(2) translateX(-21%);
		}
		:global(.cinnnosti) {
			position: absolute;
			top: 2px;
			left: 0;
			animation: spin 90s linear infinite;
		}
	}

	.values {
		max-width: 1240px;
		margin: 118px auto 0;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		color: var(--white);

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

	.outer {
		width: 100%;
		background-color: var(--blue);
		perspective: 2px;
		.inner {
			position: relative;

			:global(.circle-1) {
				width: 124px;
				height: 124px;
				top: 110px;
				left: 118px;
				animation-delay: 0.3s;
			}
			:global(.circle-2) {
				width: 32px;
				height: 32px;
				top: 224px;
				left: 300px;
				fill: none;
				animation-delay: 0.6s;
			}
			:global(.circle-3) {
				width: 54px;
				height: 54px;
				bottom: 120px;
				left: 240px;
				animation-delay: 0.9s;
			}
			:global(.circle-4) {
				width: 107px;
				height: 107px;
				top: 60px;
				right: 140px;
				animation-delay: 1.2s;
			}
			:global(.circle-5) {
				width: 25px;
				height: 25px;
				top: 224px;
				right: 108px;
				animation-delay: 1.5s;
			}
			.ways-icon-container {
				position: relative;
				width: 240px;
				height: 238px;
				left: 50%;
				top: -130px;
				transform: translateX(-50%);

				:global(.right) {
					position: absolute;
					top: -110px;
					left: 10px;
					z-index: -2;
				}

				:global(.right.transform) {
					position: absolute;
					transform: matrix(-1, 0, 0, 1, 0, 0);
					top: -110px;
					left: -204px;
					z-index: -2;
				}

				:global(.ways-spin) {
					position: absolute;
					top: 0;
					left: 0;
					z-index: -1;
					animation: spin 90s linear infinite;
				}
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
					color: var(--white);

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
		.painted-container {
			overflow: hidden;
			img {
				object-fit: cover;
				width: 100%;
				position: relative;
				z-index: -1;
				top: 0;
				left: 0;
			}
		}

		.challenges-section {
			position: relative;
			background-color: var(--blue);
			padding-bottom: 74px;
			.challenges-container {
				margin-top: 70px;
				font-size: 40px;
				font-weight: 800;
				line-height: 75px;
				letter-spacing: 0em;
				color: var(--dark-blue);
				opacity: 0.3;
				text-transform: uppercase;
			}
			:global(.circle-6) {
				width: 32px;
				height: 32px;
				top: 55px;
				left: 208px;
				z-index: unset;
			}
			:global(.circle-7) {
				width: 25px;
				height: 25px;
				bottom: 305px;
				right: 133px;
				animation-delay: 1s;
				fill: none;
				z-index: unset;
			}
			.icon-container {
				width: 290px;
				height: 290px;
				position: absolute;
				top: -75px;
				left: 50%;
				transform: translateX(-50%);
				z-index: 2;
				:global(.challenges-spin) {
					position: absolute;
					top: 26px;
					left: 26px;
					animation: spin 90s linear infinite;
				}
			}

			.business {
				text-align: center;
				margin: 60px auto;
				p {
					font-weight: 700;
					font-size: 15px;
					line-height: 20px;
					color: var(--white);
					&:first-child {
						margin-bottom: 10px;
					}
				}
				.accent {
					margin-top: 19px;
					font-size: 30px;
					font-weight: 600;
					color: var(--yellow);
				}
			}
			.perelik {
				margin: 0 auto 0 5.3%;
				display: flex;
				justify-content: center;
				p {
					position: relative;
					z-index: 1;
					width: 244px;
					color: var(--white);
					font-family: Nunito;
					font-size: 15px;
					font-weight: 700;
					line-height: 20px;
					letter-spacing: 0em;
					text-align: left;
					&:not(:last-child) {
						margin-right: 144px;
					}
				}
				.first::after,
				.second::after,
				.third::after {
					position: absolute;
					z-index: -1;
					font-size: 250px;
					font-weight: 900;
					line-height: 40px;
					letter-spacing: 0em;
					text-align: center;
					color: var(--dark-blue);
				}
				.first::after {
					content: '1';
					top: 6px;
					left: -98px;
				}
				.second::after {
					content: '2';
					top: 6px;
					left: -98px;
				}
				.third::after {
					content: '3';
					top: 6px;
					left: -98px;
				}
			}
		}

		.nash-licei {
			background-color: var(--white);
			height: 443px;
			background-image: url('$lib/images/painted-hands2.png');
			background-repeat: no-repeat;
			background-position: center left;
			background-size: contain;
			padding: 67px 0 51px;

			div {
				width: 473px;
				margin: 0 133px 0 auto;
				text-align: center;
				p {
					text-align: left;
					color: var(--blue);
					font-size: 15px;
					font-weight: 700;
					line-height: 20px;
					letter-spacing: 0em;
					text-align: left;
					margin-bottom: 24px;
					&:last-child {
						margin-bottom: 48px;
					}
				}

				a {
					position: relative;
					padding: 12px 37px;
					font-size: 15px;
					font-weight: 700;
					line-height: 55px;
					letter-spacing: 0em;
					text-align: center;
					text-transform: uppercase;
					text-decoration: none;
					color: var(--white);
					background: linear-gradient(90deg, #04e9a4, #117fff, #11ff37, #117fff, #04e9a4);
					background-size: 500%;
					border-radius: 10px;

					&::after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						z-index: -1;
						background: linear-gradient(90deg, #04e9a4, #117fff, #11ff37, #117fff, #04e9a4);
						background-size: 500%;
						border-radius: 10px;
						opacity: 0;
						transition: 0.5s;
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
						&::after {
							filter: blur(25px);
							opacity: 0.8;
							animation: animate 10s linear infinite;
						}
					}
				}
			}
		}
		.history {
			background-color: var(--blue);
			position: relative;
			&::before {
				position: absolute;
				top: 0;
				left: 0;
				width: 668px;
				height: 648px;
				content: '';
				background-image: url('$lib/images/history-backdrop.png');
				background-repeat: no-repeat;
			}

			.icon-container {
				position: relative;
				width: 394px;
				height: 324px;
				left: 50%;
				transform: translateX(-50%);
				:global(.history-spin) {
					position: absolute;
					top: 6px;
					left: 76px;
					animation: spin 90s linear infinite;
				}
			}

			.qh-content {
				margin-top: -80px;
				display: flex;
				justify-content: space-around;
				align-items: flex-start;
				position: relative;

				.quote-cont {
					position: sticky;
					top: 150px;
					width: 458px;
					color: var(--white);
					margin-bottom: 35px;
					&::before {
						position: absolute;
						content: '';
						width: 475px;
						height: 401px;
						background-image: url('$lib/icons/quote-marks.svg');
						background-repeat: no-repeat;
						background-size: cover;
						top: -30px;
						left: -40px;
						z-index: -1;
					}
					.quote {
						font-size: 30px;
						font-weight: 600;
						line-height: 40px;
						letter-spacing: 0em;
						text-align: left;
						margin-bottom: 29px;
					}
					.author {
						font-size: 15px;
						font-style: italic;
						font-weight: 600;
						line-height: 40px;
						letter-spacing: 0em;
						text-align: left;
					}
				}
				.history-steps {
					width: 458px;
					.year {
						margin-bottom: 35px;
						.number {
							position: relative;
							font-size: 30px;
							font-weight: 600;
							line-height: 40px;
							letter-spacing: 0em;
							text-align: left;
							color: var(--yellow);
							margin-bottom: 20px;
							&::before {
								content: '';
								position: absolute;
								top: 4px;
								left: -55px;
								width: 32px;
								height: 32px;
								background-repeat: no-repeat;
								background-size: contain;
								background-image: url('$lib/icons/circle-year.svg');
							}
						}

						.text {
							color: var(--white);
							font-size: 15px;
							font-weight: 700;
							line-height: 20px;
							letter-spacing: 0em;
							text-align: left;
						}
					}
				}
			}
		}
		.test {
			height: 2000px;
			background-color: var(--yellow);
		}
	}
</style>
