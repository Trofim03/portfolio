import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/MainLayout";

import { motion } from "framer-motion";

import "../i18n/i18n";
import { useTranslation } from "react-i18next";

function MyApp({ Component, pageProps, router }: AppProps) {
  const {
    i18n: { language },
  } = useTranslation();

  const variants = {
    pageInitial: {
      opacity: 0,
    },
    pageAnimate: {
      opacity: 1,
    },
  };

  return (
      <MainLayout>
        <motion.div
          key={router.route + language}
          initial="pageInitial"
          animate="pageAnimate"
          variants={variants}
        >
          <Component {...pageProps} />
        </motion.div>
      </MainLayout>
  );
}

export default MyApp;
