import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./";

export interface ThemeState {
  isInDarkMode: boolean;
}

const initialState: ThemeState = {
  isInDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.isInDarkMode = action.payload;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme;
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
