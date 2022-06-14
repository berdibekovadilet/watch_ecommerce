import React, { useState } from "react";
import styles from "../styles/modules/categories.module.scss";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className={styles.categories__list}>
      <li
        onClick={() => handleClick(0)}
        className={activeIndex === 0 ? styles.active : styles.item}
      >
        ВСЕ
      </li>
      <li
        onClick={() => handleClick(1)}
        className={activeIndex === 1 ? styles.active : styles.item}
      >
        G-SHOCK
      </li>
      <li
        onClick={() => handleClick(2)}
        className={activeIndex === 2 ? styles.active : styles.item}
      >
        BABY-G
      </li>
      <li
        onClick={() => handleClick(3)}
        className={activeIndex === 3 ? styles.active : styles.item}
      >
        EDIFICE
      </li>
      <li
        onClick={() => handleClick(4)}
        className={activeIndex === 4 ? styles.active : styles.item}
      >
        SHEEN
      </li>
      <li
        onClick={() => handleClick(5)}
        className={activeIndex === 5 ? styles.active : styles.item}
      >
        VINTAGE
      </li>
    </ul>
  );
};

export default Categories;
