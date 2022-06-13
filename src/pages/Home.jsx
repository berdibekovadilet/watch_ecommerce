import React from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Sort from "../components/Sort";
import SectionTitle from "../components/SectionTitle";

import styles from "../styles/modules/app.module.scss";
import ProductContainer from "../components/ProductContainer";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div className="container">
      <dir className={styles.app_wrapper}>
        <Header />
        <div className={styles.section_wrapper}>
          <Categories />
          <Sort />
        </div>
        <SectionTitle name={"Все часы"} />
        <ProductContainer />
        <Pagination />
      </dir>
    </div>
  );
};

export default Home;
