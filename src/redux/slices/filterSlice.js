import { createSlice } from '@reduxjs/toolkit';

const initialState={
    filteredProducts: [],
    chosenCategory: []
};

const filterSlice = createSlice({
  name: 'filteredProducts',
  initialState,
  reducers: {
    setChosenCategories: (state, action) =>{
        state.chosenCategory.push(action.payload)
        state.chosenCategory = action.payload
    },
    setFilteredProducts: (state, action) => {
        state.filteredProducts = state.filteredProducts.concat(action.payload);
        state.filteredProducts = state.filteredProducts.filter(product => state.chosenCategory.includes(product.category));
      console.log('action', action.payload)
      console.log('filtered', state.filteredProducts)
    },

  },
});

export const { setFilteredProducts, setChosenCategories } = filterSlice.actions;
export default filterSlice.reducer;
