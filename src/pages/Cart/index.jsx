import React from 'react'
import components from '../../components'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.totalPrice)

    console.log(cartItems)


  return (
    <div className={styles.overlay}>
        <div className={styles.wrapper}>
            <div>
                <div className={styles.header}>
                    <components.CartButton/>
                    <div className={styles.close}>&times;</div>
                </div>
                {/* <h3 className={styles.text}>{'cart is empty :('}</h3> */}
                <div>
                {
                    cartItems.map(item =>(
                        <components.CartItemBlock key={item.id} {...item} />
                    ))
                }
                </div>
            </div>


            <div>
                <div className={styles.flex}>
                    <p>{cartItems.length} positions</p>
                    <h3>${totalPrice}</h3>
                </div>
                <button className={styles.button}>back to products</button>
            </div>
        </div>
    </div>
  )
}

export default Cart