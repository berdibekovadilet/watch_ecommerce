import React from "react";

import { BiSearch } from "react-icons/bi";
import ShoppingCart from "../assets/shopping-cart.svg";
import styles from "../styles/modules/header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h1>Casio Watch</h1>
          <p>Оригинальные японские часы</p>
        </div>
        <div className={styles.search__form}>
          <div className={styles.search__wrapper}>
            <BiSearch className={styles.icon} />
            <input
              type="text"
              className={styles.input}
              placeholder="Поиск часов..."
            />
          </div>

          <button className={styles.search__button}>Поиск</button>
        </div>
        <div className={styles.cart_container}>
          <a href="/cart.html" className={styles.cart}>
            <span>45,520 ₽</span>
            <div className={styles.separator}></div>
            <img src={ShoppingCart} className={styles.icon} alt="shopcart" />
            <span>3</span>
          </a>
        </div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default Header;
