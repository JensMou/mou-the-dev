import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";
import themeReducer from "./slices/themeSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const reducers = combineReducers({
  alert: alertReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
