import React from 'react'
import components from '..'
import images from '../../assets/images/index'
import styles from './style.module.scss'
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
// title, description, price, rating, discountPercentage, images, item, 
const ItemBlock = (props) => {
    // console.log('itemblock', props)
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <div className={styles.root}>
        <components.OffSale discountPercentage={props.discountPercentage}/>
         <img src="" alt="фото товара" />   
        <div>
            <components.Rating rating={props.rating}/>
            <h3 className='text-s'>{props.title}</h3>
            <p className='text-xs'>
            {props.description} Read more 
            </p>
            <components.PriceBlock price={props.price} item={props}/>
        </div>
    </div>
  )
}

export default ItemBlock