import Footer from "../components/Footer";
import { Montserrat, Unbounded } from "@next/font/google";
import { Provider } from "react-redux";
import store from "../store/store";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["cyrillic"],
});
const unbonded = Unbounded({
  weight: "600",
  subsets: ["cyrillic"],
});
import "../styles/styles.sass";
//Nov 24, 2022 v13.0.5

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
