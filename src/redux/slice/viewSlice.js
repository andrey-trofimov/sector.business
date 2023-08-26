import { createSlice } from "@reduxjs/toolkit";
import { postsPerPage } from "../../settings";

const initialState = {
  posts: [],
  shownPosts: [],
  postsPerPage,
  currentPage: 0,
  error: "",
  searchText: "",
  fieldName: "id",
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setShownPosts: (state, action) => {
      state.shownPosts = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearch: (state, action) => {
      state.searchText = action.payload;
    },
    setFieldName: (state, action) => {
      state.fieldName = action.payload;
    },
  },
});

export const {
  setPosts,
  setShownPosts,
  setError,
  setCurrentPage,
  setSearch,
  setFieldName,
} = viewSlice.actions;

export default viewSlice.reducer;
