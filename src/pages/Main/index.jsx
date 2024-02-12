import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import { allProducts, getPaginatedProducts } from "../../api";
import { setProducts } from "../../redux/slices/productsSlice.js";
import { setTotalPages } from "../../redux/slices/paginationSlice";
import {isActive, setSearchValue} from '../../redux/slices/searchSlice'

import components from "../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import UseInfiniteScroll from "../../hooks/UseInfiniteScroll/index.jsx";

const Main = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.products);
  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts
  );
  const searchValue = useSelector((state) => state.search.searchValue);
  const [isOpen, setIsOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const toggleCart = () => {
    setIsOpen(true);
    dispatch(isActive(false));
    console.log("toggle");
  };

  const fetchProducts = async (pageNum) => {
    try {
      const data = await getPaginatedProducts(pageNum);
      // console.log(data);
      if (initialLoading) {
        setInitialLoading(false);
      }
      dispatch(setProducts(data.products));
      // console.log("main", data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(0);
  }, []);

  // useEffect(() => {}, [filteredProducts, searchValue]);

  const { isFetchingMore, error, handleLoadMore } =
    UseInfiniteScroll(fetchProducts);

  return (
    <>
      {isOpen ? (
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <>
          <components.Header onCartButtonClick={toggleCart} setIsOpen={setIsOpen} />
          <div className={styles.root}>
            {/* {
              items.map(item =>(
                <components.ItemBlock {...item}/>
              ))
            } */}
            {initialLoading ? (
              <h2>Загрузка...</h2>
            ) : (
              <>
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((item, index) => (
                    <components.ItemBlock
                      // onClickAdd={onClickAdd}
                      key={item.id}
                      {...item}
                    />
                  ))
                ) : searchValue.length > 0 && filteredProducts.length === 0 ? (
                  <div>Ничего не найдено</div>
                ) : searchValue.length === 0 &&
                  filteredProducts.length === 0 ? (
                  items.map((item, index) => (
                    <components.ItemBlock key={item.id} {...item} />
                  ))
                ) : (
                  <h2>Ошибка попробуйте перезагрузить страницу</h2>
                )}
              </>
            )}
          </div>
          {isFetchingMore && <h2>Загрузка дополнительных товаров...</h2>}
          {error && <button onClick={handleLoadMore}>Загрузить ещё</button>}
        </>
      )}
    </>
  );
};

export default Main;
