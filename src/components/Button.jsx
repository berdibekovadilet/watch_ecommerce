import React, { useState } from "react";

import styles from "../styles/modules/button.module.scss";

const Button = ({ children }) => {
  const [counterBtn, setCounterBtn] = useState(false);
  const [state, setState] = useState(1);

  const decrementState = () => {
    setState(state - 1);

    if (state === 1) {
      setCounterBtn(false);
      setState(1);
    }
  };

  return (
    <>
      {!counterBtn && (
        <button className={styles.button} onClick={() => setCounterBtn(true)}>
          {children}
        </button>
      )}
      {counterBtn && (
        <div className={styles.wrapper}>
          <button className={styles.counter} onClick={decrementState}>
            -
          </button>
          {state}
          <button
            className={styles.counter}
            onClick={() => setState(state + 1)}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
