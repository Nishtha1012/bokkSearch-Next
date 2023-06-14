import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  singleBook: {},
  searchTerm: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getAllBooks: (state, action) => {
      state.books = action.payload;
    },
    getSingleBook: (state, action) => {
      state.singleBook = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { getAllBooks, getSingleBook, setSearchTerm } = bookSlice.actions;
export default bookSlice.reducer;
