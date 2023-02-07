import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/styles.sass'
//Nov 24, 2022 v13.0.5

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp