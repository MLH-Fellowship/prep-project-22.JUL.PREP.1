import { useEffect, useState } from "react";
import './App.css';
import logo from './mlh-prep.png'
import ResponsiveResults from "./ResponsiveResults";
import { usePosition } from "./context/useCoordinates";
import Map from "./components/Map";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [results, setResults] = useState(null);

  const { setPosition } = usePosition();

  useEffect(() => {

    function onSuccess(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      setPosition({latitude, longitude});

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

    if(!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError
    );
    }
  }, []);


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result['cod'] !== 200) {
            setIsLoaded(false)
          } else {
            setIsLoaded(true);
            setResults(result);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [city])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <>
      <img className="logo" src={logo} alt="MLH Prep Logo"/>
      <div>
        <h2>Enter a city below 👇</h2>
        <input
          type="text"
          value={city}
          onChange={event => setCity(event.target.value)} />
        <div className="Results">
          {!isLoaded && <h2>Loading...</h2>}
          {isLoaded && results && <>
            <ResponsiveResults weather={results.weather[0].main} feelsLike={results.main.feels_like} place={results.name} country={results.sys.country}/>
          </>}
        </div>
        <Map />
      </div>
    </>
  }
}

export default App;
