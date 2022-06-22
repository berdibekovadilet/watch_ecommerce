import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setSortId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";

import Sort from "../components/Sort";
import SectionTitle from "../components/SectionTitle";

import styles from "../styles/modules/app.module.scss";

import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const categoryIndex = useSelector((state) => state.filter.categoryIndex);
  const sortIndex = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);

  // Product useState
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSort = (obj) => {
    dispatch(setSortId(obj));
  };

  const apiAurl = "https://62a86f40943591102ba204da.mockapi.io/items/";

  useEffect(() => {
    setLoading(true);

    const category = categoryIndex > 0 ? categoryIndex : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    axios
      .get(
        `${apiAurl}?page=${currentPage}&limit=6&category=${category}&sortBy=${sortIndex.sortProperty}${search}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryIndex, sortIndex, searchValue, currentPage]);
  return (
    <>
      <div className={styles.section_wrapper}>
        <Categories
          categoryIndex={categoryIndex}
          onChangeCategory={onChangeCategory}
        />
        <Sort sortIndex={sortIndex} setSortIndex={onChangeSort} />
      </div>
      <SectionTitle name={"Все часы"} />
      <ProductList products={products} isLoading={isLoading} />
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
