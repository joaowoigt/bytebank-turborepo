import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredList: [],
};

const filteredListSlice = createSlice({
  name: "filteredList",
  initialState,
  reducers: {
    setExtract(state, action) {
      state.filteredList = action.payload;
    },
  },
});

export const selectFilteredList = createSelector(
  (state) => state.filteredList.filteredList,
  (filteredList) => filteredList
);

export const { setExtract } = filteredListSlice.actions;

export default filteredListSlice.reducer;
