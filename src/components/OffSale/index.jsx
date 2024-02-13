import React from "react";
import styles from "./styles.module.scss";

const OffSale = ({ discountPercentage }) => {
  return (
    <div className={styles.root}>
      <p className={`${styles.discount} text-s`}>{discountPercentage}%</p>
      <p className={`${styles.text} text-s`}>off sale</p>
    </div>
  );
};

export default OffSale;
