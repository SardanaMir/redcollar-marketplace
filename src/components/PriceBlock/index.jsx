import React from "react";
import icons from "../../assets/icons";
import components from "..";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import styles from "./style.module.scss";

const PriceBlock = ({ item }) => {
  const dispatch = useDispatch();
  const oldPrice = Math.round(
    item.price / ((100 - item.discountPercentage) / 100)
  );
  const cartItems = useSelector((state) => state.cart.items);
  // console.log("priceblock", cartItems);

  const onClickAdd = () => {
    item = { ...item, count: 1, totalItemPrice: item.price };
    dispatch(addItem(item));
  };
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  return (
    <div className={styles.root}>
      {isInCart ? (
        <components.AddedInCart />
      ) : (
        <div onClick={onClickAdd} className={styles.wrapper}>
          <img src={icons.priceBag} alt="small bag" />
          <div className={styles.price}>${item.price}</div>
        </div>
      )}
      <div className={styles.oldPrice}>${oldPrice}</div>
    </div>
  );
};

export default PriceBlock;
