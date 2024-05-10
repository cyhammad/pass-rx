import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import deleteModalReducer from "./features/deleteModal/deleteModalSlice";
import editFlashCradReducer from "./features/editFlashCard/editFlashCradSlice";
import brickReducer from "./features/brick/brickSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      deleteModal:deleteModalReducer,
      editFlashCrad:editFlashCradReducer,
      brick:brickReducer
    },
  });
};
