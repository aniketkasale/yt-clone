import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import searchResultSlice from "./searchResultSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    chat: chatSlice,
    nav: navSlice,
    search: searchSlice,
    searchResult: searchResultSlice,
  },
});

export default store;
