

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import authReducer from './features/auth/auth-slice';


const persistConfig = {
  key: 'auth', 
  storage, 
  whitelist: ['token'], 
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, 
  },
  
});

export const persistor = persistStore(store); 
