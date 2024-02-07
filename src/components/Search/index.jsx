import React, {useState} from 'react'
import icons from '../../assets/icons'
import styles from './style.module.scss'
import components from '../index'
import {isActive} from '../../redux/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()

    const searchHandle = () =>{
        setIsOpen(!isOpen)
        dispatch(isActive(!isOpen))
    }   

  return (
    <div className={styles.root}>
        {isOpen ? (
        <div className={styles.searchInput}>
            <img className={styles.icon} src={icons.search} alt="search" />
            <input className={styles.input} type="text" placeholder='Search...' />
            <div onClick={searchHandle} className={styles.close}>&times;</div>
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