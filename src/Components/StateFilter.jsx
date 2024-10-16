import React from "react";

function StateFilter({ states, onFilterChange }) {
  return (
    <div>
      <label htmlFor="state-filter">Filter by State:</label>
      <select
        className="select-box"
        id="state-filter"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StateFilter;
