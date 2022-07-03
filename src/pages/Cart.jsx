import React from "react";
import CartEmpty from "../components/CartEmpty";
import Button from "../components/Button";
import styles from "../styles/modules/cart.module.scss";
import stylesBtn from "../styles/modules/button.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearItems } from "../redux/slices/cartSlice";

const Cart = ({ id, title, price, image }) => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm("Очистить всю корзину?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Корзина</h1>
          <div className={styles.top}>
            <div className={styles.topText}>
              Общее количество: <b>{totalCount} шт</b>
            </div>
            <div className={styles.topText}>
              Итоговая сумма: <b>{totalPrice} руб</b>
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
            <button className={stylesBtn.button} onClick={onClickClear}>
              Очистить корзину
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
