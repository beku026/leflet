import React from "react";
import {
  MapContainer,
  TileLayer
} from "react-leaflet";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

const MapView = () => {
  return (
    <>
      <MapContainer
        zoom={11}
        style={{ width: "100%", height: "70vh" }}
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LeafletRoutingMachine />
      </MapContainer>
    </>
  );
};
export default MapView;


