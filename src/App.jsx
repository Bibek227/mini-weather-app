import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const api = {
  key: "59431de733d3253ba7b0f8c9ca2024e3",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [Search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = (e) => {
    e.preventDefault()
    fetch(`${api.base}weather?q=${Search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => setWeather(result));
  };

  return (
    <>
      <h1>Weather App</h1>
      <div>
        <form action="submit">
        <input
          type="text"
          placeholder="Search city"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchPressed}>Search</button>
        </form>
        
      </div>
      {typeof weather.main!=='undefined'?(<div>
        <p>{weather.name}</p>

        <p>Temperature: {weather.main.temp}°c</p>

        <p>{weather.weather[0].main}</p>
        <p> ({weather.weather[0].description})</p>
        <p>Feels like: {weather.main.feels_like}°c</p>
      </div>) :'Enter a city name'}
      
    </>
  );
}

export default App;
