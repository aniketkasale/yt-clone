import { createSlice } from "@reduxjs/toolkit";
import { SEARCH_RESULT_API } from "./constants";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    result: [],
  },
  reducers: {
    getSearchResults: async (state, action) => {
      const data = await fetch(SEARCH_RESULT_API + action.payload);
      const json = await data.json();
      state.result = json.items;
    },
  },
});

export const { getSearchResults, result } = searchResultSlice.actions;

export default searchResultSlice.reducer;
