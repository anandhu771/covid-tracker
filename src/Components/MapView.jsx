import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function MapView({ data }) {
  // Check if data is an array and has content
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Map through all the states and render their markers */}
      {data.map((stateData) => (
        <Marker key={stateData.state} position={stateData.coordinates}>
          <Popup>
            <b>{stateData.state}</b>
            {/* <br />
            Total Cases: {stateData.totalCases}
            <br />
            Active Cases: {stateData.activeCases} */}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
