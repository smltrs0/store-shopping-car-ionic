import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './domain/productsSlice';
import shoppingCardReducer from './domain/shoppingCarSlice';

import { persistReducer, persistStore } from 'redux-persist';
import storage from './storageConfig';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  shoppingCard: shoppingCardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;