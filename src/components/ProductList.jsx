import React from "react";
import ProductItem from "./ProductItem";
import styles from "../styles/modules/product_list.module.scss";
import ProductLoader from "./ProductLoader";

const ProductList = ({ products, isLoading }) => {
  const productsList = products.map((obj) => (
    <ProductItem key={obj.id} {...obj} />
  ));

  return (
    <div className={styles.wrapper}>
      {isLoading
        ? [...new Array(6)].map((_, index) => <ProductLoader key={index} />)
        : productsList}
    </div>
  );
};

export default ProductList;
