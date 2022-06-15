import React, { useEffect, useState } from "react";
import Button from "./Button";

import styles from "../styles/modules/product_item.module.scss";

const ProductItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://62a86f40943591102ba204da.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  
  return (
    <>
      {products.map((product) => (
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
    </>
  );
};

export default ProductItem;
