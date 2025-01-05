import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TransactionResponse } from "@repo/network/ExtractResponse";

const initialState = {
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
      const currentPage = state.pagination.currentPage;
      const itemsPerPage = state.pagination.itemsPerPage;
      state.pagination.totalPages = Math.ceil(
        transactions.length / itemsPerPage
      );
      const startIndex = (currentPage - 1) * itemsPerPage;
      const lastIndex = startIndex + itemsPerPage;

      const pageList = transactions.slice(startIndex, lastIndex);

      // return filtered list
      const filter = state.filter;
      if (filter === "All") {
        (state.filteredList as TransactionResponse[]) = pageList;
      } else {
        (state.filteredList as TransactionResponse[]) = transactions.filter(
          (transaction: TransactionResponse) => transaction.type === filter
        );
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setCurrentPage(state, action) {
      state.pagination.currentPage = action.payload;
    },
  },
});

export const selectTransactions = createSelector(
  (state) => state.transactions.transactions,
  (transactions) => transactions
);

export const selectDebitValue = createSelector(
  selectTransactions,
  (transactions) => {
    const debitList = transactions.filter(
      (transaction: TransactionResponse) => transaction.type === "Débito"
    );
    return debitList.reduce((acc: number, item: TransactionResponse) => {
      return acc + item.valueNumber;
    }, 0);
  }
);

export const selectCreditValue = createSelector(
  selectTransactions,
  (transactions) => {
    const debitList = transactions.filter(
      (transaction: TransactionResponse) => transaction.type === "Crédito"
    );
    return debitList.reduce((acc: number, item: TransactionResponse) => {
      return acc + item.valueNumber;
    }, 0);
  }
);

export const selectFilteredList = createSelector(
  (state) => state.transactions.filteredList,
  (filteredList) => filteredList
);

export const selectFilter = createSelector(
  (state) => state.transactions.filter,
  (filter) => filter
);

export const selectTotalPages = createSelector(
  (state) => state.transactions.pagination.totalPages,
  (totalPages) => totalPages
);

export const { setTransactions, setExtract, setFilter, setCurrentPage } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
