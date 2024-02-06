import React from 'react'
import components from '..'
import images from '../../assets/images/index'
import styles from './style.module.scss'

const ItemBlock = ({title, description, price, rating, discountPercentage}) => {
    
  return (
    <div className={styles.root}>
        <components.OffSale discountPercentage={discountPercentage}/>
        <img src={images.item} alt={title} />
        <div>
            <components.Rating rating={rating}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>
            {description} Read more 
            </p>
            <components.PriceBlock price={price}/>
        </div>
    </div>
  )
}

export default ItemBlock