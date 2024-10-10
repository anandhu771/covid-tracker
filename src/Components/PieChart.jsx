import React from "react";
import Plot from "react-plotly.js";

function PieChart({ data }) {
  const { activeCases, recovered, deaths } = data;
  return (
    <Plot
      data={[
        {
          type: "pie",
          values: [activeCases, recovered, deaths],
          labels: ["Active Cases", "Recovered", "Deaths"],
        },
      ]}
      layout={{ title: "COVID Distribution" }}
    />
  );
}

export default PieChart;
