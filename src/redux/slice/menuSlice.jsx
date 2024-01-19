import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavMenuOpen: false,
  isCategoryMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleNavMenu: (state) => {
      state.isNavMenuOpen = !state.isNavMenuOpen;
    },
    toggleCategoryMenu: (state) => {
      state.isCategoryMenuOpen = !state.isCategoryMenuOpen;
    },
  },
});

export const { toggleNavMenu, toggleCategoryMenu } = menuSlice.actions;
export default menuSlice.reducer;
