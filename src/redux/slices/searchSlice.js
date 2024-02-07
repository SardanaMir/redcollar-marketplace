import { createSlice } from '@reduxjs/toolkit';

const initialState={
    isActive: false
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    isActive: (state, action) => {
      state.isActive = action.payload;
      console.log(action.payload)
    },
  },
});

export const { isActive } = searchSlice.actions;
export default searchSlice.reducer;
