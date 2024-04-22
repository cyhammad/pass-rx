import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import deleteModalReducer from "./features/deleteModal/deleteModalSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      deleteModal:deleteModalReducer
    },
  });
};
