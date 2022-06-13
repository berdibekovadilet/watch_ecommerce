import React from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Sort from "../components/Sort";

import styles from "../styles/modules/app.module.scss";

const Home = () => {
  return (
    <div className="container">
      <dir className={styles.app_wrapper}>
        <Header />
        <div className={styles.section_wrapper}>
          <Categories />
          <Sort />
        </div>
      </dir>
    </div>
  );
};

export default Home;
