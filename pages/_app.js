import Header from '../components/Header'
import Footer from '../components/Footer'
import { Montserrat, Unbounded } from '@next/font/google'

const montserrat = Montserrat({
	weight: '400',
	subsets: ['cyrillic'],
})
const unbonded = Unbounded({
	weight: '600',
	subsets: ['cyrillic'],
})
import '../styles/styles.sass'
//Nov 24, 2022 v13.0.5

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className='headr'>
				<Header />
				<div className='headr__utpBox'>
					<div className='headr__Box'>
						<div className='headr__utp'>
							<div className='headr__utp1'>
								<img src="img/design/utp.png" alt="" />
							</div>
							<span>Получайте подписчиков, лайки, репосты, просмотры, прослушивания и любую другую активность на свои профили в социальных сетях по самым низким ценам на рынке и в самые быстрые сроки!</span>
							<a href="#" className='orangeButtonOrange'>Начать продвижение</a>
						</div>
					</div>
				</div>
			</div>
			<main className='main'>
				<section className='content'>
					<Component {...pageProps} />
				</section>
			</main>
			{/* <Footer /> */}
		</>
	)
}

export default MyApp