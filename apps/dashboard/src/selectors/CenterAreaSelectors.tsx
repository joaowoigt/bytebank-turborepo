import { createSelector } from "@reduxjs/toolkit";

export const selectBalance = createSelector(
  (state) => state.centerArea.balance,
  (balance) => balance
);

export const selectName = createSelector(
  (state) => state.centerArea.name,
  (name) => name
);
