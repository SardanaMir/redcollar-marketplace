import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import { allProducts, getPaginatedProducts } from "../../api";
import { setProducts } from "../../redux/slices/productsSlice.js";
import { setTotalPages } from '../../redux/slices/paginationSlice';
import components from "../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import UseInfiniteScroll from "../../hooks/InfiniteScroll/index.jsx";

const Main = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.products);
  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts
  );
  const searchValue = useSelector((state) => state.search.searchValue);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true); // Добавлено новое состояние
  
  const toggleCart = () => {
    setIsOpen(true);
    console.log("toggle");
  };

  const fetchProducts = async (pageNum) => {
    try {
      const data = await getPaginatedProducts(pageNum);
      
      setIsLoading(false);
      
      if (initialLoading) { // Проверка на отображение isLoading только при первой загрузке
        setInitialLoading(false);
      }
      
      dispatch(setProducts(data.products));
      console.log('main', data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false); // Дополнительное устанавливание isLoading в false в случае ошибки
    }
  };
  
  useEffect(() => {
    fetchProducts(0);
  }, []);

  useEffect(() => {}, [filteredProducts, searchValue]);
  
  const { isFetchingMore, error, handleLoadMore } = UseInfiniteScroll(fetchProducts, isLoading, setIsLoading);

  return (
    <>
      {isOpen ? (
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <>
          <components.Header onCartButtonClick={toggleCart} />
          <div className={styles.root}>
            {initialLoading ? (
              <h2>Загрузка...</h2>
            ) : (
              <>
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((item, index) => (
                    <components.ItemBlock
                      onClickAdd={onClickAdd}
                      {...item}
                    />
                  ))
                ) : searchValue.length > 0 && filteredProducts.length === 0 ? (
                  <div>Ничего не найдено</div>
                ) : searchValue.length === 0 && filteredProducts.length === 0 ? (
                  items.map((item, index) => (
                    <components.ItemBlock {...item} />
                  ))
                ) : (
                  <h2>Ошибка. Попробуйте перезагрузить страницу</h2>
                )}
              </>
            )}
            {isFetchingMore && <div>Загрузка дополнительных товаров...</div>}
            {error && <button onClick={handleLoadMore}>Загрузить ещё</button>}
          </div>
        </>
      )}
    </>
  );
};

export default Main;
