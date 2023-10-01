import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api/api';
import { configApi } from './api/config.api';
import { userReducer } from './users/user.slice';
import { testAsyncReducer } from './users/testAsync.action';
import { modalReducer } from './modal/modal.slice'

export const reducers = combineReducers({
  users: userReducer,
  testAsync: testAsyncReducer,
  [api.reducerPath]: api.reducer,
  [configApi.reducerPath]: configApi.reducer,
  modal: modalReducer
});