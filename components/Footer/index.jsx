import './Footer.sass';

const Footer = () => {
	return (
		<footer className='foot'>
			<div className="container">
				<div className="container__elem container__elem--8">
					<a href="/" className="foot__logo">
						<img src="img/design/logo.svg" alt="" />
					</a>
					<div className="foot__txt">SMMSMM - сервис, где вы сможете приобрести качественное продвижение в социальных сетях по выгодным ценам.</div>
					<nav className='foot__topnav'>
						<div className="foot__row">
							<a href="/">Услуги</a>
							<a href="/">Отзывы</a>
						</div>

						<div className="foot__row">
							<a href="/">Как это работает</a>
							<a href="/">Преимущества</a>
						</div>
						<div className="foot__row">
							<a href="/">SMMFlow vs Другие сайты</a>
							<a href="/">Частые вопросы</a>
						</div>
						<div className="foot__row">
							<a href="/">Правила сервиса</a>
							<a href="/">Контакты</a>
						</div>
					</nav>
					<nav className="foot__bottomnav">
						<a href="/">Политика конфиденциальности</a>
						<a href="/">Публичная оферта</a>
						<a href="/">Пользовательское соглашение</a>
					</nav>
				</div>
				<div className="container__elem container__elem--4 container__elem--df container__elem--jcfend">
					<div className="foot__wrap">
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
						<div className="karts">
							<span>
								<img src="img/design/k1.png" alt="" />
							</span>
							<span>
								<img src="img/design/k2.png" alt="" />
							</span>
							<span>
								<img src="img/design/k3.png" alt="" />
							</span>
							<span>
								<img src="img/design/k4.png" alt="" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer >
	)
}

export default Footer;