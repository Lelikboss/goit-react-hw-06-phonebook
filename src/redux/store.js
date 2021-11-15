// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsList, contactFilter } from './contacts/reducers';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
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

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

// export const store = createStore(contactReducer, composeWithDevTools());
const contactReducer = combineReducers({
  contacts: contactsList,
  filter: contactFilter,
});
const persistedContactReducer = persistReducer(persistConfig, contactReducer);
export const store = configureStore({
  reducer: persistedContactReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
