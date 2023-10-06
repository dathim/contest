
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFormField } from "@utility/type-script";

export interface IProfile {
  registration: IFormField[];
}

const initialState: IProfile = {
  registration: []
};

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
  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice