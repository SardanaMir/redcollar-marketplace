import React from 'react'
import styles from './style.module.scss'

const OffSale = ({discountPercentage}) => {
  return (
    <div className={styles.root}>
        <div className={styles.discount}>{discountPercentage}%</div>
        <p className='text-s'>off sale</p>
    </div>
  )
}

export default OffSale