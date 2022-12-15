import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const sortedArrReducer = createSlice({
  name: "sortedArrMaterial",
  initialState,
  reducers: {
    sortedMaterial: (state, action) => {
      return action.payload;
    },
  },
});

export const { sortedMaterial } = sortedArrReducer.actions;

export default sortedArrReducer.reducer;
