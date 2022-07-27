import React, { useState, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';
import './weatherMap.css';
import { SetMarkerDynamically } from './SetMarkerDynamically';

const DefaultIcon = leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -30],
});

leaflet.Marker.prototype.options.icon = DefaultIcon;

const WeatherMap = ({ city, setCity, cityCoordinates, setCityCoordinates }) => {
  const [map, setMap] = useState();
  const [position, setPosition] = useState({ Lat: 0, Long: 0, City: '' });

  useEffect(() => {
    setPosition({
      Lat: cityCoordinates.lat,
      Long: cityCoordinates.lon,
      City: city,
    });
  }, [cityCoordinates, city]);

  useEffect(() => {
    setMap(map);
  }, [map]);

  useEffect(() => {
    const mapCenter = [position.Lat, position.Long];
    if (map) {
      if (map.getZoom() < 4) {
        map.setView(mapCenter, 7);
      } else {
        map.setView(mapCenter, map.getZoom());
      }
    }
  }, [map, position]);

  return (
    <React.Fragment key="">
      <div>
        <MapContainer
          className="map"
          whenCreated={setMap}
          center={[position.Lat, position.Long]}
          doubleClickZoom
          scrollWheelZoom
          style={{ height: "500px", width: "80vw", marginLeft: "10vw", marginTop: "2rem" }}
          zoom={7}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <SetMarkerDynamically
            city={city}
            setCity={setCity}
            cityCoordinates={cityCoordinates}
            setCityCoordinates={setCityCoordinates}
          />
        </MapContainer>
      </div>
    </React.Fragment>
  );
};

export default WeatherMap;