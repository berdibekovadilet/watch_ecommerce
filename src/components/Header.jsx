import React from "react";
import { Link } from "react-router-dom";

import ShoppingCart from "../assets/shopping-cart.svg";
import styles from "../styles/modules/header.module.scss";
import Search from "./Search";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>Casio Watch</h1>
          </Link>

          <p>Оригинальные японские часы</p>
        </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className={styles.cart_container}>
          <Link to="cart" className={styles.cart}>
            <span>45,520 ₽</span>
            <div className={styles.separator}></div>
            <img src={ShoppingCart} className={styles.icon} alt="shopcart" />
            <span>3</span>
          </Link>
        </div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default Header;
