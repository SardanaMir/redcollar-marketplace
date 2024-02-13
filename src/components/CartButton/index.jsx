import React from 'react'
import icons from '../../assets/icons'
import styles from './styles.module.scss'

const CartButton = ({ onCartButtonClick }) => {

  return (
    <button className={styles.root} onClick={onCartButtonClick}>
        <img src={icons.purpleBag} alt="cart button" />
        <p className={`${styles.text} text-m`}>cart</p>
    </button>
  )
}

export default CartButton