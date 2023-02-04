import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerPosition from "./MarkerPosition";

export default function Map({ address }) {
  const position = [address.location.lat, address.location.lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{
        position: "absolute",
        width: "100vw",
        top: "190px",
        bottom: "0",
        zIndex: "0",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPosition position={position} />
    </MapContainer>
  );
}