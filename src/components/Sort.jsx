import React from "react";

import { BsFillCaretUpFill } from "react-icons/bs";
import styles from "../styles/modules/sort.module.scss";

const Sort = () => {
  return (
    <div className={styles.sort__container}>
      <div className={styles.sort__label}>
        <BsFillCaretUpFill />
        <p>Сортировка по:</p>
        <span>популярности</span>
      </div>
      <div className={styles.sort__popup}>
        <ul>
          <li className={styles.active}>популярности (возр)</li>
          <li>популярности (убыв)</li>
          <li>цене (возр)</li>
          <li>цене (убыв)</li>
          <li>алфавиту (возр)</li>
          <li>алфавиту (убыв)</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
