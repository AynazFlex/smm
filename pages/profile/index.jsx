import HeaderProfile from "../../components/HeaderProfile";
import './Profile.sass';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Profile() {
	return (
		<>
			<HeaderProfile />
			<main className='main main--other'>
				<section className="zakazi">
					<div className="zakazi__top">
						<div className="container">
							<div className="container__elem container__elem--12 container__elem--df container__elem--jcsb">
								<div className="zakazi__left">
									<div className="vhodnie">
										<div className="vhodnie__face">
											<em>
												<svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 4.5C10.3431 4.5 9 5.84315 9 7.5C9 9.15685 10.3431 10.5 12 10.5C13.6569 10.5 15 9.15685 15 7.5C15 5.84315 13.6569 4.5 12 4.5ZM7 7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5C17 10.2614 14.7614 12.5 12 12.5C9.23858 12.5 7 10.2614 7 7.5Z" fill="#FF772D" />
													<path d="M11.9999 20.5C9.07106 20.5 7.33454 19.6139 6.3353 18.4708C6.03082 18.1225 5.95148 17.8163 5.96068 17.5651C5.97049 17.2971 6.08635 16.987 6.34713 16.6692C6.8828 16.0164 7.90124 15.5 8.99992 15.5H14.9999C16.0986 15.5 17.117 16.0164 17.6527 16.6692C17.9135 16.987 18.0293 17.2971 18.0392 17.5651C18.0484 17.8163 17.969 18.1225 17.6645 18.4708C16.6653 19.6139 14.9288 20.5 11.9999 20.5ZM4.8295 19.7871C6.30206 21.4716 8.65319 22.5 11.9999 22.5C15.3466 22.5 17.6978 21.4716 19.1703 19.7871C19.7746 19.0958 20.0675 18.3036 20.0378 17.4919C20.0087 16.6971 19.6744 15.98 19.1988 15.4004C18.2617 14.2585 16.6627 13.5 14.9999 13.5H8.99992C7.33717 13.5 5.73815 14.2585 4.80107 15.4004C4.32547 15.98 3.99113 16.6971 3.96202 17.4919C3.93229 18.3036 4.22527 19.0958 4.8295 19.7871Z" fill="#FF772D" />
												</svg>
											</em>
											<span>Ekarasev@gmail.com</span>
										</div>
										<a className="vhodnie__exit">
											<em>
												<img src="img/design/logout.svg" alt="" />
											</em>
											<span>Выйти</span>
										</a>
									</div>
								</div>
								<div className="zakazi__right">
									<div className="zakaziTabs">
										<button type="button" className="zakaziTab active">
											<div className="zakaziTab__ico">
												<svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1317_4203)">
														<path d="M3 19.5002C4.36817 18.7103 5.92017 18.2944 7.5 18.2944C9.07983 18.2944 10.6318 18.7103 12 19.5002C13.3682 18.7103 14.9202 18.2944 16.5 18.2944C18.0798 18.2944 19.6318 18.7103 21 19.5002" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M3 6.49972C4.36817 5.7098 5.92017 5.29395 7.5 5.29395C9.07983 5.29395 10.6318 5.7098 12 6.49972C13.3682 5.7098 14.9202 5.29395 16.5 5.29395C18.0798 5.29395 19.6318 5.7098 21 6.49972" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M3 6.5V19.5" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M12 6.5V19.5" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M21 6.5V19.5" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1317_4203">
															<rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
														</clipPath>
													</defs>
												</svg>

											</div>
											<div className="zakaziTab__txt">Заказы</div>
										</button>
										<button type="button" className="zakaziTab">
											<div className="zakaziTab__ico">
												<svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 10.25C10.7574 10.25 9.75 11.2574 9.75 12.5C9.75 13.7426 10.7574 14.75 12 14.75C13.2426 14.75 14.25 13.7426 14.25 12.5C14.25 11.2574 13.2426 10.25 12 10.25ZM8.25 12.5C8.25 10.4289 9.92893 8.75 12 8.75C14.0711 8.75 15.75 10.4289 15.75 12.5C15.75 14.5711 14.0711 16.25 12 16.25C9.92893 16.25 8.25 14.5711 8.25 12.5Z" fill="#B0B0B0" />
													<path d="M5 7.25C4.30964 7.25 3.75 7.80964 3.75 8.5V16.5C3.75 17.1904 4.30964 17.75 5 17.75H19C19.6904 17.75 20.25 17.1904 20.25 16.5V8.5C20.25 7.80964 19.6904 7.25 19 7.25H5ZM2.25 8.5C2.25 6.98122 3.48122 5.75 5 5.75H19C20.5188 5.75 21.75 6.98122 21.75 8.5V16.5C21.75 18.0188 20.5188 19.25 19 19.25H5C3.48122 19.25 2.25 18.0188 2.25 16.5V8.5Z" fill="#B0B0B0" />
													<path d="M17.25 12.5C17.25 12.0858 17.5858 11.75 18 11.75H18.01C18.4242 11.75 18.76 12.0858 18.76 12.5C18.76 12.9142 18.4242 13.25 18.01 13.25H18C17.5858 13.25 17.25 12.9142 17.25 12.5Z" fill="#B0B0B0" />
													<path d="M5.25 12.5C5.25 12.0858 5.58579 11.75 6 11.75H6.01C6.42421 11.75 6.76 12.0858 6.76 12.5C6.76 12.9142 6.42421 13.25 6.01 13.25H6C5.58579 13.25 5.25 12.9142 5.25 12.5Z" fill="#B0B0B0" />
												</svg>
											</div>
											<div className="zakaziTab__txt">История пополнений</div>
										</button>
										<button type="button" className="zakaziTab">
											<div className="zakaziTab__ico">
												<svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
													<path d="M18.0176 5.5C17.7571 5.5 17.5072 5.6035 17.323 5.78773L6.42506 16.6856C6.04059 17.0701 5.76783 17.5519 5.63596 18.0794L5.37439 19.1256L6.42066 18.8641C6.94816 18.7322 7.4299 18.4594 7.81437 18.075L18.7123 7.17704C18.8035 7.08582 18.8759 6.97752 18.9252 6.85833C18.9746 6.73915 19 6.6114 19 6.48239C19 6.35338 18.9746 6.22563 18.9252 6.10645C18.8759 5.98726 18.8035 5.87896 18.7123 5.78773C18.6211 5.69651 18.5128 5.62415 18.3936 5.57478C18.2744 5.52541 18.1466 5.5 18.0176 5.5ZM15.9088 4.37352C16.4681 3.81421 17.2267 3.5 18.0176 3.5C18.4093 3.5 18.7971 3.57714 19.1589 3.72702C19.5208 3.8769 19.8496 4.09658 20.1265 4.37352C20.4034 4.65046 20.6231 4.97924 20.773 5.34108C20.9229 5.70292 21 6.09074 21 6.48239C21 6.87404 20.9229 7.26186 20.773 7.6237C20.6231 7.98554 20.4034 8.31432 20.1265 8.59126L9.22859 19.4892C8.58779 20.13 7.78489 20.5846 6.90573 20.8043L4.24256 21.4701C3.90178 21.5553 3.54129 21.4555 3.29291 21.2071C3.04453 20.9587 2.94468 20.5982 3.02988 20.2575L3.69567 17.5943C3.91546 16.7151 4.37006 15.9122 5.01085 15.2714L15.9088 4.37352Z" fill="#B0B0B0" />
													<path d="M16.293 11.2072L13.293 8.20718L14.7072 6.79297L17.7072 9.79297L16.293 11.2072Z" fill="#B0B0B0" />
													<path d="M12 20.5C12 19.9477 12.4477 19.5 13 19.5L20 19.5C20.5523 19.5 21 19.9477 21 20.5C21 21.0523 20.5523 21.5 20 21.5L13 21.5C12.4477 21.5 12 21.0523 12 20.5Z" fill="#B0B0B0" />
												</svg>
											</div>
											<div className="zakaziTab__txt">Сменить пароль</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="zakazi__bottom">
						<div className="container">
							<div className="container__elem container__elem--12">
								<h1>
									<img src="img/design/h1zakazi.jpg" alt="Заказы" />
								</h1>
								<div className="tableZakazi">
									<div className="tableZakazi__row">
										<div className="tableZakazi__th tableZakazi__th--1">Дата</div>
										<div className="tableZakazi__th tableZakazi__th--2">Услуга</div>
										<div className="tableZakazi__th tableZakazi__th--3">Кол-во</div>
										<div className="tableZakazi__th tableZakazi__th--4">Цена</div>
										<div className="tableZakazi__th">Статус</div>
									</div>
									<div className="tableZakazi__row tableZakazi__row--gray">
										<div className="tableZakazi__tr tableZakazi__tr--1">
											11.12.2022
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--2">
											<div className="tableZakazi__usl">
												<div className="tableZakazi__ico">
													<img src="img/design/inst.jpg" alt="" />
												</div>
												<div className="tableZakazi__wr">
													<span>Подписчики “Живые ❤️”</span>
													<a>https://www.instagram.com/durov/</a>
												</div>
											</div>
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--3">
											10 000
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--4">
											1 000₽
										</div>
										<div className="tableZakazi__tr">
											<div className="tableZakazi__status tableZakazi__status--green">
												Завершён
											</div>
										</div>
									</div>
									<div className="tableZakazi__row tableZakazi__row--gray">
										<div className="tableZakazi__tr tableZakazi__tr--1">
											11.12.2022
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--2">
											<div className="tableZakazi__usl">
												<div className="tableZakazi__ico">
													<img src="img/design/inst.jpg" alt="" />
												</div>
												<div className="tableZakazi__wr">
													<span>Подписчики “Живые ❤️”</span>
													<a>https://www.instagram.com/durov/</a>
												</div>
											</div>
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--3">
											10 000
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--4">
											1 000₽
										</div>
										<div className="tableZakazi__tr">
											<div className="tableZakazi__status tableZakazi__status--yellow">
												Выполнен частично
											</div>
										</div>
									</div>
									<div className="tableZakazi__row tableZakazi__row--gray">
										<div className="tableZakazi__tr tableZakazi__tr--1">
											11.12.2022
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--2">
											<div className="tableZakazi__usl">
												<div className="tableZakazi__ico">
													<img src="img/design/inst.jpg" alt="" />
												</div>
												<div className="tableZakazi__wr">
													<span>Подписчики “Живые ❤️”</span>
													<a>https://www.instagram.com/durov/</a>
												</div>
											</div>
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--3">
											10 000
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--4">
											1 000₽
										</div>
										<div className="tableZakazi__tr">
											<div className="tableZakazi__status tableZakazi__status--blue">
												Выполняется
											</div>
										</div>
									</div>
									<div className="tableZakazi__row tableZakazi__row--gray">
										<div className="tableZakazi__tr tableZakazi__tr--1">
											11.12.2022
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--2">
											<div className="tableZakazi__usl">
												<div className="tableZakazi__ico">
													<img src="img/design/inst.jpg" alt="" />
												</div>
												<div className="tableZakazi__wr">
													<span>Подписчики “Живые ❤️”</span>
													<a>https://www.instagram.com/durov/</a>
												</div>
											</div>
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--3">
											10 000
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--4">
											1 000₽
										</div>
										<div className="tableZakazi__tr">
											<div className="tableZakazi__status tableZakazi__status--orange">
												В обработке
											</div>
										</div>
									</div>
									<div className="tableZakazi__row tableZakazi__row--gray">
										<div className="tableZakazi__tr tableZakazi__tr--1">
											11.12.2022
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--2">
											<div className="tableZakazi__usl">
												<div className="tableZakazi__ico">
													<img src="img/design/inst.jpg" alt="" />
												</div>
												<div className="tableZakazi__wr">
													<span>Подписчики “Живые ❤️”</span>
													<a>https://www.instagram.com/durov/</a>
												</div>
											</div>
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--3">
											10 000
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--4">
											1 000₽
										</div>
										<div className="tableZakazi__tr">
											<div className="tableZakazi__status tableZakazi__status--red">
												Отменён
											</div>
										</div>
									</div>
									<div className="tableZakazi__row tableZakazi__row--gray">
										<div className="tableZakazi__tr tableZakazi__tr--1">
											11.12.2022
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--2">
											<div className="tableZakazi__usl">
												<div className="tableZakazi__ico">
													<img src="img/design/inst.jpg" alt="" />
												</div>
												<div className="tableZakazi__wr">
													<span>Подписчики “Живые ❤️”</span>
													<a>https://www.instagram.com/durov/</a>
												</div>
											</div>
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--3">
											10 000
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--4">
											1 000₽
										</div>
										<div className="tableZakazi__tr">
											<div className="tableZakazi__status tableZakazi__status--red">
												Отменён
											</div>
										</div>
									</div>
									<div className="tableZakazi__row tableZakazi__row--gray">
										<div className="tableZakazi__tr tableZakazi__tr--1">
											11.12.2022
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--2">
											<div className="tableZakazi__usl">
												<div className="tableZakazi__ico">
													<img src="img/design/inst.jpg" alt="" />
												</div>
												<div className="tableZakazi__wr">
													<span>Подписчики “Живые ❤️”</span>
													<a>https://www.instagram.com/durov/</a>
												</div>
											</div>
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--3">
											10 000
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--4">
											1 000₽
										</div>
										<div className="tableZakazi__tr">
											<div className="tableZakazi__status tableZakazi__status--red">
												Отменён
											</div>
										</div>
									</div>
									<div className="tableZakazi__row tableZakazi__row--gray">
										<div className="tableZakazi__tr tableZakazi__tr--1">
											11.12.2022
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--2">
											<div className="tableZakazi__usl">
												<div className="tableZakazi__ico">
													<img src="img/design/inst.jpg" alt="" />
												</div>
												<div className="tableZakazi__wr">
													<span>Подписчики “Живые ❤️”</span>
													<a>https://www.instagram.com/durov/</a>
												</div>
											</div>
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--3">
											10 000
										</div>
										<div className="tableZakazi__tr tableZakazi__tr--4">
											1 000₽
										</div>
										<div className="tableZakazi__tr">
											<div className="tableZakazi__status tableZakazi__status--red">
												Отменён
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}