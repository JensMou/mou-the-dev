import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface AlertState {
    open: boolean;
}

export const initialState: AlertState = {
    open: true,
};

export const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        hide: (state) => {
            state.open = false;
        },
    },
});

export const { hide } = alertSlice.actions;

export const selectAlert = (state: RootState) => state.alert.open;

export default alertSlice.reducer;
