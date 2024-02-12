import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import { allProducts } from "../../api";
import { setProducts } from "../../redux/slices/productsSlice.js";
import components from "../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import UseInfiniteScroll from "../../hooks/InfiniteScroll/index.jsx";

const Main = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.products);
  const filteredProducts = useSelector((state) => state.filter.filteredProducts);
  const searchValue = useSelector((state) => state.search.searchValue);
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, isFetchingMore, error, handleLoadMore } = UseInfiniteScroll(fetchProducts); // Передаем fetchProducts как параметр
  
  const toggleCart = () => {
    setIsOpen(true);
    console.log("toggle");
  };

  const fetchProducts = async (pageNumber) => { 
    try {
      const data = await allProducts(pageNumber);
      dispatch(setProducts(data.products));
      console.log()
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(1); // Загрузка начальной страницы
  }, []);

  useEffect(() => {}, [filteredProducts, searchValue]);

  return (
    <>
      {isOpen ? (
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <>
          <components.Header onCartButtonClick={toggleCart} />
          <div className={styles.root}>
            {isLoading ? (
              <h2>Загрузка...</h2>
            ) : (
              <>
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((item, index) => (
                    <components.ItemBlock
                      onClickAdd={onClickAdd} // Предполагается, что onClickAdd определен где-то в вашем коде
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
            {isFetchingMore && <div>Загрузка дополнительных товаров...</div>}
            {error && <button onClick={handleLoadMore}>Загрузить ещё</button>}
          </div>
        </>
      )}
    </>
  );
};

export default Main;
