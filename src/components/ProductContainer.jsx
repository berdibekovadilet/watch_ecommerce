import React from "react";
import ProductItem from "./ProductItem";

import styles from "../styles/modules/product_container.module.scss";

const ProductContainer = () => {
  return (
    <div className={styles.wrapper}>
      <ProductItem />
    </div>
  );
};

export default ProductContainer;
