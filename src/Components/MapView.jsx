import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }
  const position = [20.5937, 78.9629];

  return (
    <div className="map">
      <h2>Map View </h2>
      <div>
        <MapContainer
          center={position}
          zoom={4.5}
          style={{ height: 566, width: 400 }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((stateData) => (
            <Marker key={stateData.state} position={stateData.coordinates}>
              <Popup>
                <b>{stateData.state}</b>
                <br />
                Total Cases: {stateData.totalCases}
                <br />
                Active Cases: {stateData.activeCases}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapView;
