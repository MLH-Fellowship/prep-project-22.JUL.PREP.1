import { useEffect, useState } from "react";

import "./App.css";
import logo from "./mlh-prep.png";
import ResponsiveResults from "./ResponsiveResults";
import ReactPlayer from "react-player";
import DayClear from "./assets/dayClear.mp4";
import NightClear from "./assets/nightClear.mp4";
import DayRainLeaves from "./assets/rainLeaves.mp4";
import NightRainCity from "./assets/rainPigeons.mp4";
import DayCloud from "./assets/dayCloud.mp4";
import NightCloud from "./assets/nightCloud.mp4";
import Haze from "./assets/haze.mp4";
import dayThunder from "./assets/thunderDay.mp4";
import nightThunder from "./assets/thunderNight.mp4";
import wind from "./assets/windy.mp4";
import drizzle from "./assets/drizzle.mp4";
import fog from "./assets/fog.mp4";
import mist from "./assets/mist.mp4";
import snow from "./assets/snow.mp4";
import tornado from "./assets/tornado.mp4";
import RequiredThings from './components/RequiredThings';


const weatherMap = new Map([
  ["Clear", [DayClear, NightClear]],
  ["Rain", [DayRainLeaves, NightRainCity]],
  ["Clouds", [DayCloud, NightCloud]],
  ["Haze", [Haze, NightCloud]],
  ["Thunderstorm", [dayThunder, nightThunder]],
  ["Squall", [wind, wind]],
  ["Drizzle", [drizzle, drizzle]],
  ["Fog", [fog, fog]],
  ["Mist", [mist, mist]],
  ["Snow", [snow, snow]],
  ["Smoke", [fog, fog]],
  ["Dust", [fog, fog]],
  ["Ash", [fog, fog]],
  ["Sand", [fog, fog]],
  ["Tornado", [tornado, tornado]],
]);

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);
  const [backgroundVideo, setBackgroundVideo] = useState();

  useEffect(() => {
    function onSuccess(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_APIKEY}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setCity(result.name);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }

    function onError(error) {
      setError(error);
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric" +
        "&appid=" +
        process.env.REACT_APP_APIKEY
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["cod"] !== 200) {
            setIsLoaded(false);
          } else {
            let day = result.weather[0].icon.slice(2);
            console.log(day);
            // console.log(
            //   weatherMap.get(results.weather[0].main)[day === "d" ? 0 : 1]
            // );
            setBackgroundVideo(
              weatherMap.get(result.weather[0].main)[day === "d" ? 0 : 1]
            );

            setIsLoaded(true);
            setResults(result);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        <div className="player-wrapper">
          <ReactPlayer
            url={backgroundVideo}
            className="react-player"
            playing={true}
            controls={false}
            loop={true}
            muted={true}
            width= "auto"
            height= "auto"
<<<<<<< HEAD
            
=======
>>>>>>> 1bfe7bee75d1a249cd2e72bf83f77e2bf30083d4
          />
        </div>
        <div style={{ position: "absolute", top: 0 }}>
          <img className="logo" src={logo} alt="MLH Prep Logo"></img>
          <div>
            <div className="enter-city-title">
              <h2>Enter a city below 👇</h2>
            </div>
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />

            <div className="Results">
              {!isLoaded && <h2 className="loading-title">Loading...</h2>}
              {console.log(results)}
              {isLoaded && results && (
                <>
<<<<<<< HEAD
                  <div className="weather-icon-and-title">
                    <img
                      src={`https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`}
                      alt="weather icon"
                    />
                    <h3>{results.weather[0].main}</h3>
                  </div>
                  <p>Feels like {results.main.feels_like}°C</p>
                  <i>
                    <p>
                      {results.name}, {results.sys.country}
                      
                    </p>
                  </i>
                 
                  
                  <RequiredThings results={results} />
=======
                  <ResponsiveResults
                    weather={results.weather[0].main}
                    feelsLike={results.main.feels_like}
                    place={results.name}
                    country={results.sys.country}
                    weatherIcon={results.weather[0].icon}
                  />
>>>>>>> 1bfe7bee75d1a249cd2e72bf83f77e2bf30083d4
                </>
              )}
               
            </div>
           
          </div>
          
        </div>
       
      </>
     
    );
    
  }
}

export default App;
