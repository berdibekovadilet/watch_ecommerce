import React, { useState } from "react";

import { BsFillCaretUpFill } from "react-icons/bs";
import styles from "../styles/modules/sort.module.scss";

const Sort = () => {
  const sortArr = [
    "популярности (возр)",
    "популярности (убыв)",
    "цене (возр)",
    "цене (убыв)",
    "алфавиту (возр)",
    "алфавиту (убыв)",
  ];

  const [modal, setModal] = useState(false);
  const [indexActive, setIndexActive] = useState(0);

  const handleClick = (index) => {
    setIndexActive(index);
  };

  return (
    <div className={styles.sort__container} onClick={() => setModal(!modal)}>
      <div className={styles.sort__label}>
        <BsFillCaretUpFill />
        <p>Сортировка по:</p>
        <span>популярности</span>
      </div>
      {modal && (
        <div className={styles.sort__popup}>
          <ul>
            {sortArr.map((item, i) => (
              <li
                key={i}
                onClick={() => handleClick(i)}
                className={indexActive === i ? styles.active : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
