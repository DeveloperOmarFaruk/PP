import { configureStore } from "@reduxjs/toolkit";
import proteinDataReducer from "./ProteinLab/PLabReducers/proteinDataSlice";

const store = configureStore({
  reducer: {
    proteinData: proteinDataReducer,
  },
});

export default store;
