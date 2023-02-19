import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isMenuOpen: true,
    showFilterList: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    hideFilterList: (state) => {
      state.showFilterList = false;
    },
  },
});

export const { toggleMenu, closeMenu, hideFilterList } = navSlice.actions;
export default navSlice.reducer;
