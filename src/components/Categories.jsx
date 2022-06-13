import React from "react";
import styles from "../styles/modules/categories.module.scss";

const Categories = () => {
  return (
    <ul className={styles.categories__list}>
      <li className={styles.active}>ВСЕ</li>
      <li className={styles.categories__item}>G-SHOCK</li>
      <li className={styles.categories__item}>BABY-G</li>
      <li className={styles.categories__item}>EDIFICE</li>
      <li className={styles.categories__item}>SHEEN</li>
      <li className={styles.categories__item}>VINTAGE</li>
    </ul>
  );
};

export default Categories;
