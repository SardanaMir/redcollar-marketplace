import React, { useEffect, useState } from 'react'
import {allProducts} from '../../api'
import {setProducts} from '../../redux/slices/productsSlice.js';
import components from '../../components/index.js'
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss'

const Main = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const data = await allProducts();
        dispatch(setProducts(data.products))
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  console.log('items', items)
  return (
    <>
      <components.Header/>
      <div className={styles.root}>
        {items.map((item, index) =>(
          <components.ItemBlock key={item.id} {...item}/>
        ))}
    </div>
    </>

  )
}

export default Main