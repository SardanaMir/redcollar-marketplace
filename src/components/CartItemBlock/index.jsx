import React from "react";
import { useDispatch } from "react-redux";
import { plusItem, minusItem } from "../../redux/slices/cartSlice";
import styles from "./styles.module.scss";

const CartItemBlock = (props) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(plusItem(props.id));
  };
  const onClickMinus = () => {
    dispatch(minusItem(props.id));
  };
  return (
    <div className={styles.block}>
      <div className={styles.itemWrapper}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.image}
            src={props.thumbnail}
            alt={props.title}
          />
        </div>
        <div className={styles.counterWrapper}>
          <h4 className="text-s">{props.title}</h4>
          <div className={styles.btn}>
            <button onClick={onClickMinus} className={styles.roundBtn}>
              -
            </button>
            <div className={`${styles.counter} text-xs`}>{props.count}</div>
            <button onClick={onClickPlus} className={styles.roundBtn}>
              +
            </button>
          </div>
        </div>
        <h4 className="text-s">${props.totalItemPrice}</h4>
      </div>
    </div>
  );
};

export default CartItemBlock;
