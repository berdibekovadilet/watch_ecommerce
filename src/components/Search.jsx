import React from "react";
import { BiSearch } from "react-icons/bi";
import styles from "../styles/modules/search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.search__form}>
      <div className={styles.search__wrapper}>
        <BiSearch className={styles.icon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Поиск часов..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <button className={styles.search__button}>Поиск</button>
    </div>
  );
};

export default Search;
