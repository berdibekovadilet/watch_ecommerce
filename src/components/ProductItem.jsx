import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem } from "../redux/slices/cartSlice";
import styles from "../styles/modules/product_list.module.scss";
import stylesBtn from "../styles/modules/button.module.scss";

const ProductItem = ({ id, title, price, image }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      image,
    };

    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div className={styles.product__container} key={id}>
      <img className={styles.product__img} alt="productImg" src={image} />
      <h3 className={styles.product__title}>{title}</h3>
      <p className={styles.product__price}>{price} Р</p>
      {!addedCount > 0 && (
        <button className={stylesBtn.button} onClick={onClickAdd}>
          <span>В КОРЗИНУ</span>
        </button>
      )}
      {addedCount > 0 && (
        <>
          <div className={stylesBtn.wrapper}>
            <button className={stylesBtn.counter} onClick={onClickMinus}>
              -
            </button>
            {cartItem.count}
            <button className={stylesBtn.counter} onClick={onClickAdd}>
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductItem;
