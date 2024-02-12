import React from 'react'
import components from '../index'
import styles from './style.module.scss'

const Header = (props) => {
  // console.log('header', props)
  return (
    <header> 
        <div className={styles.root}>
            <components.Search/>
            <components.Categories/>
            <components.CartButton onCartButtonClick={props.onCartButtonClick}/>
            {/* <button onClick={props.onCartButtonClick}>open cart</button> */}
        </div>
    </header>
  )
}

export default Header