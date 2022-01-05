import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
