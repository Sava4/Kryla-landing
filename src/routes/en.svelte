<script>
	import { inview } from 'svelte-inview';

	import Header from '$lib/components/HeaderEN.svelte';

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

	import HowweTeach from '$lib/icons/howteach-icon.svg';
	import HowTeachSpin from '$lib/icons/howteach-spin.svg';

	import Icon1 from '$lib/icons/icon1.svg';
	import Icon2 from '$lib/icons/icon2.svg';
	import Icon3 from '$lib/icons/icon3.svg';
	import Icon4 from '$lib/icons/icon4.svg';
	import Icon5 from '$lib/icons/icon5.svg';
	import Icon6 from '$lib/icons/icon6.svg';
	import Icon7 from '$lib/icons/icon7.svg';
	import Icon8 from '$lib/icons/icon8.svg';

	import Photogallery from '$lib/icons/photogallery-icon.svg';
	import PhotogallerySpin from '$lib/icons/photogallery-spin.svg';

	import photo1 from '$lib/images/Photo1.png';
	import photo2 from '$lib/images/Photo2.png';
	import photo3 from '$lib/images/Photo3.png';
	import photo4 from '$lib/images/Photo4.png';
	import photo5 from '$lib/images/Photo5.png';
	import photo6 from '$lib/images/Photo6.png';
	import photo7 from '$lib/images/Photo7.png';
	import photo8 from '$lib/images/Photo8.png';

	import { slidy } from '@slidy/core';
	import { translate } from '@slidy/animation';
	import { linear } from '@slidy/easing';

	import QR from '$lib/images/qr.png';

	import Rekvizity from '$lib/icons/rekvizit-icon.svg';
	import { TabControl, TabControlItem } from 'renderless-svelte';
	import { slide } from 'svelte/transition';

	import videoThumb from '$lib/images/video-thumb.png';
	import dji from '$lib/video/DJI.mp4';

	import FB from '$lib/icons/fb.svg';
	import Instagram from '$lib/icons/inst.svg';
	import Youtube from '$lib/icons/yout.svg';

	import Circle from '$lib/icons/circle.svg';

	let play = false;
	let reqOpen = false;

	const options = {
		index: 0,
		clamp: 0,
		indent: 1,
		sensity: 5,
		gravity: 1.2,
		duration: 375,
		animation: translate,
		easing: linear,
		snap: 'center',
		axis: 'x',
		loop: false
	};

	const tickerProps = {
		direction: 'left',
		duration: 90,
		delay: 0,
		loop: true,
		pausing: false,
		alternate: false,
		behavior: 'always'
	};

	const observerOpts = { rootMargin: '20px', threshold: 0.6 };

	let activeSection = 1;

	function playVideo(e) {
		play = true;
		e.target.play();
	}
</script>

<Header {activeSection} />
<div id="kryla" class="parallax" use:inview={observerOpts} on:enter={() => (activeSection = 1)}>
	<h1>We teach free children</h1>
	<h2>of Free, beautiful and happy Ukraine</h2>
	<div class="ourvalues-icon">
		<Diamond width="240" height="238" />
		<Values class="cinnnosti" width="239" height="237" />
	</div>
	<div class="values">
		<div class="val">
			<img src={puzzle} alt="Puzzle head icon" />
			<p>Honesty and humanity</p>
		</div>
		<div class="val">
			<img src={idea} alt="Light bulb icon" />
			<p>Consciousness and tendency to develop self-reflection</p>
		</div>
		<div class="val">
			<img src={umbrella} alt="Umbrella icon" />
			<p>Responsibility for one's self, family, community, state, world</p>
		</div>
		<div class="val">
			<img src={heart} alt="Heart icon" />
			<p>Patriotism as love for one's people</p>
		</div>
		<div class="val">
			<img src={cloud} alt="Cloud icon" />
			<p>Natural interest in learning, willingness to learn and self-improvement throughout life</p>
		</div>
		<div class="val">
			<img src={dialogue} alt="Chat dialogue icon" />
			<p>The ability to generate ideas through free dialogue</p>
		</div>
	</div>
</div>

