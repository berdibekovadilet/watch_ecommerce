import React, { useEffect, useState } from "react";
import Button from "./Button";

import styles from "../styles/modules/product_list.module.scss";
import ProductLoader from "./ProductLoader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://62a86f40943591102ba204da.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading
        ? [...new Array(6)].map((_, index) => <ProductLoader key={index} />)
        : products.map((product) => (
            <div className={styles.product__container} key={product.id}>
              <img
                className={styles.product__img}
                alt="productImg"
                src={product.image}
              />
              <h3 className={styles.product__title}>{product.title}</h3>
              <p className={styles.product__price}>{product.price} Р</p>
              <Button name="В КОРЗИНУ" />
            </div>
          ))}
    </div>
  );
};

export default ProductList;
