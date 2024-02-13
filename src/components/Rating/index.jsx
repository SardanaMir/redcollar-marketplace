import React from "react";
import icons from "../../assets/icons/index";
import styles from "./styles.module.scss";

const Rating = ({ rating }) => {
  return (
    <div className={styles.root}>
      <img src={icons.ratingStar} alt="star" />
      <p className='text-s'>{rating}</p>
    </div>
  );
};

export default Rating;
