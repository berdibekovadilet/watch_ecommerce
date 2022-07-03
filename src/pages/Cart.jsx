import React from "react";
import Button from "../components/Button";
import styles from "../styles/modules/cart.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = ({ id, title, price, image }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Корзина</h1>
          <div className={styles.top}>
            <div className={styles.topText}>
              Общее количество: <b>2</b>
            </div>
            <div className={styles.topText}>
              Итоговая сумма: <b>19000 руб</b>
            </div>
            <Button type="filled">
              <Link to="/">Перейти к оплате</Link>
            </Button>
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              {items.map((item) => (
                <CartItem {...item} key={item.id} />
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <Button>
              <Link to="/">Вернуться на главную</Link>
            </Button>
            <Button>
              <Link to="/">Очистить корзину</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
