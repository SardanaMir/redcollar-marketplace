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

const ItemBlock = ({title, description, price, rating, discountPercentage, images}) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <div className={styles.root}>
        <components.OffSale discountPercentage={discountPercentage}/>
        {/* <Carousel>
            {   
                images.map(image => (
                <div className={styles.wrapper}>
                    <img className={styles.image} src={image} alt={title} />
                </div>
            ))
            }
        </Carousel> */}

        <div>
            <components.Rating rating={rating}/>
            <h3 className='text-s'>{title}</h3>
            <p className='text-xs'>
            {description} Read more 
            </p>
            <components.PriceBlock price={price}/>
        </div>
    </div>
  )
}

export default ItemBlock