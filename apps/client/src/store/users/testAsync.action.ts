
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];


const sayTest = async () => {
  try {
    const response = await fetch('http://localhost:3000');
    const test = await response.text();
    console.log(response);
    console.log(test);
    return test
  } catch (e) {
    console.error('FAIL FETCH');
    console.error(e);
  }
};

export const makeTestAction = createAsyncThunk("testAsync", sayTest);

export const testAsync = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(makeTestAction.pending, (state) => { state.push("loaing") });
    builder.addCase(makeTestAction.fulfilled, (state, action) => { state.push(action.payload) });
    builder.addCase(makeTestAction.rejected, (state) => { state.push("rejected") })
  }
})

export const { actions, reducer } = testAsync




