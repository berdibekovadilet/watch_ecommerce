import React from "react";

import styles from "../styles/modules/app.module.scss";

const SectionTitle = ({ name }) => {
  return <h2 className={styles.section__title}>{name}</h2>;
};

export default SectionTitle;
