import type { NextPage } from "next";
import { IndexAbout } from "../PagesFragments/index/About";
import { Contacts } from "../PagesFragments/index/Contacts";
import { Experience } from "../PagesFragments/index/Experience";
import { MyLinks } from "../PagesFragments/index/MyLinks";
import { Stack } from "../PagesFragments/index/Stack";
import css from "./index.module.scss";


import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TI</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={css.main}>
        <IndexAbout />
        <Stack />
        <Experience />
        <Contacts />
        <MyLinks />
      </div>
    </>
  );
};

export default Home;
