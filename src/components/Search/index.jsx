import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getSearchProducts } from "../../api";
import { isActive, setSearchValue } from "../../redux/slices/searchSlice";
import {
  setChosenCategories,
  setFilteredProducts,
} from "../../redux/slices/filterSlice";
import { schema } from "../../schema";
import icons from "../../assets/icons";
import styles from "./styles.module.scss";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();
  const isSearchInputOpen = useSelector((state) => state.search.isActive);

  const closeHandle = () => {
    dispatch(isActive(false));
    dispatch(setSearchValue(""));
    dispatch(setFilteredProducts([]));
    setValue("");
  };

  const searchHandle = () => {
    dispatch(isActive(true));
  };

  const updateSearchValue = useCallback(
    debounce(async (data) => {
      const res = await getSearchProducts(data);
      dispatch(setFilteredProducts(res.products));
      dispatch(setSearchValue(data));
      dispatch(setChosenCategories(""));
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    schema
      .validate({ value: event.target.value })
      .then(() => {
        updateSearchValue(event.target.value);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className={styles.root}>
      {isSearchInputOpen ? (
        <div className={styles.searchInput}>
          <img className={styles.icon} src={icons.search} alt="search" />
          <input
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            className={styles.input}
            type="text"
            placeholder="Search..."
          />
          <div onClick={closeHandle} className={styles.close}>
            &times;
          </div>
        </div>
      ) : (
        <div onClick={searchHandle} className={styles.wrapper}>
          <img src={icons.search} alt="search" />
        </div>
      )}
    </div>
  );
};

export default Search;
