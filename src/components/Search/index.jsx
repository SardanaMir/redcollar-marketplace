import React, {useState} from 'react'
import icons from '../../assets/icons'
import styles from './style.module.scss'
import components from '../index'

const Search = () => {
    const [isOpen, setIsOpen] = useState(false)
    const searchHandle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        {isOpen ? (
        <div>
            <img className={styles.icon} src={icons.search} alt="search" />
            <input className={styles.input} type="text" />
            <div className={styles.close}>&times;</div>
        </div>
        ):(
            <div onClick={searchHandle} className={styles.wrapper}>
                <img src={icons.search} alt="search" />
            </div>
        )}

    </div>
  )
}

export default Search