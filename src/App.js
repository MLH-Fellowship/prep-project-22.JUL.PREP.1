import { useEffect, useState } from "react";
import "./App.css";
import logo from "./mlh-prep.png";
import ReactPlayer from "react-player";
import DayClear from "./assets/dayClear.mp4";
import NightClear from "./assets/nightClear.mp4";
import DayRain from "./assets/dayRain.mp4";
import NightRain from "./assets/nightRain.mp4";
import DayCloud from "./assets/dayCloud.mp4";
import NightCloud from "./assets/nightCloud.mp4";
import Haze from "./assets/haze.mp4";

const weatherMap = new Map([
  ["Clear", [DayClear, NightClear]],
  ["Rain", [DayRain, NightRain]],
  ["Clouds", [DayCloud, NightCloud]],
  ["Haze", [Haze, NightCloud]],
]);

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);
  const [backgrounVideo, setBackgroundVideo] = useState();

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
            url={backgrounVideo}
            className="react-player"
            playing={true}
            controls={false}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>
        <div style={{ position: "absolute", top: 0 }}>
          <img className="logo" src={logo} alt="MLH Prep Logo"></img>
          <div>
            <h2>Enter a city below 👇</h2>
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />

            <div className="Results">
              {!isLoaded && <h2>Loading...</h2>}
              {console.log(results)}
              {isLoaded && results && (
                <>
                  <img
                    src={`https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`}
                  />
                  <h3>{results.weather[0].main}</h3>
                  <p>Feels like {results.main.feels_like}°C</p>
                  <i>
                    <p>
                      {results.name}, {results.sys.country}
                    </p>
                  </i>
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
