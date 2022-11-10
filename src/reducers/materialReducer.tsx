import { createSlice } from "@reduxjs/toolkit";
import { Material } from "../types";

// const initialState: Material = {
//     Obj_Id: "",
//     Obj_name: "",
//     dimensions: "",
//     unit: "",
//     standard:"",
//     materials: "",
//     remarks: "",
//     mass:0 ,
//     density:0,
//     kg: 0
// }
const initialState: Material[] = [];

const materialSlice = createSlice({
  name: "material",
  initialState,
  reducers: {
    initializedMetarial: (_state, action) => {
      return action.payload;
    },
  },
});

export const { initializedMetarial } = materialSlice.actions;

export default materialSlice.reducer;
