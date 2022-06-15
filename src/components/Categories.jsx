import React, { useState } from "react";
import styles from "../styles/modules/categories.module.scss";

const Categories = () => {
  const categories = [
    "ВСЕ",
    "G-SHOCK",
    "BABY-G",
    "EDIFICE",
    "SHEEN",
    "VINTAGE",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className={styles.categories__list}>
      {categories.map((category, i) => (
        <li
          key={i}
          onClick={() => setActiveIndex(i)}
          className={activeIndex === i ? styles.active : styles.item}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
