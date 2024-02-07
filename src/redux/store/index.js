import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../slices/productsSlice';
import searchReducer from '../slices/searchSlice'
import categoriesReducer from '../slices/categoriesSlice'
import filterReducer from '../slices/filterSlice'

export default configureStore({
    reducer : {
        products: productsReducer,
        search: searchReducer,
        categories: categoriesReducer,
        filter: filterReducer
    }
});