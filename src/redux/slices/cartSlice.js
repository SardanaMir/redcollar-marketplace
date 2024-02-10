import { createSlice } from '@reduxjs/toolkit';

const initialState={
  totalPrice: 0,
  items:[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action){

    const findItem = state.items.find((obj) => obj.id === action.payload.id)
    
    if (!findItem) {
      state.items.push(action.payload);
    }
    
    state.totalPrice = state.items.reduce((sum, obj) =>{
      return obj.price + sum
    }, 0)

  },
  plusItem(state, action){
    const findItem = state.items.find((obj) => obj.id === action.payload)
    
    if (findItem) {
      findItem.count++
      findItem.totalItemPrice = findItem.count * findItem.price
    }
    
    state.totalPrice = state.items.reduce((sum, obj) =>{
      return obj.price * obj.count + sum
    }, 0)

  },
  minusItem(state, action){
    const findItem = state.items.find((obj) => obj.id === action.payload)
    
    if(findItem.count > 1){
      findItem.count--
      findItem.totalItemPrice = findItem.count * findItem.price
    } else{
      state.items = state.items.filter(obj => obj.id !== action.payload);

    }

    state.totalPrice = state.items.reduce((sum, obj) =>{
      return obj.price * obj.count + sum
    }, 0)
  },

  removeItem(state, action){
    state.items = state.items.filter(obj => obj.id !== action.payload);
  },

  clearItems(state){
    state.items = [];
    state.totalPrice = 0;
  },

  },
});

export const { addItem, removeItem, clearItems, minusItem, plusItem } = cartSlice.actions;
export default cartSlice.reducer;
