import React from "react";
import styles from "../styles/modules/categories.module.scss";

const Categories = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.active}>ВСЕ</li>
      <li>G-SHOCK</li>
      <li>BABY-G</li>
      <li>EDIFICE</li>
      <li>SHEEN</li>
      <li>VINTAGE</li>
    </ul>
  );
};

export default Categories;
