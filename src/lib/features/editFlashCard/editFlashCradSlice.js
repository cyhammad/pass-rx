import { createSlice } from '@reduxjs/toolkit';

export const editFlashCradSlice = createSlice({
  name: 'editFlashCrad',
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

export const { openModal, closeModal ,toggle} = editFlashCradSlice.actions;

export default editFlashCradSlice.reducer;
