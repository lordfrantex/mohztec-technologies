import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/CartSlice'

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const reducer = combineReducers({
    cart: cartReducer,

})



const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

});