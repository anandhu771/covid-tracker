import React from "react";
import Plot from "react-plotly.js";

function LineChart({ data }) {
  const { totalCases, activeCases, recovered, deaths } = data;
  return (
    <Plot
      data={[
        { x: ['State 1', 'State 2'], y: [totalCases, activeCases], type: 'scatter', mode: 'lines', name: 'Total Cases' },
        { x: ['State 1', 'State 2'], y: [activeCases, recovered], type: 'scatter', mode: 'lines', name: 'Active Cases' },
        { x: ['State 1', 'State 2'], y: [recovered, deaths], type: 'scatter', mode: 'lines', name: 'Recovered' },
        { x: ['State 1', 'State 2'], y: [deaths, totalCases], type: 'scatter', mode: 'lines', name: 'Deaths' },
      ]}
      layout={{ title: 'COVID Cases Overview' }}
    />
  )
}

export default LineChart;
