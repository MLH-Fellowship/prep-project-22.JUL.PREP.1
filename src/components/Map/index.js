import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import DraggableMarker from "../DraggableMarker"

import "leaflet/dist/leaflet.css";
import "./Map.css";
import { usePosition } from "../../context/useCoordinates";

const Map = () => {
  const { position } = usePosition();

  return (
    <div className="map__wrapper">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
