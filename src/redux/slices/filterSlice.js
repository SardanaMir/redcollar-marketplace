import { createSlice } from '@reduxjs/toolkit';

const initialState={
  filteredProducts: [],
  chosenCategory: ''
};

const filterSlice = createSlice({
  name: 'filteredProducts',
  initialState,
  reducers: {
    setChosenCategories: (state, action) =>{
      state.chosenCategory = action.payload
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },

  },
});

export const { setFilteredProducts, setChosenCategories } = filterSlice.actions;
export default filterSlice.reducer;
