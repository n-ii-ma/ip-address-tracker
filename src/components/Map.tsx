"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

import type { LatLngExpression } from "leaflet";

const AutoRecenter = ({ position }: { position: LatLngExpression }) => {
  // Get the map instance
  const map = useMap();

  // Recenter the map when the position changes
  useEffect(() => {
    map.setView(position, 13);
  }, [map, position]);

  return null;
};

const Map = ({ position }: { position: LatLngExpression }) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom
      touchZoom
      className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
      <AutoRecenter position={position} />
    </MapContainer>
  );
};

export default Map;
