import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/styles.sass";
import Head from "next/head";
//Nov 24, 2022 v13.0.5

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Продвижение в Telegram, VK, YouTube, Instagram за пару кликов - FLOWSMM.NET</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Unbounded:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
