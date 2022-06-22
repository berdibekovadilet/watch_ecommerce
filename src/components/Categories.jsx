import React from "react";
import styles from "../styles/modules/categories.module.scss";

const Categories = ({ categoryIndex, onChangeCategory }) => {
  const categories = [
    "ВСЕ",
    "G-SHOCK",
    "BABY-G",
    "EDIFICE",
    "SHEEN",
    "VINTAGE",
  ];

  return (
    <ul className={styles.categories__list}>
      {categories.map((category, i) => (
        <li
          key={i}
          onClick={() => onChangeCategory(i)}
          className={categoryIndex === i ? styles.active : styles.item}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
