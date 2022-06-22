import React, { useCallback } from "react";
import { BiSearch } from "react-icons/bi";
import debounce from "lodash.debounce";
import styles from "../styles/modules/search.module.scss";
import { useState } from "react";

const Search = ({ setSearchValue }) => {
  const [value, setValue] = useState("");

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <div className={styles.search__form}>
      <div className={styles.search__wrapper}>
        <BiSearch className={styles.icon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Поиск часов..."
          value={value}
          onChange={onChangeInput}
        />
      </div>
      <button className={styles.search__button}>Поиск</button>
    </div>
  );
};

export default Search;
