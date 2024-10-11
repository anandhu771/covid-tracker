import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import StateFilter from "./Components/StateFilter";
import PieChart from "./Components/PieChart";
import LineChart from "./Components/LineChart";
import MapView from "./Components/MapView";
import { filterByState } from "./lib/features/covidSlice";

function App() {
  const dispatch = useDispatch();
  const { covidData, filteredState } = useSelector((state) => state.covid);
  const [filteredData, setFilteredData] = useState(covidData);

  const handleFilterChange = (state) => {
    dispatch(filterByState(state));
    setFilteredData(
      state === "All"
        ? covidData
        : covidData.filter((data) => data.state === state)
    );
  };
  return (
    <div>
      <h1>COVID Dashboard</h1>
      <StateFilter
        states={covidData.map((data) => data.state)}
        onFilterChange={handleFilterChange}
      />
      <PieChart data={filteredData[0]} />
      <LineChart data={filteredData} />
      <MapView data={covidData} />
    </div>
  );
}

export default App;
