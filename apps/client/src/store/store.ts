import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reducer as userReducer } from './users/user.slice';
import { reducer as testAsync } from './users/testAsync.action';
import { api } from './api/api';

const reducers = combineReducers({
  users: userReducer,
  testAsync: testAsync,
  [api.reducerPath]: api.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(api.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;