<div class="outer">
	<div id="path" class="inner" use:inview={observerOpts} on:enter={() => (activeSection = 2)}>
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
				<p class="name">Team</p>
				<p class="desc">
					Thorough selection of teachers<br />
					who share and profess the above values
				</p>
			</div>
			<div class="item">
				<p class="name">Management</p>
				<p class="desc">
					Dialogue between all levels of administration<br />
					and horizontal relationships between teachers, students, and parents
				</p>
			</div>
			<div class="item">
				<p class="name">Atmosphere</p>
				<p class="desc">
					Attitude to a child as a person,<br />
					a full-fledged and equal participant of the learning process
				</p>
			</div>
			<div class="item">
				<p class="name">Creativity</p>
				<p class="desc">
					Artistism, support of all artistic and scientific projects<br />
					of talented children, providing opportunities for full creative realization<br />
					while studying at school
				</p>
			</div>
			<div class="item">
				<p class="name">Social focus</p>
				<p class="desc">
					Giving children and parents the opportunity to show their abilities in the field of
					self-government, which is the foundation of the school concept
				</p>
			</div>
		</div>
	</div>
	<div class="painted-container">
		<img src={paintedHands} alt={'Painted hands picture'} />
	</div>

	<div
		id="challenges"
		use:inview={observerOpts}
		on:enter={() => (activeSection = 3)}
		class="challenges-section"
	>
		<div class="challenges-container">
			<Ticker {...tickerProps}>We teach free children &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Ticker>
			<Ticker {...tickerProps} direction="right">
				We teach free children &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</Ticker>
		</div>
		<Circle class="circle circle-6" />
		<Circle class="circle circle-7" />
		<div class="icon-container">
			<Challenges />
			<ChallSpin class="challenges-spin" />
		</div>
		<div class="business">
			<p>Focusing only on a profitable business model would limit us in achieving our goals.</p>
			<p>
				We are not a business project. It is difficult for us to exist without the support of
				patrons and/or the state.
			</p>
			<p class="accent">Thus</p>
		</div>
		<div class="perelik">
			<p class="first">
				We do not look for children exclusively from rich families. A child's talent and desire to
				learn are paramount to us. We support talented children with scholarships.
			</p>
			<p class="second">
				Our teachers are the best professionals. Their fair fee is above the market average.
			</p>
			<p class="third">
				We stand for a lively format of lessons and small classes - this is the most time-consuming
				and expensive product, and that is the most important thing contributing to achievement of
				our goals.
			</p>
		</div>
	</div>

	<div class="nash-licei">
		<div>
			<p>
				Our lyceum works and develops largely at the expense of patronage (40% of the budget). The
				form of support is payment of part of the school expenses and scholarships for talented
				students.
			</p>
			<p>
				Prior to the full-scale Russian invasion, the only source of support for the school was the
				Koscheev family. But due to the loss of income because the war, this support is not
				possible. Another challenge is that most of our students' families are also in dire
				financial straits. Many lost their businesses, jobs, and homes. Today, the very existence of
				the school without external support is impossible.
			</p>
			<a href="#support">Support our lyceum</a>
		</div>
	</div>
	<div id="history" use:inview={observerOpts} on:enter={() => (activeSection = 4)} class="history">
		<div class="icon-container">
			<History />
			<HistorySpin class="history-spin" />
		</div>
		<div class="qh-content">
			<div class="quote-cont">
				<p class="quote">
					We sought to create an environment where all children respect their personalities, support
					their talents and develop collaborative skills. A school where teachers develop children's
					interest in science, the arts and the learning process itself.
				</p>
				<p class="author">Natalia Koshcheeva, co-founder of the Kryla Lyceum</p>
			</div>
			<div class="history-steps">
				<div class="year">
					<p class="number">2017</p>
					<p class="text">
						The institution was founded by Alexander and Natalia Koshcheev mainly for their
						children. "We felt that the schools in which they studied (and among them were public,
						experimental, alternative ones), did not give them what would be useful for their lives"
						- said Natalia Koshcheeva.
					</p>
				</div>
				<div class="year">
					<p class="number">2018</p>
					<p class="text">
						The school brings together families and teachers who share its values. The school has
						about 20 students in grades 1-7, 15 teachers.
					</p>
				</div>
				<div class="year">
					<p class="number">2019</p>
					<p class="text">
						The team of the institution is gradually replenished with an incredible number of
						professional teachers, united by the values ​​of freedom of expression, respect for the
						child, love for the native language and their people. The winged family is replenished
						with new families and doubles.
					</p>
				</div>
				<div class="year">
					<p class="number">2020</p>
					<p class="text">
						The institution acquires the status of a gymnasium and graduates the first 9 students.
					</p>
				</div>
				<div class="year">
					<p class="number">2021</p>
					<p class="text">
						Kyiv Lyceum "Wings" becomes an extension of the gymnasium and receives a state license
						to teach students in grades 10-11.
					</p>
				</div>
				<div class="year">
					<p class="number">2022</p>
					<p class="text">
						Even in these difficult times, the lyceum educates about 70 students in grades 1-11 and
						has 25 teachers.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div id="owl" use:inview={observerOpts} on:enter={() => (activeSection = 5)} class="how-we-teach">
		<div class="icon-container">
			<HowweTeach />
			<HowTeachSpin class="owl-spin" />
		</div>
		<div class="howteachpar">
			<p>
				We strive to ignite the desire to create in every child: to write essays, poems and novels,
				draw pictures, play plays, sing and play the piano, discuss complex social and political
				topics and more.
			</p>
			<p>We establish and maintain friendly relations and trust between students and teachers.</p>
			<p>
				We cultivate a certain "fashion" for learning, for the acquisition of universal knowledge,
				for the constant expansion of the interests of the child.
			</p>
		</div>
		<div class="card-container">
			<div class="card">
				<Icon1 />
				<p>From the 1st grade we have subject teachers who give deep knowledge</p>
			</div>
			<div class="card">
				<Icon2 />
				<p>We constantly emphasize the importance of independence and develop it</p>
			</div>
			<div class="card">
				<Icon3 />
				<p>
					The program of the Ministry of Education is supplemented with topics of interest to modern
					children, we take into account global trends in education
				</p>
			</div>
			<div class="card">
				<Icon4 />
				<p class="pl20">
					We use modern materials, applications and programs (Quizlet, Kahoot, Wordwall, etc.)
				</p>
			</div>
			<div class="card">
				<Icon5 />
				<p>
					We introduce courses for the development of children's potential, in particular a course
					in rhetoric, where students learn to analyze and write reviews of works by world authors
					and even write their own books
				</p>
			</div>
			<div class="card">
				<Icon6 />
				<p class="pl20">
					We study foreign languages ​​in depth. Our students reach higher levels than in regular
					schools
				</p>
			</div>
			<div class="card">
				<Icon7 />
				<p class="pl17">
					Communicate with students outside of lessons on topics of interest to them, in particular,
					and discuss possible areas of the profession
				</p>
			</div>
			<div class="card">
				<Icon8 />
				<p>We emphasize the importance of acquiring new knowledge and skills</p>
			</div>
		</div>
	</div>
	<div
		id="photo"
		use:inview={observerOpts}
		on:enter={() => (activeSection = 6)}
		class="photogallery"
	>
		<div class="icon-container">
			<Photogallery />
			<PhotogallerySpin class="photo-spin" />
		</div>
		<div class="swipe-gallery">
			<div class="mblock" />
			<ul use:slidy={options}>
				<li>
					<img
						src={photo1}
						width="277"
						height="277"
						alt={'photo of school activities whiteboard and heart'}
					/>
				</li>
				<li>
					<img
						src={photo2}
						width="277"
						height="277"
						alt={'photo of school activities reading at school'}
					/>
				</li>
				<li>
					<img
						src={photo3}
						width="277"
						height="277"
						alt={'photo of school activities reading with interest'}
					/>
				</li>
				<li>
					<img src={photo4} width="277" height="277" alt={'group photo at school'} />
				</li>
				<li>
					<img
						src={photo5}
						width="277"
						height="277"
						alt={'photo of school activities having fun'}
					/>
				</li>
				<li>
					<img
						src={photo6}
						width="277"
						height="277"
						alt={'photo of school activities having fun at the masquerade'}
					/>
				</li>
				<li>
					<img
						src={photo7}
						width="277"
						height="277"
						alt={'photo of school activities funny hats'}
					/>
				</li>
				<li>
					<img src={photo8} width="277" height="277" alt={'photo of school classroom'} />
				</li>
			</ul>
		</div>
	</div>
	<div id="support" class="pidtrymaty">
		<p class="mobile-heading">Support "Kryla"</p>
		<div class="qrcode">
			<a href="https://send.monobank.ua/7wmXTSuLwy">
				<img src={QR} alt="Qrcode for payment" />
			</a>
		</div>
		<div class="payment-block">
			<p class="heading">Support "Kryla"</p>
			<p class="instructions">
				Scan the QR code or click on the button and support the Kryla Lyceum with any amount of
				money
			</p>
			<div class="button-block" class:reqOpen>
				<button class:reqOpen class="rekvizity" on:click={() => (reqOpen = !reqOpen)}>
					<Rekvizity />
					<span>Details</span>
				</button>
				<a href="https://send.monobank.ua/7wmXTSuLwy" class="pidtrymaty-btn">Support the lyceum</a>
			</div>
			{#if reqOpen}
				<div class="tabs-container" transition:slide>
					<TabControl>
						<div class="tabs" slot="tabs" let:tabs>
							{#each tabs as { active, disabled, payload, select }}
								<button class:active on:click={select} {disabled}>{payload}</button>
							{/each}
						</div>
						<div class="tab">
							<TabControlItem id="UA" payload="Local ukrainian payments" active>
								<div class="physichnyh">
									<p><strong>🙋 For persons</strong></p>
									<p>✅ Topup Hryvnia card (UAH)</p>
									<p>Card: 5375414106537136</p>
									<p>RECEIVER: Koshcheeva N.</p>
									<p>IBAN: UA573220010000026202301839029</p>
									<p>Receiver Bank: Universal Bank JSC</p>
									<p>RECEIVER EDRPOU: 2786915261</p>
								</div>
								<div class="yurydychnyh">
									<p><strong>💼 For companies</strong></p>
									<p>Company: Private school 'Kryla' / Wings</p>
									<p>Bank correspondent: JSC CB PRIVATBANK</p>
									<p>SWIFT CODE: PBANUA2X</p>
									<p>Company address: UA 01001 Kyiv, Zvirynetska St, 15/1</p>
									<p>
										Details of payment: «Charity donation according to the letter № 22/06/06-1 dated
										06.06.22»
									</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>✅ UAH Transfer</strong></p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>UA083052990000026002016205685</strong></p>
								</div>
							</TabControlItem>
							<TabControlItem id="Int" payload="International payments">
								<div class="physichnyh">
									<p><strong>🙋 For persons</strong></p>
									<p>SWIFT-Transfer</p>
									<p>BENEFICIARY: KOSHCHEIEVA NATALIIA</p>
									<p>01001, Ukraine, c. Kyiv, st. Moskovska, build. 29A, fl. 23</p>
									<p>Beneficiary bank: JSC UNIVERSAL BANK</p>
									<p>SWIFT CODE: UNJSUAUKXXX</p>
									<p>City: KYIV, UKRAINE</p>
									<p>Details of payment: «Private transfer»</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;✅ Dollar Transfer (USD)</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;IBAN: UA243220010000026204313675495</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;ACCOUNT: 26204313675495</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;✅ Zloty Transfer (PLN)</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;IBAN: UA573220010000026202301839029</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;ACCOUNT: 26202301839029</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;✅ Pound Transfer (GBP)</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;IBAN: UA573220010000026202301839029</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;ACCOUNT: 26202301839029</p>
								</div>
								<div class="yurydychnyh">
									<p><strong>💼 For companies</strong></p>
									<p>Company: Private school 'Kryla' / Wings</p>
									<p>Bank name: JSC CB "PRIVATBANK",</p>
									<p>1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE</p>
									<p>SWIFT CODE: PBANUA2X</p>
									<p>Company address: UA 01001 Kyiv, Zvirynetska St, 15/1</p>
									<p>
										Details of payment: «Charity donation according to the letter № 22/06/06-1 dated
										06.06.22»
									</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>✅ Euro Transfer (EUR)</strong></p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>IBAN: UA06305299000002600204622857</strong></p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Банк кореспондент: Commerzbank AG, Frankfurt am Main,
										Germany
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Account at bank correspondent: 400886700401
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;SWIFT Code of bank correspondent: COBADEFF
									</p>
									<p class="small">&nbsp;&nbsp;&nbsp;&nbsp;or</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Bank correspondent: J.P.MORGAN AG, FRANKFURT AM MAIN,
										GERMANY
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Account at bank correspondent: 6231605145
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;SWIFT Code of bank correspondent: CHASDEFX
									</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>✅ Dollar transfer (USD)</strong></p>
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;<strong>IBAN: UA933052990000026002026234828</strong>
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Bank correspondent: JP Morgan Chase Bank, New York ,USA
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Account at bank correspondent: 001-1-000080
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;SWIFT Code of bank correspondent: CHASUS33
									</p>
									<p class="small">&nbsp;&nbsp;&nbsp;&nbsp;or</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Bank correspondent: The Bank of New York Mellon, New
										York, USA
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Account at bank correspondent: 890-0085-754
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;SWIFT Code of bank correspondent: IRVT US 3N
									</p>
								</div>
							</TabControlItem>
						</div>
					</TabControl>
				</div>
			{/if}
			<a href="https://send.monobank.ua/7wmXTSuLwy" class="pidtrymaty-mobile-btn"
				>Support the lyceum</a
			>
		</div>
	</div>
	<div class="footer">
		<div class="contacts">
			<video
				src={dji}
				type="video/mp4"
				poster={videoThumb}
				width="277"
				height="277"
				preload="meta"
				controls={play}
				on:click|once={playVideo}
			>
				<track kind="captions" />
				<p>
					Your browser doesn't support HTML5 video. Here is a <a href={dji}>link to the video</a> instead.
				</p>
			</video>
			<div class="telephone">
				<a href="tel:+380663307618">+380 66 330 76 18</a>
			</div>
			<div class="email">
				<a href="mailto:kryla.school@gmail.com">kryla.school@gmail.com</a>
			</div>
			<div class="address">
				<a href="https://goo.gl/maps/yuymLTb1n7j1k4Gq8">
					Zvirynetska Street, 15/1,<br />
					Pecherskyi district, Kyiv,<br />
					Ukraine 01014
				</a>
			</div>
		</div>
		<div class="socials">
			<div class="icon-block">
				<a href="https://www.facebook.com/kryla.school.pechersk/">
					<FB class="social-icon" />
				</a>
				<a href="https://www.instagram.com/kryla.school/">
					<Instagram class="social-icon" />
				</a>
				<a href="https://www.youtube.com/channel/UCKNGBd6szdBz93KyvcXMrjQ/videos">
					<Youtube class="social-icon" />
				</a>
			</div>
		</div>
	</div>
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
		width: 100vw;
		height: 950px;
		position: relative;
		transform-style: preserve-3d;
		@media screen and (max-width: $mobile-breakpoint) {
			height: 1200px;
		}
		&::after {
			position: absolute;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			@supports not (background-image: url('$lib/images/kryla-with-effect.webp')) {
				background-image: linear-gradient(
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
			@media screen and (max-width: $mobile-breakpoint) {
				margin-top: 65px;
				font-size: 35px;
				font-weight: 800;
				line-height: 40px;
			}
		}
		h2 {
			font-size: 30px;
			font-weight: 600;
			line-height: 55px;
			letter-spacing: 0em;
			text-align: center;
			color: var(--white);
			@media screen and (max-width: $mobile-breakpoint) {
				font-size: 17px;
				font-weight: 600;
				line-height: 25px;
			}
		}
		.ourvalues-icon {
			position: absolute;
			z-index: -1;
			left: 50%;
			top: 270px;
			transform: translateZ(-1px) scale(2) translateX(-21%);
			@media screen and (max-width: $mobile-breakpoint) {
				top: 140px;
			}
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
		@media screen and (max-width: $mobile-breakpoint) {
			flex-wrap: wrap;
			margin-top: 220px;

			.val {
				flex: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;

				p {
					margin: 0;
				}
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
				@media screen and (max-width: $mobile-breakpoint) {
					display: none;
				}
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
				@media screen and (max-width: $mobile-breakpoint) {
					display: none;
				}
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

				@media screen and (max-width: $mobile-breakpoint) {
					flex-direction: row;
					flex-wrap: wrap;
					align-items: flex-start;
				}

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

					@media screen and (max-width: $mobile-breakpoint) {
						flex: 50%;
						flex-direction: column;
						.name {
							text-align: center;
							margin-right: 0;
							font-size: 20px;
							margin-bottom: 14px;
						}
						.desc {
							line-height: 17px;
							text-align: center;
							max-width: 200px;
						}
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
			margin-top: -20px;
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
				@media screen and (max-width: $mobile-breakpoint) {
					padding: 0 5% 0;
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
				@media screen and (max-width: $mobile-breakpoint) {
					flex-direction: column;
					align-items: center;
					margin: 16px 0 0 0;
					padding: 0 5%;
					p {
						width: 100%;
						margin-right: 0px !important;
					}
					p + p {
						margin-top: 60px;
					}
					.first::after,
					.second::after,
					.third::after {
						top: -12px;
						left: 41%;
						font-size: 120px;
						color: var(--light-blue);
					}
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
			}
			@media screen and (max-width: $mobile-breakpoint) {
				height: 100%;
				background-position: bottom center;
				padding: 29px 5% 50%;
				div {
					width: 100%;
					p {
						line-height: 17px;
						text-align: center;
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

								@media screen and (max-width: $mobile-breakpoint) {
									width: 20px;
									height: 20px;
									top: 10px;
									left: -23px;
									transform: translateX(-50%);
								}
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

					@media screen and (max-width: $mobile-breakpoint) {
						width: 100%;
						padding: 0 5% 0;
						.year {
							width: 80%;
							margin: 0 auto 35px;
						}
					}
				}

				@media screen and (max-width: $mobile-breakpoint) {
					flex-direction: column;
					.quote-cont {
						width: 100%;
						padding: 0 5% 0;
						position: relative;
						top: 0;
						z-index: 1;

						&::before {
							width: 90%;
							height: 100%;
							background-position: center center;
							background-size: contain;
							top: -6px;
							left: 0px;
						}

						.quote {
							max-width: 80%;
							font-size: 20px;
							line-height: 22px;
							margin: 0 auto 29px;
						}
						.author {
							max-width: 80%;
							margin: 0 auto;
							font-size: 12px;
							line-height: 14px;
						}
					}
				}
			}
		}
		.how-we-teach {
			margin-top: -70px;
			.icon-container {
				position: relative;
				width: 384px;
				height: 389px;
				left: 50%;
				transform: translateX(-50%);
				:global(.owl-spin) {
					position: absolute;
					top: 82px;
					left: 77px;
					animation: spin 90s linear infinite;
				}
			}
			.howteachpar {
				position: relative;
				max-width: 818px;
				margin: 0 auto;
				font-style: normal;
				font-weight: 700;
				font-size: 15px;
				line-height: 20px;
				/* or 133% */
				text-align: center;
				color: var(--white);
				z-index: 1;
				p {
					margin-bottom: 15px;
				}
				&::after {
					position: absolute;
					top: 50px;
					left: 205px;
					content: 'МИ';
					font-size: 250px;
					font-weight: 900;
					line-height: 40px;
					letter-spacing: 0em;
					text-align: center;
					color: var(--dark-blue);
					z-index: -1;
				}
				@media screen and (max-width: $mobile-breakpoint) {
					max-width: 100%;
					padding: 0 5% 0;
					line-height: 17px;

					&::after {
						font-size: 150px;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}

					p {
						width: 80%;
						margin: 0 auto 20px;
					}
				}
			}
			.card-container {
				margin: 64px auto 0;
				max-width: 1128px;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				align-items: flex-start;
				gap: 84px 8px;
				font-style: normal;
				font-weight: 700;
				font-size: 15px;
				line-height: 20px;
				text-align: center;
				color: var(--white);
				.card {
					width: 231px;
					p {
						margin-top: 30px;
					}
					.pl20 {
						margin-top: 40px;
					}
					.pl17 {
						margin-top: 17px;
					}
				}

				@media screen and (max-width: $mobile-breakpoint) {
					width: 100%;
					padding: 0 5% 0;
					justify-content: center;
					gap: 20px 12px;
				}
			}
		}
		.photogallery {
			padding-bottom: 78px;
			.icon-container {
				margin-top: -64px;
				position: relative;
				width: 384px;
				height: 389px;
				left: 50%;
				transform: translateX(-50%);
				:global(.photo-spin) {
					position: absolute;
					top: 82px;
					left: 77px;
					animation: spin 90s linear infinite;
				}
			}
			.swipe-gallery {
				.mblock {
					width: 104px;
				}
				ul {
					list-style: none;
					margin: 0;
					padding: 0;
					display: flex;
					flex-flow: var(--flow) nowrap;
					align-items: center;
					justify-content: center;
					gap: 39px;
					width: 100%;
					height: 100%;
				}
				ul li {
					flex: 1 0 auto;
					width: auto;
					max-width: 100%;
					height: 100%;
					position: relative;
				}
				ul li img {
					width: 100%;
					width: auto;
					height: 100%;
					display: flex;
					object-fit: cover;
					max-width: 100%;
				}
			}
		}

		.pidtrymaty {
			position: relative;
			width: 100%;
			min-height: 399px;
			background-color: var(--yellow);
			background-image: url('$lib/images/bg-pidtrymaty.svg');
			background-size: 100%;
			background-repeat: no-repeat;
			padding: 51px 0 43px;
			display: flex;
			justify-content: center;
			&::before {
				content: '';
				width: 139px;
				height: 32px;
				position: absolute;
				top: 200px;
				left: 0;
				background-image: url('$lib/images/arrow.svg');
				background-size: cover;
			}
			&::after {
				content: '';
				width: 139px;
				height: 32px;
				position: absolute;
				top: 200px;
				right: 0;
				transform: rotate(180deg);
				background-image: url('$lib/images/arrow.svg');
				background-size: cover;
			}

			@media screen and (max-width: $mobile-breakpoint) {
				flex-direction: column;
				align-items: center;
				&::before,
				&::after {
					display: none;
				}
			}

			.mobile-heading {
				display: none;
				@media screen and (max-width: $mobile-breakpoint) {
					display: block;
					font-style: normal;
					font-weight: 800;
					font-size: 30px;
					line-height: 35px;
					text-transform: uppercase;
					text-align: center;
					color: var(--text-blue);
				}
			}

			.qrcode {
				width: 305px;
				height: 305px;
				border: 5px solid var(--white);
				border-radius: 20px;
				margin-right: 124px;
				img {
					object-fit: cover;
					object-fit: cover;
					width: 100%;
					height: 100%;
				}
				@media screen and (max-width: $mobile-breakpoint) {
					margin: 40px 0;
				}
			}
			.payment-block {
				width: 559px;
				text-align: left;
				color: var(--blue);

				@media screen and (max-width: $mobile-breakpoint) {
					width: 100%;
					padding: 0 5% 0;
				}

				.tabs-container {
					margin-top: 24px;
					height: 100%;
					/* height: 100%; */
					/* height: 565px; */
					/* height: 1297px; */
					.tabs {
						display: flex;
						justify-content: space-between;
						margin-bottom: 16px;
						button {
							width: 50%;
							height: 45px;
							padding: 6px 36px;
							background-color: var(--yellow);
							color: var(--blue);
							font-style: normal;
							font-weight: 700;
							font-size: 15px;
							cursor: pointer;
							border-radius: 0 10px 10px 0;
							border: 2px solid var(--blue);

							@media screen and (max-width: 549px) {
								height: auto;
								padding: 6px 16px;
							}

							&:first-child {
								border-radius: 10px 0 0 10px;
							}
							&.active {
								color: var(--white);
								background-color: var(--blue);
							}
							&:hover {
								background-color: var(--dark-blue);
								color: var(--white);
								border-color: var(--dark-blue);
							}
						}
					}
					.tab {
						div {
							padding: 4px;
						}
						.yurydychnyh {
							border-radius: 20px;
							background-color: var(--blue);
							color: var(--white);
						}
						p + p {
							margin-top: 8px;
						}
						p.small + p.small {
							margin-top: 4px;
						}
						.small {
							font-style: normal;
							font-weight: 700;
							font-size: 12px;
						}
					}
				}
				.heading {
					font-style: normal;
					font-weight: 800;
					font-size: 40px;
					line-height: 75px;
					text-transform: uppercase;
					@media screen and (max-width: $mobile-breakpoint) {
						display: none;
					}
				}
				.instructions {
					font-style: normal;
					font-weight: 600;
					font-size: 30px;
					line-height: 40px;
					margin-bottom: 24px;

					@media screen and (max-width: $mobile-breakpoint) {
						font-size: 20px;
						font-weight: 700;
						line-height: 25px;
						text-align: center;
						color: var(--text-blue);
					}
				}
				.button-block {
					display: flex;
					justify-content: space-between;
					align-items: center;
					position: relative;
					@media screen and (max-width: $mobile-breakpoint) {
						flex-direction: column;
					}
					&::after {
						content: '';
						position: absolute;
						width: 18px;
						height: 18px;
						top: 24%;
						right: 48%;
						border-radius: 40px;
						background-color: var(--white);
						@media screen and (max-width: $mobile-breakpoint) {
							top: unset;
							bottom: -42px;
						}
					}
					&.reqOpen {
						&::after {
							@media screen and (max-width: $mobile-breakpoint) {
								display: none;
							}
						}
					}
					.rekvizity {
						min-width: 223px;
						height: 45px;
						padding: 6px 49px 5px 38px;
						border-radius: 10px;
						background-color: var(--blue);
						border: 0;
						color: var(--white);
						font-style: normal;
						font-weight: 700;
						font-size: 15px;
						text-transform: uppercase;
						cursor: pointer;

						&:hover,
						&.reqOpen {
							background-color: var(--dark-blue);
						}
						span {
							margin-left: 17px;
							position: relative;
							bottom: 11px;
						}
					}
					.pidtrymaty-btn {
						max-width: 224px;
						position: relative;
						padding: 12px 28px 11px;
						font-size: 15px;
						font-weight: 700;
						letter-spacing: 0em;
						text-align: center;
						text-transform: uppercase;
						text-decoration: none;
						color: var(--white);
						background: linear-gradient(90deg, #04e9a4, #117fff, #11ff37, #117fff, #04e9a4);
						background-size: 500%;
						border-radius: 10px;
						&:hover {
							animation: animate 10s linear infinite;
						}
						@media screen and (max-width: $mobile-breakpoint) {
							display: none;
						}
					}
				}
				.pidtrymaty-mobile-btn {
					display: none;
					@media screen and (max-width: $mobile-breakpoint) {
						max-width: 223px;
						margin: 64px auto 0;
						display: block;
						position: relative;
						padding: 12px 16px 11px;
						font-size: 15px;
						font-weight: 700;
						letter-spacing: 0em;
						text-align: center;
						text-transform: uppercase;
						text-decoration: none;
						color: var(--white);
						background: linear-gradient(90deg, #04e9a4, #117fff, #11ff37, #117fff, #04e9a4);
						background-size: 500%;
						border-radius: 10px;
						&:hover {
							animation: animate 10s linear infinite;
						}
					}
				}
			}
		}
		.footer {
			.contacts {
				position: relative;
				max-width: 1240px;
				height: 367px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: var(--blue);
				overflow-y: hidden;

				@media screen and (max-width: $mobile-breakpoint) {
					flex-direction: column;
					height: 1100px;
					padding-top: 49px;
					padding-bottom: 180px;
				}

				video {
					object-fit: cover;
					border-radius: 20px;
				}
				a {
					text-decoration: none;
					font-style: normal;
					font-weight: 700;
					font-size: 20px;
					line-height: 20px;
					color: var(--yellow);
				}
				&::after {
					content: '';
					width: 414px;
					height: 431px;
					position: absolute;
					bottom: -14%;
					left: 26%;
					background-image: url('$lib/images/footer-wing.svg');
					@media screen and (max-width: $mobile-breakpoint) {
						bottom: -6%;
						left: 30%;
						transform: translateX(-50%);
					}
				}

				.telephone {
					width: 277px;
					height: 277px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-image: url('$lib/icons/telephone-icon.svg');
					background-repeat: no-repeat;
					background-position: center;
					z-index: 2;
				}
				.email {
					width: 277px;
					height: 277px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-image: url('$lib/icons/mail-icon.svg');
					background-repeat: no-repeat;
					background-position: center;
					z-index: 2;
				}
				.address {
					width: 231px;
					height: 180px;
					line-height: 25px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-image: url('$lib/icons/map-icon.svg');
					background-repeat: no-repeat;
					background-position: center;

					@media screen and (max-width: $mobile-breakpoint) {
						height: 210px;
						z-index: 1;
						position: relative;
						top: 0;
						left: 0;
					}
					a {
						line-height: 25px;
					}
				}
			}
			.socials {
				background-color: var(--dark-blue);
				height: 72px;
				@media screen and (max-width: $mobile-breakpoint) {
					height: 134px;
				}
				.icon-block {
					width: 200px;
					height: 28px;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;
					align-items: center;
					position: relative;
					top: 24px;
					@media screen and (max-width: $mobile-breakpoint) {
						top: 50%;
						transform: translateY(-50%);
					}

					:global(.social-icon:hover) {
						fill: var(--yellow);
					}
				}
			}
		}
	}
</style>
