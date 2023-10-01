
import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { actions: userActions, reducer: userReducer } = usersSlice