import Link from 'next/link';
import { useState, useEffect } from "react";
import './HeaderIndex.sass';
/* eslint-disable @next/next/no-img-element */

const Header = () => {
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 0)
		})
	}, [])
	return (
		<header className={`${scroll ? 'header scrolled' : 'header'}`}>
			<div className="container">
				<div className="container__elem container__elem--8 container__elem--df container__elem--aic">
					<Link href='/' className='logo'>
						<img src="img/design/logo.svg" alt="" />
					</Link>
					<nav className='menu'>
						<Link href='/'>Услуги</Link>
						<Link href='/'>Отзывы</Link>
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
		</header>
	)
}

export default Header;