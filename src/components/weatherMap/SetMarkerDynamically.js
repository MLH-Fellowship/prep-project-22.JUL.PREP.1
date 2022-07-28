import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Marker, Popup, useMap, useMapEvent } from "react-leaflet";

export const SetMarkerDynamically = ({
  city,
  setCity,
  cityCoordinates,
  setCityCoordinates,
}) => {

  const [draggable, setDraggable] = useState(false);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setCityCoordinates({lat: marker.getLatLng().lat, lon: marker.getLatLng().lng});
          map.setView(marker.getLatLng(), map.getZoom(), { animate: true });
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${marker.getLatLng().lat}&lon=${marker.getLatLng().lng}&appid=${process.env.REACT_APP_APIKEY}`
          )
            .then((result) => result.json())
            .then((result) => {
              console.log("City changed on map");
              setCity(result.name);
            });
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  const map2 = useMap();

  useEffect(() => {
    map2.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom());
    });
    //eslint-disable-next-line
  }, []);

  const map = useMapEvent("click", (e) => {
    setCityCoordinates({ lat: e.latlng.lat, lon: e.latlng.lng });
    map.setView(e.latlng, map.getZoom(), { animate: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((result) => result.json())
      .then((result) => {
        console.log("City changed on map");
        setCity(result.name);
      });
  });

  useEffect(() => {
    const marker = markerRef.current;
    if(marker!=null){
      map.setView(marker.getLatLng(), map.getZoom(), { animate: true });
    }
  }, [cityCoordinates]);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      ref={markerRef}
      position={[cityCoordinates.lat, cityCoordinates.lon]}
    >
      <Popup>
        <span onClick={toggleDraggable}>{city}</span>
      </Popup>
    </Marker>
  );
};
