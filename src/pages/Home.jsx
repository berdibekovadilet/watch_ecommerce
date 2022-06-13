import React from "react";
import Header from "../components/Header";

import styles from "../styles/modules/app.module.scss";

const Home = () => {
  return (
    <div className="container">
      <dir className={styles.app_wrapper}>
        <Header />
      </dir>
    </div>
  );
};

export default Home;
