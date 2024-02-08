import React, { useEffect, useState } from 'react'
import {allProducts} from '../../api'
import {setProducts} from '../../redux/slices/productsSlice.js';
import components from '../../components/index.js'
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss'

const Main = () => {
  const dispatch = useDispatch();

  const items = useSelector(state => state.products.products);
  const filteredProducts = useSelector(state => state.filter.filteredProducts)
  const searchValue = useSelector(state => state.search.searchValue);

  console.log('filter', filteredProducts);
  console.log('searchvalue', searchValue);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await allProducts();
        dispatch(setProducts(data.products))
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
    }, [dispatch]);

    useEffect(() => {

    }, [filteredProducts, searchValue]);

  return (
    <>
      <components.Header />
      <div className={styles.root}>
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <components.ItemBlock key={item.id} {...item} />
          ))
        ) : searchValue.length > 0 && filteredProducts.length === 0 ? (
          <div>Ничего не найдено</div>
        )
         : searchValue.length === 0 && filteredProducts.length === 0 ?
         (
          items.map((item, index) => (
            <components.ItemBlock key={item.id} {...item} />
          ))
        ):(<></>)}
      </div>
    </>
  );
}

export default Main