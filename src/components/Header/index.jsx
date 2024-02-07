import React from 'react'
import components from '../index'
import styles from './style.module.scss'

const Header = () => {
  return (
    <header> 
        <div className={styles.root}>
            <components.Search/>
            <components.Categories/>
            <components.CartButton/>
        </div>
    </header>
  )
}

export default Header