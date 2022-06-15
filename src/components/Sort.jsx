import React, { useState } from "react";

import { BsFillCaretUpFill } from "react-icons/bs";
import styles from "../styles/modules/sort.module.scss";

const Sort = () => {
  const [modal, setModal] = useState(false);
  const [indexActive, setIndexActive] = useState(0);
  
  const list = ["популярности", "цене", "алфавиту"];
  const sortName = list[indexActive];

  const clickHandler = (i) => {
    setIndexActive(i);
    setModal(false);
  };

  return (
    <div className={styles.sort__container}>
      <div className={styles.sort__label}>
        <BsFillCaretUpFill />
        <p>Сортировка по:</p>
        <span onClick={() => setModal(!modal)}>{sortName}</span>
      </div>
      {modal && (
        <div className={styles.sort__popup}>
          <ul>
            {list.map((item, i) => (
              <li
                key={i}
                onClick={() => clickHandler(i)}
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
