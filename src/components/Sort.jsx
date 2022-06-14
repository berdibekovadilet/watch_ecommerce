import React, { useState } from "react";

import { BsFillCaretUpFill } from "react-icons/bs";
import styles from "../styles/modules/sort.module.scss";

const Sort = () => {
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
            <li
              onClick={() => handleClick(0)}
              className={indexActive === 0 ? styles.active : ""}
            >
              популярности (возр)
            </li>
            <li
              onClick={() => handleClick(1)}
              className={indexActive === 1 ? styles.active : ""}
            >
              популярности (убыв)
            </li>
            <li
              onClick={() => handleClick(2)}
              className={indexActive === 2 ? styles.active : ""}
            >
              цене (возр)
            </li>
            <li
              onClick={() => handleClick(3)}
              className={indexActive === 3 ? styles.active : ""}
            >
              цене (убыв)
            </li>
            <li
              onClick={() => handleClick(4)}
              className={indexActive === 4 ? styles.active : ""}
            >
              алфавиту (возр)
            </li>
            <li
              onClick={() => handleClick(5)}
              className={indexActive === 5 ? styles.active : ""}
            >
              алфавиту (убыв)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
