
import { IModal } from "@/components/Modals/Modals";
import { createSlice } from "@reduxjs/toolkit";
import { Randoms } from "@utility/helpers"

const initialState: IModal[] = [];

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.push({ id: Randoms.uniqueId(), type: payload })
    },
    closeModal: (state, action) => {
      {
        return state.filter((modals: IModal) => modals.id !== action.payload)
      }
    }
  }
})

export const { actions: modalActions, reducer: modalReducer } = modalSlice