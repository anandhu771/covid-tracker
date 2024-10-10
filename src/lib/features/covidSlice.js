import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  covidData: [
    {
      state: "Maharashtra",
      totalCases: 8000000,
      activeCases: 50000,
      recovered: 7850000,
      deaths: 150000,
      coordinates: [19.7515, 75.7139],  
    },
    {
      state: "Delhi",
      totalCases: 2000000,
      activeCases: 12000,
      recovered: 1950000,
      deaths: 38000,
      coordinates: [28.7041, 77.1025],  
    },
  ],
  filteredState: "All",
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    filterByState: (state, action) => {
      state.filteredState = action.payload;
    },
  },
});

export const { filterByState } = covidSlice.actions;
export default covidSlice.reducer;
