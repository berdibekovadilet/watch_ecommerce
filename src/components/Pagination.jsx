import React from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/modules/pagination.module.scss";

const Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon__wrapper}>
        <FaChevronLeft className={styles.icon} />
      </div>
      <div className={styles.active}>1</div>
      <div className={styles.page__item}>2</div>
      <div className={styles.page__item}>3</div>
      <div className={styles.icon__wrapper}>
        <FaChevronRight className={styles.icon} />
      </div>
    </div>
  );
};

export default Pagination;
