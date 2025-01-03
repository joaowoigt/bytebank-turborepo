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

export const { setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
