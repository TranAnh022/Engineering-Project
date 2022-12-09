import { createSlice } from "@reduxjs/toolkit";
import { Material } from "../types";
import axios from "axios";

const initialState: Material[] = [];

const materialSlice = createSlice({
  name: "material",
  initialState,
  reducers: {
    initializedMetarial: (_state, action) => {
      return action.payload;
    },
    savePriceAndDate: (_state, action) => {
      axios.put("http://127.0.0.1:8000/api/materials/",action.payload)
    }
  },
});

export const { initializedMetarial,savePriceAndDate} = materialSlice.actions;

export default materialSlice.reducer;
