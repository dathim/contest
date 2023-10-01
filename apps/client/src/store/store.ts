import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { api } from './api/api';
import { configApi } from './api/config.api';
import { reducers } from './reducers';


export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(api.middleware).concat(configApi.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;