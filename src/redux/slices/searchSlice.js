import { createSlice } from '@reduxjs/toolkit';

const initialState={
  isActive: false,
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    isActive: (state, action) => {
      state.isActive = action.payload;
    },
    setSearchValue: (state, action) =>{
      state.searchValue = action.payload;
    }
  },
});

export const { isActive, setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
