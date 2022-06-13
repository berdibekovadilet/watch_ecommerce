import React from "react";
import ProductItem from "./ProductItem";

import { products } from "../data/products";
import styles from "../styles/modules/product_container.module.scss";

const ProductContainer = () => {
  return (
    <div className={styles.wrapper}>
      <ProductItem products={products} />
    </div>
  );
};

export default ProductContainer;
