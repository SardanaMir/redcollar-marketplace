import React from 'react'
import icons from '../../assets/icons'
import styles from './style.module.scss'

const CartButton = () => {
  return (
    <div className={styles.root}>
        <img src={icons.purpleBag} alt="cart button" />
        <p className={styles.text}>cart</p>
    </div>
  )
}

export default CartButton