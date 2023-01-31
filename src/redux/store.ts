import {configureStore} from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import useCart from "./useCart/reducer";

const persistConfig = {
    key: 'cart',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, useCart);

const store = configureStore({
    reducer: {
        cart: persistedReducer,
    }
})

const persistor = persistStore(store);

export {store, persistor}


