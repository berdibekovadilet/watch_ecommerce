import React, { useState } from "react";

import { BsFillCaretUpFill } from "react-icons/bs";
import styles from "../styles/modules/sort.module.scss";

const Sort = ({ sortIndex, setSortIndex }) => {
  const [modal, setModal] = useState(false);

  const list = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  const clickHandler = (i) => {
    setSortIndex(i);
    setModal(false);
  };

  return (
    <div className={styles.sort__container}>
      <div className={styles.sort__label}>
        <BsFillCaretUpFill />
        <p>Сортировка по:</p>
        <span onClick={() => setModal(!modal)}>{sortIndex.name}</span>
      </div>
      {modal && (
        <div className={styles.sort__popup}>
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => clickHandler(obj)}
                className={
                  sortIndex.sortProperty === obj.sortProperty
                    ? styles.active
                    : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
