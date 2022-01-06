import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ThemeState {
  darkTheme: boolean;
}

const initialState: ThemeState = { darkTheme: false };

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.darkTheme = action.payload.darkTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.darkTheme;

export default themeSlice.reducer;
