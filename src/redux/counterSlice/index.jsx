import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 10,
  reducers: {
    increasedby1: (state) => state + 1,
    decreasedby1: (state) => state - 1,
    increasedby10: (state) => state + 10,
    decreasedby10: (state) => state - 10,
  },
});

export const { increasedby1, decreasedby1, increasedby10, decreasedby10 } =
  counterSlice.actions;

export default counterSlice.reducer;
