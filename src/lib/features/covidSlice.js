import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  covidData: [
    {
      state: "Maharashtra",
      totalCases: 8000000,
      activeCases: 50000,
      recovered: 785000,
      deaths: 150000,
      coordinates: [19.7515, 75.7139],
    },
    {
      state: "Delhi",
      totalCases: 2000000,
      activeCases: 12000,
      recovered: 19500,
      deaths: 380000,
      coordinates: [28.7041, 77.1025],
    },
    {
      state: "Karnataka",
      totalCases: 3000000,
      activeCases: 25000,
      recovered: 2900000,
      deaths: 50000,
      coordinates: [15.3173, 75.7139],
    },
    {
      state: "Tamil Nadu",
      totalCases: 3500000,
      activeCases: 18000,
      recovered: 3400000,
      deaths: 42000,
      coordinates: [11.1271, 78.6569],
    },
    {
      state: "Uttar Pradesh",
      totalCases: 2500000,
      activeCases: 15000,
      recovered: 2400000,
      deaths: 35000,
      coordinates: [26.8467, 80.9462],
    },
    {
      state: "West Bengal",
      totalCases: 1500000,
      activeCases: 10000,
      recovered: 1450000,
      deaths: 25000,
      coordinates: [22.9868, 87.855],
    },
    {
      state: "Rajasthan",
      totalCases: 1200000,
      activeCases: 8000,
      recovered: 1150000,
      deaths: 20000,
      coordinates: [27.0238, 74.2179],
    },
    {
      state: "Gujarat",
      totalCases: 1800000,
      activeCases: 7000,
      recovered: 1740000,
      deaths: 30000,
      coordinates: [22.2587, 71.1924],
    },
    {
      state: "Kerala",
      totalCases: 4000000,
      activeCases: 20000,
      recovered: 3950000,
      deaths: 50000,
      coordinates: [10.8505, 76.2711],
    },
    {
      state: "Punjab",
      totalCases: 1100000,
      activeCases: 5000,
      recovered: 1050000,
      deaths: 20000,
      coordinates: [31.1471, 75.3412],
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
