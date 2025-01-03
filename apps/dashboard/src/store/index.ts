import { configureStore } from "@reduxjs/toolkit";
import transactions from "../features/transactions/transactionsSlices";
import filter from "../features/filter/filtersSlices";
import filteredList from "../features/filteredList/filteredListSlices";

const store = configureStore({
  reducer: {
    transactions,
    filter,
    filteredList,
  },
});

export default store;
