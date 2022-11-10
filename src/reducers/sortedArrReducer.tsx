import { createSlice} from "@reduxjs/toolkit";
import { Material } from "../types";

const initialState: Material[] = [];

const sortedArrReducer = createSlice({
  name: "sortedArrMaterial",
  initialState,
  reducers: {
    sortedMaterial: (state, action) => {
      return action.payload
    },
  },
});

export const { sortedMaterial } = sortedArrReducer.actions;

export default sortedArrReducer.reducer;
