import React, {useState, useRef, useCallback} from 'react'
import debounce from 'lodash.debounce'
import icons from '../../assets/icons'
import styles from './style.module.scss'
import * as Yup from 'yup';
import components from '../index'
import { getSearchProducts } from '../../api';
import {isActive, setSearchValue} from '../../redux/slices/searchSlice'
import {setChosenCategories} from '../../redux/slices/filterSlice'
import {setFilteredProducts} from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const inputRef = useRef()
    
    const schema = Yup.object().shape({
        value: Yup.string()
        .min(4)
        .required(),
    });
    
    const closeHandle = () =>{
        setIsOpen(false)
        dispatch(isActive(!isOpen));
        dispatch(setSearchValue(''));
        dispatch(setFilteredProducts([]));
        setValue('')
    }  

    const searchHandle = () =>{
        setIsOpen(true);
        inputRef.current.focus()
    }

    const updateSearchValue = useCallback(
        debounce(async (data)=>{
            const res = await getSearchProducts(data);
            dispatch(setFilteredProducts(res.products));
            dispatch(setSearchValue(data));
            dispatch(setChosenCategories('')); 
        }, 1000),
        []
    )

    const onChangeInput = (event) =>{
        setValue(event.target.value)
        schema.validate({ value: event.target.value })
        .then(() => {
            updateSearchValue(event.target.value);
          })
        .catch((error) => {
            console.error(error.message);
        })
    }

  return (
    <div className={styles.root}>
        {isOpen ? (
        <div className={styles.searchInput}>
            <img className={styles.icon} src={icons.search} alt="search" />
            <input 
            ref={inputRef} 
            value={value} 
            onChange={onChangeInput}
            className={styles.input} 
            type="text" 
            placeholder='Search...' 
            />
            <div onClick={closeHandle} className={styles.close}>&times;</div>
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