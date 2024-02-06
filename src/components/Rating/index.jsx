import React from 'react'
import icons from '../../assets/icons/index'
import styles from './style.module.scss'

const Rating = ({rating}) => {
  return (
    <div className={styles.root}>
        <img src={icons.ratingStar} alt="star" />
        <p className={styles.rating}>{rating}</p>
    </div>
  )
}

export default Rating