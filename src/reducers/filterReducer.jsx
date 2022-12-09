import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { materials } from "../data";


const initialState=[] ;

const filterSlice = createSlice({
  name: "filterMaterial",
  initialState,
  reducers: {
    filterMaterial: (state, action) => {
      
      const material = action.payload[1].filter((m) =>
        m.Obj_Id.toLowerCase() === action.payload[0].toLowerCase() ? m : null
      );
      localStorage.setItem("material", JSON.stringify(material));
      return material;

    },

  },
});

export const { filterMaterial } = filterSlice.actions;

export default filterSlice.reducer;
