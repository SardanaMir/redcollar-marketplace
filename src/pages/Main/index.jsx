import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import { getPaginatedProducts } from "../../api";
import { setProducts } from "../../redux/slices/productsSlice";
import { isActive } from "../../redux/slices/searchSlice";
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
  };

  const fetchProducts = async (pageNum) => {
    try {
      const data = await getPaginatedProducts(pageNum);
      if (initialLoading) {
        setInitialLoading(false);
      }
      dispatch(setProducts(data.products));
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
          <components.Header
            onCartButtonClick={toggleCart}
            setIsOpen={setIsOpen}
          />
          <div className={styles.root}>
            {initialLoading ? (
              <div className={styles.initialLoadingWrapper}>
                <components.Loading />
              </div>
            ) : (
              <>
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <components.ItemBlock key={item.id} {...item} />
                  ))
                ) : searchValue.length > 0 && filteredProducts.length === 0 ? (
                  <components.Message
                    title={"Ничего не найдено, попробуйте изменить запрос"}
                  />
                ) : searchValue.length === 0 &&
                  filteredProducts.length === 0 ? (
                  items.map((item) => (
                    <components.ItemBlock key={item.id} {...item} />
                  ))
                ) : (
                  <components.Message
                    title={"Ошибка попробуйте перезагрузить страницу"}
                  />
                )}
              </>
            )}
          </div>
          {isFetchingMore && <div className={styles.loadingWrapper}><components.Loading /></div>}
          {error && <button onClick={handleLoadMore}>Загрузить ещё</button>}
        </>
      )}
    </>
  );
};

export default Main;
