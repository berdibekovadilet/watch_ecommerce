import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../assets/emptyCart.png";
import Button from "../components/Button";
import styles from "../styles/modules/cartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        Корзина пустая <span>😕</span>
      </h1>
      <p>
        Вероятней всего, вы не выбрали ничего. Для того, чтобы выбрать что-то,
        перейдите на главную страницу.
      </p>
      <img src={emptyCart} alt="emptyCart" />
      <Link to="/">
        <Button>Вернуться на главную</Button>
      </Link>
    </div>
  );
};

export default CartEmpty;
