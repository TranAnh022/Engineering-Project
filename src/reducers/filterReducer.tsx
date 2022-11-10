import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { materials } from "../data";
import { Material } from "../types";

const initialState: Material[] = [];

const filterSlice = createSlice({
  name: "filterMaterial",
  initialState,
  reducers: {
    filterMaterial: (state, action: PayloadAction<string>) => {
      const material = materials.filter((m) =>
        m.Obj_Id.toLowerCase() === action.payload.toLowerCase() ? m : null
      );
      return material;
    },
  },
});

export const { filterMaterial } = filterSlice.actions;

export default filterSlice.reducer;
