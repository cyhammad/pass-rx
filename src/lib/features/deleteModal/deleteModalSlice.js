import { createSlice } from '@reduxjs/toolkit';

export const deleteModalSlice = createSlice({
  name: 'deleteModal',
  initialState: {
    value: false,
  },
  reducers: {
    openModal: (state) => {
      state.value = true;
    },
    closeModal: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { openModal, closeModal ,toggle} = deleteModalSlice.actions;

export default deleteModalSlice.reducer;
