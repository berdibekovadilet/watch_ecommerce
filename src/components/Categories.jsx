import React, { useState } from "react";
import styles from "../styles/modules/categories.module.scss";

const Categories = () => {
  const categories = [
    {
      id: 0,
      name: "ВСЕ",
    },
    {
      id: 1,
      name: "G-SHOCK",
    },
    {
      id: 2,
      name: "BABY-G",
    },
    {
      id: 3,
      name: "EDIFICE",
    },
    {
      id: 4,
      name: "SHEEN",
    },
    {
      id: 5,
      name: "VINTAGE",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className={styles.categories__list}>
      {categories.map((category) => (
        <li
          key={category.id}
          onClick={() => handleClick(category.id)}
          className={activeIndex === category.id ? styles.active : styles.item}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
