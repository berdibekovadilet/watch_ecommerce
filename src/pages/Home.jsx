import React, { useEffect, useState, useContext } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SectionTitle from "../components/SectionTitle";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setSortId,
  setPageCount,
} from "../redux/slices/filterSlice";
import styles from "../styles/modules/app.module.scss";
import ProductLoader from "../components/ProductLoader";

const Home = () => {
  const dispatch = useDispatch();
  const categoryIndex = useSelector((state) => state.filter.categoryIndex);
  const sortIndex = useSelector((state) => state.filter.sort);
  const pageCount = useSelector((state) => state.filter.pageCount);

  const { searchValue } = useContext(SearchContext);

  // Product useState
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSort = (obj) => {
    dispatch(setSortId(obj));
  };

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  const apiAurl = "https://62a86f40943591102ba204da.mockapi.io/items/";

  useEffect(() => {
    setLoading(true);

    const category = categoryIndex > 0 ? categoryIndex : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    axios
      .get(
        `${apiAurl}?page=${pageCount}&limit=6&category=${category}&sortBy=${sortIndex.sortProperty}${search}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, sortIndex.sortProperty, searchValue, pageCount]);

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

      <Pagination onChangePage={onChangePage} />
    </>
  );
};

export default Home;
