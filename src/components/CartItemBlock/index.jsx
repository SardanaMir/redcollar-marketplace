import React from 'react'
import icons from '../../assets/icons/index'
import {plusItem, minusItem} from '../../redux/slices/cartSlice'
import styles from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const CartItemBlock = (props) => {

    const dispatch = useDispatch()
    // const totalItemPrice = useSelector(state => state.items)

    const onClickPlus = () =>{
        console.log(props.id)
        dispatch(plusItem(props.id))
    }
    const onClickMinus = () =>{
        console.log(props.id)
        dispatch(minusItem(props.id))
    }
  return (
    <div className={styles.block}>
        <div className={styles.itemWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.image} src={props.thumbnail} alt={props.title} />
            </div>

            <div className={styles.counterWrapper}>
                <h4 className='text-s'>{props.title}</h4>

                <div className={styles.btn}>
                    <button onClick={onClickMinus} className={styles.roundBtn}>-</button>
                    <div className={styles.counter}>{props.count}</div>
                    <button onClick={onClickPlus} className={styles.roundBtn}>+</button>
                </div>
            </div>
            <h4>${props.totalItemPrice}</h4>

        </div>
    </div>
  )
}

export default CartItemBlock