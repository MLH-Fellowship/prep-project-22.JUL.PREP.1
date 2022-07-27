import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Marker,
  Popup,
  useMap,
  useMapEvent
} from 'react-leaflet';

export const SetMarkerDynamically = ({
  city, setCity, cityCoordinates, setCityCoordinates,
}) => {
  const [ setPosition ] = useState([
    cityCoordinates.lat,
    cityCoordinates.lon,
  ]);

  const [draggable, setDraggable] = useState(false);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

  const map2 = useMap();

  useEffect(() => {
    map2.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (cityCoordinates) {
      console.log(cityCoordinates);
      setPosition([cityCoordinates.lat, cityCoordinates.lon]);
    }
  }, [cityCoordinates]);

  const map = useMapEvent('click', (e) => {
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=${process.env.REACT_APP_APIKEY}`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setCityCoordinates({ lat: e.latlng.lat, lon: e.latlng.lng });
    //     setCity(res.name);
    //   });
    setCityCoordinates({ lat: e.latlng.lat, lon: e.latlng.lng });
    map.setView(e.latlng, map.getZoom(), { animate: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then(result => result.json())
      .then(
        (result) => {
          console.log("City changed on map");
          setCity(result.name);
        }
      );
  });

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      ref={markerRef}
      position={[cityCoordinates.lat, cityCoordinates.lon]}
    >
      <Popup>
        <span onClick={toggleDraggable}>
          {city}
        </span>
      </Popup>
    </Marker>
  );
};
