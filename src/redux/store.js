import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import dataSlice from "./slice/dataSlice";
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root', //warping the store to use persist redux library 
  storage,
}; 

const persistedUserReducer = persistReducer(persistConfig, dataSlice); //what for? -- keep the data persistant in localstorage

export const store = configureStore({
  reducer: {
    data: persistedUserReducer,
  },
  middleware:[thunk]
});

export const persistor = persistStore(store);
