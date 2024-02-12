import { createSlice } from '@reduxjs/toolkit';

const initialState={
  products: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      action.payload.forEach((newProduct) => {
        if (!state.products.find(product => product.id === newProduct.id)) {
          state.products.push(newProduct);
        }
      });
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
