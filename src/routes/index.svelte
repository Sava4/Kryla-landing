<script>
	import { inview } from 'svelte-inview';

	import Header from '$lib/components/Header.svelte';

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

	<div class="nash-licei">
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
			<a href="https://send.monobank.ua/7wmXTSuLwy">Підтримати ліцей</a>
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
					Ми прагнули створити таке середовище, де усі діти відчувають повагу до своєї особистості,
					підтримку їхніх талантів та розвиток навиків співпраці. Школу, де вчителі розвивають
					інтерес дітей до наук, мистецтв та до самого процесу навчання.
				</p>
				<p class="author">Наталія Кощеєва, співзасновниця ліцею “Крила”</p>
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
	<div id="owl" use:inview={observerOpts} on:enter={() => (activeSection = 5)} class="how-we-teach">
		<div class="icon-container">
			<HowweTeach />
			<HowTeachSpin class="owl-spin" />
		</div>
		<div class="howteachpar">
			<p>
				Прагнемо запалити у кожній дитині бажання творити: писати есе, вірші та романи, малювати
				картини, грати вистави, співати і грати на фортепіано, дискутувати на гострі соціальні та
				політичні теми тощо.
			</p>
			<p>Впроваджуємо і підтримуємо дружні стосунки та довіру між учнями та вчителями.</p>
			<p>
				Культивуємо певну “моду” на навчання, на здобуття універсальних знань, на постійне
				розширення кола інтересів дитини.
			</p>
		</div>
		<div class="card-container">
			<div class="card">
				<Icon1 />
				<p>З 1-го класу у нас працюють вчителі-предметники, які дають глибокі знання</p>
			</div>
			<div class="card">
				<Icon2 />
				<p>Постійно підкреслюємо важливість самостійності та розвиваємо її</p>
			</div>
			<div class="card">
				<Icon3 />
				<p>
					Програму Міністерства Освіти доповнюємо темами, які цікаві сучасним дітям, беремо до уваги
					світові тенденції в освіті
				</p>
			</div>
			<div class="card">
				<Icon4 />
				<p class="pl20">
					Використовуємо сучасні матеріали, додатки та програми (Quizlet, Kahoot, Wordwall та ін.)
				</p>
			</div>
			<div class="card">
				<Icon5 />
				<p>
					Вводимо курси для розвитку потенціалу дітей, зокрема курс риторики, де учні вчаться
					аналізувати та писати рецензії на твори світових авторів та навіть пишуть власні книги
				</p>
			</div>
			<div class="card">
				<Icon6 />
				<p class="pl20">
					Поглиблено вивчаємо іноземні мови. Наші учні досягають вищих рівнів, ніж в звичайних
					школах
				</p>
			</div>
			<div class="card">
				<Icon7 />
				<p class="pl17">
					Спілкуємося з учнями поза уроками на цікаві їм теми, зокрема й обговорюємо можливі
					напрямки в професії
				</p>
			</div>
			<div class="card">
				<Icon8 />
				<p>Наголошуємо про важливість опанування нових знань та скілів</p>
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
	<div class="pidtrymaty">
		<div class="qrcode">
			<a href="https://send.monobank.ua/7wmXTSuLwy">
				<img src={QR} alt="Qrcode for payment" />
			</a>
		</div>
		<div class="payment-block">
			<p class="heading">Підтримати "Крила"</p>
			<p class="instructions">
				Відскануйте QR код або натисніть на кнопку і підтримайте ліцей "Крила" на будь-яку сумму
			</p>
			<div class="button-block">
				<button class:reqOpen class="rekvizity" on:click={() => (reqOpen = !reqOpen)}>
					<Rekvizity />
					<span>Реквізити</span>
				</button>
				<a href="https://send.monobank.ua/7wmXTSuLwy" class="pidtrymaty-btn">Підтримати ліцей</a>
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
							<TabControlItem id="UA" payload="Перекази по Україні" active>
								<div class="physichnyh">
									<p><strong>🙋 Для фізичних осіб</strong></p>
									<p>✅ Поповнення картки у гривні</p>
									<p>"№ картки: 5375414106537136</p>
									<p>ОДЕРЖУВАЧ: КОЩЕЄВА Н.М.</p>
									<p>IBAN: UA573220010000026202301839029</p>
									<p>БАНК ОДЕРЖУВАЧА: АТ «Універсал Банк»</p>
									<p>ЄДРПОУ ОДЕРЖУВАЧА: 2786915261</p>
								</div>
								<div class="yurydychnyh">
									<p><strong>💼 Для юридичних осіб</strong></p>
									<p>Назва підприємства: КИIВСЬКИЙ ЛIЦЕЙ КРИЛА ТОВ</p>
									<p>Банк кореспондент: АТ КБ "ПРИВАТБАНК"</p>
									<p>SWIFT CODE: PBANUA2X</p>
									<p>Адреса підприємства: UA 01001 м Київ вул Звiринецька, б.15/1"</p>
									<p>
										Призначення платежу: «Благодійна допомога відповідно до листа № 22/06/06-1 від
										06 червня 2022 р.»
									</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>✅ Переказ у гривні</strong></p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>UA083052990000026002016205685</strong></p>
								</div>
							</TabControlItem>
							<TabControlItem id="Int" payload="Перекази з-за кордону">
								<div class="physichnyh">
									<p><strong>🙋 Для фізичних осіб</strong></p>
									<p>SWIFT-ПЕРЕКАЗИ</p>
									<p>BENEFICIARY: KOSHCHEIEVA NATALIIA</p>
									<p>01001, Ukraine, c. Kyiv, st. Moskovska, build. 29A, fl. 23</p>
									<p>Beneficiary bank: JSC UNIVERSAL BANK</p>
									<p>SWIFT CODE: UNJSUAUKXXX</p>
									<p>City: KYIV, UKRAINE</p>
									<p>Details of payment (Призначення платежу): «Private transfer»</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;✅ Переказ у доларах США (USD)</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;IBAN: UA243220010000026204313675495</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;ACCOUNT: 26204313675495</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;✅ Переказ у злотих (PLN)</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;IBAN: UA573220010000026202301839029</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;ACCOUNT: 26202301839029</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;✅ Переказ у фунтах-стерлінгах (GBP)</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;IBAN: UA573220010000026202301839029</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;ACCOUNT: 26202301839029</p>
								</div>
								<div class="yurydychnyh">
									<p><strong>💼 Для юридичних осіб</strong></p>
									<p>Назва підприємства: КИIВСЬКИЙ ЛIЦЕЙ КРИЛА ТОВ</p>
									<p>Назва банку: JSC CB "PRIVATBANK",</p>
									<p>1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE</p>
									<p>SWIFT CODE: PBANUA2X</p>
									<p>Адреса підприємства: UA 01001 м Київ вул Звiринецька, б. 15/1</p>
									<p>
										Details of payment (Призначення платежу): «Charity donation according to the
										letter № 22/06/06-1 dated 06.06.22»
									</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>✅ Переказ у євро (EUR)</strong></p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>IBAN: UA06305299000002600204622857</strong></p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Банк кореспондент: Commerzbank AG, Frankfurt am Main,
										Germany
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Рахунок в банку кореспонденті: 400886700401
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;SWIFT Code банку-кореспондента: COBADEFF
									</p>
									<p class="small">&nbsp;&nbsp;&nbsp;&nbsp;або</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Банк кореспондент: J.P.MORGAN AG, FRANKFURT AM MAIN,
										GERMANY
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Рахунок в банку кореспонденті: 6231605145
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;SWIFT Code банку-кореспондента: CHASDEFX"
									</p>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>✅ Переказ у USD</strong></p>
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;<strong>IBAN: UA933052990000026002026234828</strong>
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Банк кореспондент: JP Morgan Chase Bank, New York ,USA
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Рахунок в банку кореспонденті: 001-1-000080
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;SWIFT Code банку-кореспондента: CHASUS33
									</p>
									<p class="small">&nbsp;&nbsp;&nbsp;&nbsp;або</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Банк кореспондент: The Bank of New York Mellon, New
										York, USA
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;Рахунок в банку кореспонденті: 890-0085-754
									</p>
									<p class="small">
										&nbsp;&nbsp;&nbsp;&nbsp;SWIFT Code банку-кореспондент: IRVT US 3N"
									</p>
								</div>
							</TabControlItem>
						</div>
					</TabControl>
				</div>
			{/if}
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
					вул. Звіринецька, 15/1,<br />
					Печерський р-н, Київ,<br />
					Україна 01014
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
			}
			.payment-block {
				width: 559px;
				text-align: left;
				color: var(--blue);

				.tabs-container {
					margin-top: 24px;
					height: 100%;
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
				}
				.instructions {
					font-style: normal;
					font-weight: 600;
					font-size: 30px;
					line-height: 40px;
					margin-bottom: 24px;
				}
				.button-block {
					display: flex;
					justify-content: space-between;
					align-items: center;
					position: relative;
					&::after {
						content: '';
						position: absolute;
						width: 18px;
						height: 18px;
						top: 24%;
						right: 48%;
						border-radius: 40px;
						background-color: var(--white);
					}
					.rekvizity {
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
						position: relative;
						padding: 12px 35px 11px;
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
					a {
						line-height: 25px;
					}
				}
			}
			.socials {
				background-color: var(--dark-blue);
				height: 72px;
				.icon-block {
					width: 200px;
					height: 28px;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;
					align-items: center;
					position: relative;
					top: 24px;

					:global(.social-icon:hover) {
						fill: var(--yellow);
					}
				}
			}
		}
	}
</style>
