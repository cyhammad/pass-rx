import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import deleteModalReducer from "./features/deleteModal/deleteModalSlice";
import editFlashCradReducer from "./features/editFlashCard/editFlashCradSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      deleteModal:deleteModalReducer,
      editFlashCrad:editFlashCradReducer
    },
  });
};
