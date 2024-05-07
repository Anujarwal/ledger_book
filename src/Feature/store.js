import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./todo/transactionsSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export default store;
