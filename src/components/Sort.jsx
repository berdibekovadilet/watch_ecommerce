import React, { useState } from "react";

import { BsFillCaretUpFill } from "react-icons/bs";
import styles from "../styles/modules/sort.module.scss";

const Sort = () => {
  const sortArr = [
    {
      id: 0,
      name: "популярности (возр)",
    },
    {
      id: 1,
      name: "популярности (убыв)",
    },
    {
      id: 2,
      name: "цене (возр)",
    },
    {
      id: 3,
      name: "цене (убыв)",
    },
    {
      id: 4,
      name: "алфавиту (возр)",
    },
    {
      id: 5,
      name: "алфавиту (убыв)",
    },
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
            {sortArr.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={indexActive === item.id ? styles.active : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
