import type { NextPage } from "next";
import { IndexAbout } from "../PagesFragments/index/About";
import { Contacts } from "../PagesFragments/index/Contacts";
import { Experience } from "../PagesFragments/index/Experience";
import { MyLinks } from "../PagesFragments/index/MyLinks";
import { Stack } from "../PagesFragments/index/Stack";
import css from "./index.module.scss";

const Home: NextPage = () => {
  return (
      
      <div className={css.main}>
        <IndexAbout />
        <Stack />
        <Experience />
        <Contacts />
        <MyLinks />
      </div>
  );
};

export default Home;
