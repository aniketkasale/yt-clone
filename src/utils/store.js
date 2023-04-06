import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import searchResultSlice from "./searchResultSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    search: searchSlice,
    searchResult: searchResultSlice,
  },
});

export default store;
