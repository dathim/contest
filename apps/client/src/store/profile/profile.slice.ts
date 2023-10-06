
import { SERVER_URL } from "@/config";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFormField } from "@utility/type-script";

export interface IProfile {
  registration: IFormField[];
}

const initialState: IProfile = {
  registration: []
};

const storeProfile = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/profile`);
    const test = await response.text();
    console.log(response);
    console.log(test);
    return test
  } catch (e) {
    console.error('FAIL FETCH');
    console.error(e);
  }
};

export const storeProfileAction = createAsyncThunk("storeProfile", storeProfile);


export const profileSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setRegistrationData: (state, action: PayloadAction<IFormField>) => {
      const updateIndex = state.registration.findIndex((field: IFormField) => field.fieldName === action.payload.fieldName)
      if (updateIndex !== -1) {
        state.registration[updateIndex].value = action.payload.value;
      } else {
        state.registration.push(action.payload);
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(storeProfileAction.pending, (state) => { console.log("pending", state) });
    builder.addCase(storeProfileAction.fulfilled, (state, action) => { console.log("done", state, action) });
    builder.addCase(storeProfileAction.rejected, (state) => { console.log("fail", state) })
  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice