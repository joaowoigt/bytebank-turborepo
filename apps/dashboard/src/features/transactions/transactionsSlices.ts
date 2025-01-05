import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TransactionResponse } from "@repo/network/ExtractResponse";
import { setupPagination } from "../../utils/paginations";
import { handleFilter } from "../../utils/filter";

export interface TransactionState {
  transactions: TransactionResponse[];
  filteredList: TransactionResponse[];
  filter: string;
  pagination: {
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
  };
}

const initialState: TransactionState = {
  transactions: [],
  filteredList: [],
  filter: "All",
  pagination: {
    totalPages: 1,
    currentPage: 1,
    itemsPerPage: 3,
  },
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
    setExtract(state) {
      // pagination setup
      const transactions: TransactionResponse[] = state.transactions;
      const pageList: TransactionResponse[] = setupPagination(state);

      // return filtered list
      (state.filteredList as TransactionResponse[]) = handleFilter(
        state,
        pageList,
        transactions
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setCurrentPage(state, action) {
      state.pagination.currentPage = action.payload;
    },
  },
});

export const { setTransactions, setExtract, setFilter, setCurrentPage } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
