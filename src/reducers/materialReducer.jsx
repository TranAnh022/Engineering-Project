import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const materialSlice = createSlice({
  name: "material",
  initialState,
  reducers: {
    initializedMetarial: (_state, action) => {
      return action.payload;
    },
    savePriceAndDate: (_state, action) => {
      const compositions = JSON.parse(localStorage.getItem("material"))[0]
        .compositions;
      const rates = action.payload.rates;
      const compositionId = compositions.filter(
        (c) => c.name === action.payload.composition
      );
      axios.put(
        `${process.env.REACT_APP_API_URL}api/composition/${compositionId[0].id}`,
        rates
      );
    },
  },
});

export const { initializedMetarial, savePriceAndDate } = materialSlice.actions;

export default materialSlice.reducer;
