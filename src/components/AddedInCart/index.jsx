import React from "react";
import icons from "../../assets/icons";
import styles from "./styles.module.scss";

const AddedInCart = () => {
  return (
    <div className={styles.root}>
      <div className={`${styles.wrapper} wrapper`}>
        <img src={icons.bagBlue} alt="small bag" />
        <p className={`${styles.text} text-s`}>added in cart</p>
      </div>
    </div>
  );
};

export default AddedInCart;
