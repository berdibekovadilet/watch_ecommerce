import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import ShoppingCart from "../assets/shopping-cart.svg";
import styles from "../styles/modules/header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <h1>Casio Watch</h1>
        <p>Оригинальные японские часы</p>
      </div>
      <div className={styles.cart_container}>
        <a href="/cart.html" className={styles.cart}>
          <span>45,520 ₽</span>
          <div className={styles.separator}></div>
          <img src={ShoppingCart} className={styles.icon} />
          <span>3</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
