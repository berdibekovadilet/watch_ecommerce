import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryIndex = action.payload;
    },
    setSortId(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortId } = filterSlice.actions;

export default filterSlice.reducer;
