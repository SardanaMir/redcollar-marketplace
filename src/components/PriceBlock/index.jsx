import React from 'react'
import icons from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import styles from './style.module.scss'

const PriceBlock = ({price, item}) => {
  const dispatch = useDispatch();
  // console.log("PriceBlock", item)

  const onClickAdd = () => {
    item = {...item, count: 1, totalItemPrice: item.price}
    dispatch(addItem(item))
    console.log('onclick', item)
  }

  return (
    <div className={styles.root}>
        <div onClick={onClickAdd} className={styles.wrapper}>
            <img src={icons.priceBag} alt="small bag" />
            <div className={styles.price}>${price}</div>
        </div>
        <div className={styles.oldPrice}>$549</div>
    </div>
  )
}

export default PriceBlock