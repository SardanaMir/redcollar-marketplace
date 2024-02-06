import React from 'react'
import icons from '../../assets/icons'
import styles from './style.module.scss'

const PriceBlock = ({price}) => {
  return (
    <div className={styles.root}>
        <div className={styles.wrapper}>
            <img src={icons.priceBag} alt="small bag" />
            <div className={styles.price}>${price}</div>
        </div>

        <div className={styles.oldPrice}>$649</div>
    </div>
  )
}

export default PriceBlock