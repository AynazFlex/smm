import Link from 'next/link';
import { useState, useEffect } from "react";
import './HeaderIndex.sass';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

const Header = () => {
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 0)
		})
	}, [])
	const [burger, setBurger] = useState(false)
	// const toggleBurger = () => setBurger(value => !value)
	useEffect(() => {
		const body = document.querySelector("body");
		if (body) {
			body.style.overflow = burger ? "hidden" : "";
		}
	}, [burger]);
	const [podmenu, setPodmenu] = useState(false)
	return (
		<>

			{burger && (<div className='mobileMenu'>
				<div className="container">
					<div className="container__elem container__elem--12">
						<div className="mobileMenu__top">
							<Link href='/' className='logo'>
								<img src="img/design/logo.svg" alt="" />
							</Link>
							<button type='button' className='mobileMenu__close' onClick={() => setBurger(false)}>
								<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#FF772D" />
									<path d="M18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289Z" fill="#FF772D" />
								</svg>
							</button>
						</div>
						<div className="mobileMenu__bottom">
							<nav>
								<a href="#">
									<img src="img/design/mm1.png" alt="Услуги" />
								</a>
								<a href="#">
									<img src="img/design/mm2.png" alt="Отзывы" />
								</a>
								<a href="#">
									<img src="img/design/mm3.png" alt="Как это работает" />
								</a>
								<a href="#">
									<img src="img/design/mm4.png" alt="Преимущества" />
								</a>
								<a href="#">
									<img src="img/design/mm5.png" alt="Частые вопросы" />
								</a>
							</nav>
							<a href="#" className='orangeButtonOrange'>Быстрый заказ</a>
							<a href="#" className='orangeButton'>Войти</a>



							<div className="helper">
								<div className="helper__title">Нужна помощь?</div>
								<div className="helper__buttons">
									<button type='button'>
										<i>
											<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 10.5229 2.27182 11.933 3.07725 13.0953C3.3438 13.48 3.40806 13.9936 3.19692 14.4478L2.38256 16.2H9C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18H1.67543C0.654628 18 0.00887521 16.914 0.48065 16.0214L1.45958 13.9152C0.53659 12.5018 0 10.8123 0 9Z" fill="#B0B0B0" />
											</svg>
										</i>
										<span>Чат с поддержкой</span>
									</button>
									<a href="/">
										<i>
											<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6Z" fill="#B0B0B0" />
												<path d="M6.21917 8.37534C6.56418 7.94408 7.19347 7.87416 7.62473 8.21917L12 11.7194L16.3753 8.21917C16.8066 7.87416 17.4359 7.94408 17.7809 8.37534C18.1259 8.8066 18.056 9.4359 17.6247 9.78091L12 14.2807L6.37534 9.78091C5.94408 9.4359 5.87416 8.8066 6.21917 8.37534Z" fill="#B0B0B0" />
											</svg>
										</i>
										<span>support@smmsmm.net</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>



			</div>
			)}
			{podmenu && (
				<div onMouseLeave={() => setPodmenu(false)} onMouseEnter={setPodmenu} className="servicePodmenu">
					<div className="container">
						<div className="container__elem container__elem--12">
							<div className="servicePodmenu__wr">
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon1.png" alt="" />
										</i>
										<span>Instagram</span>
									</div>
									<nav>
										<a href="#">Подписчики</a>
										<a href="#">Лайки</a>
										<a href="#">Просмотры</a>
										<a href="#">Комментарии</a>
										<a href="#">Истории</a>
										<a href="#">Зрители</a>
										<a href="#">Статистика</a>
									</nav>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon2.png" alt="" />
										</i>
										<span>Telegram</span>
									</div>
									<nav>
										<a href="#">Подписчики</a>
										<a href="#">Просмотры</a>
										<a href="#">Реакции</a>
										<a href="#">Голосование</a>
										<a href="#">Репосты</a>
										<a href="#">Старт бота</a>
										<a href="#">Telegraph просмотры</a>
										<a href="#">Комментарии</a>
									</nav>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon3.png" alt="" />
										</i>
										<span>VK</span>
									</div>
									<nav>
										<a href="#">Подписчики</a>
										<a href="#">Лайки</a>
										<a href="#">Комментарии</a>
										<a href="#">Репосты</a>
										<a href="#">Просмотры на видео</a>
										<a href="#">Просмотры на пост</a>
										<a href="#">Накрутка опросов</a>
										<a href="#">Прослушивания</a>
										<a href="#">Релиз плейлиста</a>
									</nav>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon4.png" alt="" />
										</i>
										<span>TikTok</span>
									</div>
									<nav>
										<a href="#">Подписчики</a>
										<a href="#">Лайки</a>
										<a href="#">Комментарии</a>
										<a href="#">Репосты</a>
										<a href="#">Просмотры</a>
									</nav>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon5.png" alt="" />
										</i>
										<span>YouTube</span>
									</div>
									<nav>
										<a href="#">Подписчики</a>
										<a href="#">Просмотры</a>
										<a href="#">Просмотры трансляций</a>
										<a href="#">Просмотры Shorts</a>
										<a href="#">Лайки</a>
										<a href="#">Дизлайки</a>
										<a href="#">Комментарии</a>
										<a href="#">Репосты</a>
										<a href="#">Часы просмотров</a>
									</nav>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon6.png" alt="" />
										</i>
										<span>Twitch</span>
									</div>
									<nav>
										<a href="#">Просмотры</a>
										<a href="#">Подписчики</a>
										<a href="#">Зрители</a>
									</nav>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon7.png" alt="" />
										</i>
										<span>Facebook</span>
									</div>
									<nav>
										<a href="#">Подписчики</a>
										<a href="#">Лайки</a>
										<a href="#">Просмотры</a>
										<a href="#">Комментарии</a>
										<a href="#">Истории</a>
										<a href="#">Зрители</a>
										<a href="#">Статистика</a>
									</nav>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon8.png" alt="" />
										</i>
										<span>Twitter</span>
									</div>
									<nav>
										<a href="#">Подписчики</a>
										<a href="#">Лайки</a>
										<a href="#">Комментарии</a>
										<a href="#">Репосты</a>
										<a href="#">Просмотры на видео</a>
										<a href="#">Просмотры на пост</a>
										<a href="#">Накрутка опросов</a>
										<a href="#">Прослушивания</a>
										<a href="#">Релиз плейлиста</a>
									</nav>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__title">
										<i>
											<img src="img/design/pmicon9.png" alt="" />
										</i>
										<span>RuTube</span>
									</div>
									<nav>
										<a href="#">Подписчики</a>
										<a href="#">Лайки</a>
										<a href="#">Комментарии</a>
										<a href="#">Репосты</a>
										<a href="#">Просмотры</a>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<header className={`${scroll ? 'header scrolled' : 'header'}`}>
				<div className="header__top">
					<div className="container">
						<div className="container__elem container__elem--8 container__elem--df container__elem--aic">
							<Link href='/' className='logo'>
								<img src="img/design/logo.svg" alt="" />
							</Link>
							<nav className='menu'>
								<a className={`${podmenu ? 'menu__services act' : 'menu__services'}`} onMouseLeave={() => setPodmenu(false)} onMouseEnter={setPodmenu} href='#'>Услуги</a>
								<a href='#'>Отзывы</a>
								<Link href='/'>Как это работает</Link>
								<Link href='/'>Преимущества</Link>
								<Link href='/'>Частые вопросы</Link>
							</nav>
						</div>
						<div className="container__elem container__elem--4 container__elem--df container__elem--aic container__elem--jcfend">
							<div className='headerButtons'>
								<a href="#" className='orangeButton'>Войти</a>
								<a href="#" className='orangeButtonOrange'>Быстрый заказ</a>
							</div>
						</div>
					</div>
				</div>
				<div className="header__mobile">
					<div className="container">
						<div className="container__elem container__elem--12">
							<div className="headMob">
								<Link href='/' className='logo'>
									<img src="img/design/logo.svg" alt="" />
								</Link>
								<div className="headMob__wr">
									<a href="/" className="headMob__zakaz">Быстрый заказ</a>
									<button type='button' className='burger' onClick={() => setBurger(true)}>
										<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<rect x="3.75" y="4.875" width="16.5" height="2.25" rx="1.125" fill="#FF772D" />
											<rect x="3.75" y="10.875" width="16.5" height="2.25" rx="1.125" fill="#FF772D" />
											<rect x="3.75" y="16.875" width="16.5" height="2.25" rx="1.125" fill="#FF772D" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;