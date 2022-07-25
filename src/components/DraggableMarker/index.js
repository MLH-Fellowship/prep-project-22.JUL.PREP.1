import React, { useState, useRef, useMemo, useCallback } from "react";
import { usePosition } from "../../context/useCoordinates";
import { Marker, Popup } from "leaflet";
import L from 'leaflet';

import './DraggableMarker.css';


const iconPerson = new L.Icon({
    iconUrl: require("../../assets/iconPerson.png"),
    iconRetinaUrl: require('../../assets/iconPerson.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

const DraggableMarker = () => {
  const { position: currPosition, setPosition: setCurrPosition } = usePosition();
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(currPosition);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  console.log(currPosition);

  return (
    <Marker
      className="marker-icon"
      position={position}
      icon={iconPerson}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  );
};

export default DraggableMarker;
