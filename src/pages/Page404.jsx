import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

import styles from "../styles/modules/page404.module.scss";

const Page404 = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        <span>😕</span> <br /> Ничего не найдено
      </h1>
      <p>К сожалению данная страница отсутвует в нашем интернет-магазине</p>
      <Link to="/">
        <Button>Вернуться на главную</Button>
      </Link>
    </div>
  );
};

export default Page404;
