import { createSlice } from "@reduxjs/toolkit";

const initialState = { table: {} };

const proteinDataSlice = createSlice({
  name: "proteinData",
  initialState,
  reducers: {
    addProteinData: (state, action) => {
      state.table = { ...action.payload };
    },
    // removeProteinData: (state, action) => {
    //   const index = action.payload;
    //   if (index >= 0 && index < state.length) {
    //     state.splice(index, 1);
    //   }
    // },
    // clearProteinData: () => {
    //   return initialState;
    // },
  },
});

export const { addProteinData } = proteinDataSlice.actions;

export default proteinDataSlice.reducer;
