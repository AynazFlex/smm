import HeaderIndex from '../components/HeaderIndex'
import Headr from '../components/Headr'
import { useState } from "react"
export default function Home() {
	const [value, setValue] = useState(null);
	const [isShown, setIsShown] = useState(false);
	
function chengeValue() {
	setValue(event.target.value);
}
return (
	<>
		<HeaderIndex />
		<Headr />
		<main className='main'>
			<section className='section1 section'>
				<div className='container'>
					<div className='container__elem container__elem--12'>
						<div className='section1__wr'>
							<div className='section__h2'>
								<img src="img/design/s1zag.jpg" alt="Быстрый заказ" />
							</div>
							<div className="section1__wrap">
								<div className="section1Items">
									<div className="section1Items__title">Сначала выберите социальную сеть</div>
									<div className="section1Items__wr">
										<button className="section1Item" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz1.svg" alt="" />
											</div>
											<div className="section1Item__txt">Instagram</div>
										</button>
										<button className="section1Item" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz2.svg" alt="" />
											</div>
											<div className="section1Item__txt">Twitter</div>
										</button>
										<button className="section1Item" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz3.svg" alt="" />
											</div>
											<div className="section1Item__txt">VK</div>
										</button>
										<button className="section1Item" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz4.svg" alt="" />
											</div>
											<div className="section1Item__txt">YouTube</div>
										</button>
										<button className="section1Item" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz5.svg" alt="" />
											</div>
											<div className="section1Item__txt">Telegram</div>
										</button>
										<button className="section1Item" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz6.svg" alt="" />
											</div>
											<div className="section1Item__txt">Facebook</div>
										</button>
										<button className="section1Item" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz7.svg" alt="" />
											</div>
											<div className="section1Item__txt">TikTok</div>
										</button>
										<button className="section1Item" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz8.svg" alt="" />
											</div>
											<div className="section1Item__txt">Twitch</div>
										</button>
										<button className="section1Item section1Item--full" type='button'>
											<div className="section1Item__ico">
												<img src="img/design/bz9.svg" alt="" />
											</div>
											<div className="section1Item__txt">RuTube</div>
										</button>
									</div>
								</div>
								<div className="section1Items">
									<div className="section1Items__title">Затем выберите услугу</div>
									<div className="section1Items__steps">


									{isShown || (
											<>

										<div className="section1Items__step1">
											<div className="section1Itemstep1">
												<label className="checkbox_vib checkbox_vib--check">
													<input type="radio" className="checkbox_vib__real" value="1"
														checked={value == '1' ? true : false}
														onChange={chengeValue} name="t1" />
													<span className="checkbox_vib__fake"></span> <span className="checkbox_vib__title">1 вариант</span>
												</label>
												<label className="checkbox_vib checkbox_vib--check">
													<input type="radio" className="checkbox_vib__real" value="2"
														checked={value == '2' ? true : false}
														onChange={chengeValue} name="t1" /> <span className="checkbox_vib__fake"></span> <span className="checkbox_vib__title">2 вариант</span>
												</label>
												<label className="checkbox_vib checkbox_vib--check checkbox_vib--mb0">
													<input type="radio" className="checkbox_vib__real" value="3"
														checked={value == '3' ? true : false}
														onChange={chengeValue} name="t1" /> <span className="checkbox_vib__fake"></span> <span className="checkbox_vib__title">3 вариант</span>
												</label>
											</div>
										</div>

										</>
										)}

										{isShown && (
											<>
												<div className="section1Items__wr2">
													<button className="section1Item" type='button'>
														<div className="section1Item__ico">
															<img src="img/design/u1.svg" alt="" />
														</div>
														<div className="section1Item__txt">Подписчики</div>
													</button>
													<button className="section1Item" type='button'>
														<div className="section1Item__ico">
															<img src="img/design/u2.svg" alt="" />
														</div>
														<div className="section1Item__txt">Зрители</div>
													</button>
													<button className="section1Item" type='button'>
														<div className="section1Item__ico">
															<img src="img/design/u3.svg" alt="" />
														</div>
														<div className="section1Item__txt">Лайки</div>
													</button>
													<button className="section1Item" type='button'>
														<div className="section1Item__ico">
															<img src="img/design/u4.svg" alt="" />
														</div>
														<div className="section1Item__txt">Статистика</div>
													</button>
													<button className="section1Item" type='button'>
														<div className="section1Item__ico">
															<img src="img/design/u5.svg" alt="" />
														</div>
														<div className="section1Item__txt">Просмотры</div>
													</button>
													<button className="section1Item" type='button'>
														<div className="section1Item__ico">
															<img src="img/design/u6.svg" alt="" />
														</div>
														<div className="section1Item__txt">IGTV</div>
													</button>
													<button className="section1Item" type='button'>
														<div className="section1Item__ico">
															<img src="img/design/u7.svg" alt="" />
														</div>
														<div className="section1Item__txt">Комментарии</div>
													</button>
													<button className="section1Item" type='button'>
														<div className="section1Item__ico">
															<img src="img/design/u8.svg" alt="" />
														</div>
														<div className="section1Item__txt">Reels</div>
													</button>
												</div>
											</>
										)}


									</div>
									<div className="section1Items__wr1">
										<button onClick={() => setIsShown(true)} disabled={`${value ? "" : "disabled"}`} type='button' className="orangeButtonOrange">Оформить  заказ</button>
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