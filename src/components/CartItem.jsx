import React from "react";
import { useDispatch } from "react-redux";
import { plusItem, minusItem, removeItem } from "../redux/slices/cartSlice";
import styles from "../styles/modules/cart.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartItem = ({ id, title, image, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(plusItem(id));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <>
      <div className={styles.product}>
        <div className={styles.imgContainer}>
          <img class={styles.img} src={image} alt="Product" />
        </div>
        <div className={styles.details}>
          <span className={styles.productName}>
            <b>Часы: </b>
            {title}
          </span>
        </div>
        <div className={styles.amountDetail}>
          <div className={styles.productAmountContainer}>
            <AiOutlineMinus
              className={styles.icon}
              style={{ color: "#3ca6f1" }}
              onClick={onClickMinus}
            />
            <div className={styles.productAmount}>{count}</div>
            <AiOutlinePlus
              className={styles.icon}
              style={{ color: "#3ca6f1" }}
              onClick={onClickPlus}
            />
          </div>
        </div>
        <div className={styles.productPrice}>{price * count} руб</div>
        <div className={styles.close}>
          <AiOutlineCloseCircle
            style={{ color: "#c4c4c4" }}
            onClick={onClickRemove}
          />
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default CartItem;
