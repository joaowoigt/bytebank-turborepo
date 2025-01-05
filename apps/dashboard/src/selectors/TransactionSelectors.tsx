import { createSelector } from "@reduxjs/toolkit";
import { TransactionResponse } from "@repo/network/ExtractResponse";

export const selectTransactions = createSelector(
  (state) => state.transactions.transactions,
  (transactions) => transactions
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

export const selectCurrentPage = createSelector(
  (state) => state.transactions.pagination.currentPage,
  (currentPage) => currentPage
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
