import { configureStore } from "@reduxjs/toolkit";
import transactions from "../features/transactions/transactionsSlices";

const store = configureStore({
  reducer: {
    transactions,
  },
});

export default store;
