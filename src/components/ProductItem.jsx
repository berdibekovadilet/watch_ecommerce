import React from "react";
import Button from "./Button";

import styles from "../styles/modules/product_item.module.scss";

const ProductItem = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className={styles.product__container}>
          <img
            className={styles.product__img}
            alt="productImg"
            src={product.image}
          />
          <h3 className={styles.product__title}>{product.title}</h3>
          <p className={styles.product__price}>{product.price}</p>
          <Button name="В КОРЗИНУ" />
        </div>
      ))}
    </>
  );
};

export default ProductItem;
