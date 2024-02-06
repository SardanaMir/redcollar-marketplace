import React from 'react'
import components from '../index'
import styles from './style.module.scss'
const Header = () => {
  return (
    <header >
        <components.Search/>
        <components.CartButton/>

    </header>
  )
}

export default Header