import React from "react";
import styles from "./styles.module.scss";

const Message = ({ title }) => {
  return (
    <div className={styles.root}>
      <h3>{title}</h3>
    </div>
  );
};

export default Message;
