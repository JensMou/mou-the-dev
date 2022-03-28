import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/index.css";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "../styles/global.css";
import Layout from "../components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";

const persistor = persistStore(store);

/**
 *
 *
 * @export
 * @param {AppProps} { Component, pageProps, router }
 * @return {*}
 */
export default function MyApp({ Component, pageProps, router }: AppProps) {
    const spring = {
        type: "spring",
        damping: 20,
        stiffness: 100,
        when: "afterChildren",
    };
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout>
                    <AnimatePresence>
                        <div className="page-transition-wrapper">
                            <motion.div
                                transition={spring}
                                key={router.pathname}
                                initial={{ y: 300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -300, opacity: 0 }}
                                id="page-transition-container"
                            >
                                <Component {...pageProps} />
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </Layout>
            </PersistGate>
        </Provider>
    );
}
