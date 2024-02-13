import React from "react";
import components from "../index";
import styles from "./styles.module.scss";

const Header = ({ onCartButtonClick }) => {
  return (
    <header>
      <div className={styles.root}>
        <components.Search />
        <components.Categories />
        <components.CartButton onCartButtonClick={onCartButtonClick} />
      </div>
    </header>
  );
};

export default Header;
