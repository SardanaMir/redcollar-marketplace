import React from "react";
import { useSelector } from "react-redux";
import components from "../../components";
import styles from "./styles.module.scss";

const Cart = ({ setIsOpen }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.header}>
            <components.CartButton />
            <div onClick={() => setIsOpen(false)} className={styles.close}>
              &times;
            </div>
          </div>
          <div>
            {cartItems.length === 0 ? (
              <h3 className={styles.text}>{"cart is empty :("}</h3>
            ) : (
              cartItems.map((item) => (
                <components.CartItemBlock key={item.id} {...item} />
              ))
            )}
          </div>
        </div>
        <div>
          <div className={styles.totalPriceWrapper}>
            <p className="text-xs">{cartItems.length} positions</p>
            <h3>${totalPrice}</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className={`${styles.button} text-l`}
          >
            back to products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
