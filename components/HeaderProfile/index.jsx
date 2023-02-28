import Link from 'next/link';
import { useState, useEffect } from "react";
import '../HeaderIndex/HeaderIndex.sass';
import './HeaderProfile.sass';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

const HeaderProfile = () => {
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
	const [smclick, setSmclick] = useState(false)
	const toggleSmclick = () => setSmclick(value => !value)
	const [smclick1, setSmclick1] = useState(false)
	const toggleSmclick1 = () => setSmclick1(value => !value)
	const [smclick2, setSmclick2] = useState(false)
	const toggleSmclick2 = () => setSmclick2(value => !value)
	const [smclick3, setSmclick3] = useState(false)
	const toggleSmclick3 = () => setSmclick3(value => !value)
	const [smclick4, setSmclick4] = useState(false)
	const toggleSmclick4 = () => setSmclick4(value => !value)
	const [smclick5, setSmclick5] = useState(false)
	const toggleSmclick5 = () => setSmclick5(value => !value)
	const [smclick6, setSmclick6] = useState(false)
	const toggleSmclick6 = () => setSmclick6(value => !value)
	const [smclick7, setSmclick7] = useState(false)
	const toggleSmclick7 = () => setSmclick7(value => !value)
	const [smclick8, setSmclick8] = useState(false)
	const toggleSmclick8 = () => setSmclick8(value => !value)
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
								<a href="#" onClick={setPodmenu}>
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
							<div className="servicePodmenu__topMob">
								<button className="sprev" type='button' onClick={() => setPodmenu(false)}>
									<svg width="9" height="16" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#FF772D" />
									</svg>
								</button>
								<button className='sclose' type='button' onClick={() => setPodmenu(false)}>
									<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#FF772D" />
										<path d="M13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L0.292892 12.2929C-0.0976315 12.6834 -0.0976315 13.3166 0.292892 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893Z" fill="#FF772D" />
									</svg>
								</button>
							</div>
							<div className="servicePodmenu__wr">
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon1.png" alt="" />
											</i>
											<span>Instagram</span>
										</div>
										<button onClick={toggleSmclick} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
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
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon2.png" alt="" />
											</i>
											<span>Telegram</span>
										</div>
										<button onClick={toggleSmclick1} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick1 ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
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
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon3.png" alt="" />
											</i>
											<span>VK</span>
										</div>
										<button onClick={toggleSmclick2} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick2 ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
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
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon4.png" alt="" />
											</i>
											<span>TikTok</span>
										</div>
										<button onClick={toggleSmclick3} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick3 ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
										<nav>
											<a href="#">Подписчики</a>
											<a href="#">Лайки</a>
											<a href="#">Комментарии</a>
											<a href="#">Репосты</a>
											<a href="#">Просмотры</a>
										</nav>
									</div>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon5.png" alt="" />
											</i>
											<span>YouTube</span>
										</div>
										<button onClick={toggleSmclick4} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick4 ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
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
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon6.png" alt="" />
											</i>
											<span>Twitch</span>
										</div>
										<button onClick={toggleSmclick5} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick5 ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
										<nav>
											<a href="#">Просмотры</a>
											<a href="#">Подписчики</a>
											<a href="#">Зрители</a>
										</nav>
									</div>
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon7.png" alt="" />
											</i>
											<span>Facebook</span>
										</div>
										<button onClick={toggleSmclick6} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick6 ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
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
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon8.png" alt="" />
											</i>
											<span>Twitter</span>
										</div>
										<button onClick={toggleSmclick7} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick7 ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
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
								</div>
								<div className="servicePodmenuItem">
									<div className="servicePodmenuItem__top">
										<div className="servicePodmenuItem__title">
											<i>
												<img src="img/design/pmicon9.png" alt="" />
											</i>
											<span>RuTube</span>
										</div>
										<button onClick={toggleSmclick8} type='button'>
											<svg width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#E0E0E0" />
											</svg>
										</button>
									</div>
									<div className={`${smclick8 ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"}`}>
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
								<a className={`${podmenu ? 'menu__services act' : 'menu__services'}`} onMouseLeave={() => setPodmenu(false)} onMouseEnter={setPodmenu}>Услуги</a>
								<Link href='/'>Отзывы</Link>
								<Link href='/'>Как это работает</Link>
								<Link href='/'>Преимущества</Link>
								<Link href='/'>Частые вопросы</Link>
							</nav>
						</div>
						<div className="container__elem container__elem--4 container__elem--df container__elem--aic container__elem--jcfend">
							<div className='headerButtons headerButtons--profile'>
								<a className='orangeButtonOrange'>Быстрый заказ</a>
								<div className="pricesProf">
									<div className="pricesProf__ico">
										<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path opacity="0.6" d="M18.0002 14.0771C20.1482 13.6607 21.6002 12.8891 21.6002 11.9999V10.3991C20.7302 11.0135 19.4522 11.4335 18.0002 11.6927V14.0771ZM17.8238 10.5107C20.0738 10.1063 21.6002 9.3119 21.6002 8.3999V6.7991C20.2682 7.7399 17.981 8.2463 15.5738 8.3663C16.6802 8.9027 17.4938 9.6227 17.8238 10.5107ZM21.6002 4.7999C21.6002 3.4763 18.3746 2.3999 14.4002 2.3999C10.4246 2.3999 7.2002 3.4763 7.2002 4.7999C7.2002 6.1235 10.4258 7.1999 14.4002 7.1999C18.3758 7.1999 21.6002 6.1235 21.6002 4.7999Z" fill="#FFC000" />
											<path d="M9.60039 14.3999C13.576 14.3999 16.8004 13.0571 16.8004 11.3999C16.8004 9.7427 13.5748 8.3999 9.60039 8.3999C5.62479 8.3999 2.40039 9.7427 2.40039 11.3999C2.40039 13.0571 5.62599 14.3999 9.60039 14.3999ZM2.40039 17.5991V19.1999C2.40039 20.5235 5.62599 21.5999 9.60039 21.5999C13.576 21.5999 16.8004 20.5235 16.8004 19.1999V17.5991C15.2524 18.6899 12.4204 19.1999 9.60039 19.1999C6.78039 19.1999 3.94839 18.6899 2.40039 17.5991ZM2.40039 13.6643V15.5999C2.40039 16.9235 5.62599 17.9999 9.60039 17.9999C13.576 17.9999 16.8004 16.9235 16.8004 15.5999V13.6643C15.2524 14.9399 12.4168 15.5999 9.60039 15.5999C6.78399 15.5999 3.94839 14.9399 2.40039 13.6643Z" fill="#FFC000" />
										</svg>
									</div>
									<div className="pricesProf__span">1 653₽</div>
									<button className="pricesProf__pluse" type='button'>
										<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.33301 8.16683C2.33301 4.94517 4.94468 2.3335 8.16634 2.3335H19.833C23.0547 2.3335 25.6663 4.94517 25.6663 8.16683V19.8335C25.6663 23.0552 23.0547 25.6668 19.833 25.6668H8.16634C4.94468 25.6668 2.33301 23.0552 2.33301 19.8335V8.16683ZM8.16634 4.66683C6.23334 4.66683 4.66634 6.23383 4.66634 8.16683V19.8335C4.66634 21.7665 6.23334 23.3335 8.16634 23.3335H19.833C21.766 23.3335 23.333 21.7665 23.333 19.8335V8.16683C23.333 6.23383 21.766 4.66683 19.833 4.66683H8.16634Z" fill="#FF772D" fillOpacity="0.2" />
											<path d="M4.66634 8.16683C4.66634 6.23383 6.23334 4.66683 8.16634 4.66683H19.833C21.766 4.66683 23.333 6.23383 23.333 8.16683V19.8335C23.333 21.7665 21.766 23.3335 19.833 23.3335H8.16634C6.23334 23.3335 4.66634 21.7665 4.66634 19.8335V8.16683Z" fill="#FF772D" fillOpacity="0.2" />
											<path d="M14.0003 8.1665C14.6447 8.1665 15.167 8.68884 15.167 9.33317V12.8332H18.667C19.3113 12.8332 19.8337 13.3555 19.8337 13.9998C19.8337 14.6442 19.3113 15.1665 18.667 15.1665H15.167L15.167 18.6665C15.167 19.3108 14.6447 19.8332 14.0003 19.8332C13.356 19.8332 12.8337 19.3108 12.8337 18.6665L12.8337 15.1665H9.33366C8.68933 15.1665 8.16699 14.6442 8.16699 13.9998C8.16699 13.3555 8.68933 12.8332 9.33366 12.8332H12.8337V9.33317C12.8337 8.68884 13.356 8.1665 14.0003 8.1665Z" fill="#FF772D" />
										</svg>
									</button>
								</div>
								<a className="profilez">
									<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="#FF772D" />
										<path d="M11.9999 20C9.07106 20 7.33454 19.1139 6.3353 17.9708C6.03082 17.6225 5.95148 17.3163 5.96068 17.0651C5.97049 16.7971 6.08635 16.487 6.34713 16.1692C6.8828 15.5164 7.90124 15 8.99992 15H14.9999C16.0986 15 17.117 15.5164 17.6527 16.1692C17.9135 16.487 18.0293 16.7971 18.0392 17.0651C18.0484 17.3163 17.969 17.6225 17.6645 17.9708C16.6653 19.1139 14.9288 20 11.9999 20ZM4.8295 19.2871C6.30206 20.9716 8.65319 22 11.9999 22C15.3466 22 17.6978 20.9716 19.1703 19.2871C19.7746 18.5958 20.0675 17.8036 20.0378 16.9919C20.0087 16.1971 19.6744 15.48 19.1988 14.9004C18.2617 13.7585 16.6627 13 14.9999 13H8.99992C7.33717 13 5.73815 13.7585 4.80107 14.9004C4.32547 15.48 3.99113 16.1971 3.96202 16.9919C3.93229 17.8036 4.22527 18.5958 4.8295 19.2871Z" fill="#FF772D" />
									</svg>
								</a>
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
	);
};

export default HeaderProfile;