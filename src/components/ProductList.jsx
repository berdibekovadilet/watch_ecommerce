import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

import styles from "../styles/modules/product_list.module.scss";
import ProductLoader from "./ProductLoader";

const ProductList = ({ products, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      {isLoading
        ? [...new Array(6)].map((_, index) => <ProductLoader key={index} />)
        : products.map((product) => (
            <div className={styles.product__container} key={product.id}>
              <Link to="product-detail">
                <img
                  className={styles.product__img}
                  alt="productImg"
                  src={product.image}
                />
              </Link>

              <h3 className={styles.product__title}>{product.title}</h3>
              <p className={styles.product__price}>{product.price} Р</p>
              <Button>В КОРЗИНУ</Button>
            </div>
          ))}
    </div>
  );
};

export default ProductList;
