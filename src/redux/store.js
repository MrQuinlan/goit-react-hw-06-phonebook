import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { items } from './ContactForm/ContactForm-reducer';
import { filter } from './Filter/Filter-reducer';

const contacts = combineReducers({ items, filter });

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, contacts);

const store = configureStore({
    reducer: {
        persistedReducer,
        devTools: process.env.NODE_ENV === 'development',
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

let persistor = persistStore(store);

export { store, persistor };
