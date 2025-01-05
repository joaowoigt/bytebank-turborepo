import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TransactionResponse } from "@repo/network/ExtractResponse";

const initialState = {
  transactions: [],
  filteredList: [],
  filter: "All",
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
    setExtract(state, action) {
      const filter = state.filter;
      if (filter === "All") {
        state.filteredList = action.payload;
      } else {
        state.filteredList = action.payload.filter(
          (transaction) => transaction.type === filter
        );
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
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

export const { setTransactions, setExtract, setFilter } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
