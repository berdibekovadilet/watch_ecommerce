import React from "react";
import Categories from "../components/Categories";

import Sort from "../components/Sort";
import SectionTitle from "../components/SectionTitle";

import styles from "../styles/modules/app.module.scss";

import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <>
      <div className={styles.section_wrapper}>
        <Categories />
        <Sort />
      </div>
      <SectionTitle name={"Все часы"} />
      <ProductList />
      <Pagination />
    </>
  );
};

export default Home;
