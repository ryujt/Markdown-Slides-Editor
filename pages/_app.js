import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import store from "../config/configureStore";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
