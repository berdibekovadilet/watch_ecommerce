import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SearchContext } from "../App";
import ShoppingCart from "../assets/shopping-cart.svg";
import styles from "../styles/modules/header.module.scss";
import Search from "./Search";

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const { searchValue, setSearchValue } = useContext(SearchContext);
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
            <span>{totalPrice} ₽</span>
            <div className={styles.separator}></div>
            <img src={ShoppingCart} className={styles.icon} alt="shopcart" />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default Header;
