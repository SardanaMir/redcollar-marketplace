import React from 'react'
import icons from "../../assets/icons";

import styles from './style.module.scss'

const AddedInCart = () => {
    // const dispatch = useDispatch();
    // const cartItems = useSelector(state => state.cart.items);
    // const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

    return (
      <div className={styles.root}>
        <div  className={styles.wrapper}>
          <img src={icons.bagBlue} alt="small bag" />
          <div className={styles.text}>added in cart</div>
        </div>
      </div>
    );
}

export default AddedInCart