import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";

import store from "../config/configureStore";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
