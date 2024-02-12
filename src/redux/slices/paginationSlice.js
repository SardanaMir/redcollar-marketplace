import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    items: [],
    currentPage: 1,
    totalPages: null,
    itemsPerPage: 4,
    paginatedItems: []
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = Math.ceil(action.payload / state.itemsPerPage);
    },
    setPaginatedItems(state, action){
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      state.paginatedItems = state.items.slice(startIndex, startIndex + state.itemsPerPage);
    },
    setItems(state, action){
      state.products = action.payload;
    }
  },
});

export const { setCurrentPage, setTotalPages, setPaginatedItems, setItems } = paginationSlice.actions;

export default paginationSlice.reducer;