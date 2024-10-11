import React, { useEffect } from "react";
import Plot from "react-plotly.js";

function LineChart({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  const states = data.map((stateData) => stateData.state);
  const totalCases = data.map((stateData) => stateData.totalCases);
  const activeCases = data.map((stateData) => stateData.activeCases);
  const recovered = data.map((stateData) => stateData.recovered);
  const deaths = data.map((stateData) => stateData.deaths);

  return (
    <div className="lineChart">
      <Plot
        data={[
          {
            x: states,
            y: totalCases,
            type: "scatter",
            mode: "lines",
            name: "Total Cases",
            line: { color: "blue" },
          },
          {
            x: states,
            y: activeCases,
            type: "scatter",
            mode: "lines",
            name: "Active Cases",
            line: { color: "orange" },
          },
          {
            x: states,
            y: recovered,
            type: "scatter",
            mode: "lines",
            name: "Recovered",
            line: { color: "green" },
          },
          {
            x: states,
            y: deaths,
            type: "scatter",
            mode: "lines",
            name: "Deaths",
            line: { color: "red" },
          },
        ]}
        layout={{
          title: "COVID Cases Overview",
          xaxis: { title: "States" },
          yaxis: { title: "Count" },
        }}
      />
    </div>
  );
}

export default LineChart;
