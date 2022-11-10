import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import materialReducer from "./reducers/materialReducer";
import sortedArrReducer from "./reducers/sortedArrReducer";

const store = configureStore({
  reducer: {
    material: materialReducer,
    filterMaterial: filterReducer,
    sortedArrMaterial: sortedArrReducer,
  },
});

export default store;
