import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";

import Sort from "../components/Sort";
import SectionTitle from "../components/SectionTitle";

import styles from "../styles/modules/app.module.scss";

import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
  // Product useState
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Category useState
  const [categoryIndex, setCategoryIndex] = useState(0);

  // Sort useState
  const [sortIndex, setSortIndex] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const apiAurl = "https://62a86f40943591102ba204da.mockapi.io/items";

  useEffect(() => {
    setLoading(true);

    const category = categoryIndex > 0 ? categoryIndex : "";
    const search = searchValue ? `search=${searchValue}` : "";
    fetch(
      `${apiAurl}?page=${currentPage}&limit=3&category=${category}&sortBy=${sortIndex.sortProperty}&${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryIndex, sortIndex, searchValue, currentPage]);
  return (
    <>
      <div className={styles.section_wrapper}>
        <Categories
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
        />
        <Sort sortIndex={sortIndex} setSortIndex={setSortIndex} />
      </div>
      <SectionTitle name={"Все часы"} />
      <ProductList products={products} isLoading={isLoading} />
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
