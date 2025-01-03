import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TransactionResponse } from "@repo/network/ExtractResponse";
import { useSelector } from "react-redux";

const initialState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions(state, action) {
      state.transactions = action.payload;
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

export const { setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
