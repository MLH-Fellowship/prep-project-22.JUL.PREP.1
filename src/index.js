import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function findLoc() {
  
  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    alert(`Latitude: ${latitude}°, Longitude: ${longitude}°`);
  }

  function error() {
    alert('Unable to retrieve your location');
  }

  if(!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
  } else {
    alert('Locating…');
    navigator.geolocation.getCurrentPosition(success, error);
  }
}


document.addEventListener("DOMContentLoaded", findLoc);