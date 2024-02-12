import React from "react";
import { Link } from "react-router-dom";
import components from "../../components";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";

const Cart = ({ isOpen, setIsOpen }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const channel = new BroadcastChannel('cartChannel');

  channel.onmessage = (event) => {
    console.log('Received message:', event.data);
    console.log('cartItems', cartItems);
  };
  
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
          <div className={styles.flex}>
            <p>{cartItems.length} positions</p>
            <h3>${totalPrice}</h3>
          </div>
          <Link to="/">
            <button className={styles.button}>back to products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
