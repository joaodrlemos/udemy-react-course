import React, { useState } from "react";

const WEATHER_API = "https://www.metaweather.com/api";
const SEARCH_APPEND = "/location/search/?query=";
const API_ID = "e632ae5217e29dd808ad5199638d654f";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    name: "",
    lat: "",
    lon: "",
    wea: "",
    temp: "",
  });

  const handleChange = (e) => {
    const val = e.target.value;
    setCity(val);
  };

  async function fetchWeather(location) {
    try {
      const weaEnd = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_ID}`
      );
      const respData = await weaEnd.json();

      setData({
        name: respData.name,
        lat: respData.coord.lat,
        lon: respData.coord.lon,
        wea: respData.weather[0].main,
        temp: Math.floor(respData.main.temp - 273.15),
      });

      setWeather(true);
      setError(false);
      setCity("");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const goback = () => {
    setWeather(false);
  };

  return (
    <div className="weather-container">
      {!weather ? (
        <div className="weather-input">
          <h2>Weather</h2>
          <form className="weather-form" onSubmit={handleSubmit}>
            <p style={{ marginBottom: "0px" }}>Please enter a city</p>
            <input
              className={error ? "error-input" : null}
              type="text"
              value={city}
              placeholder="Eg. Lisbon"
              onChange={handleChange}
            ></input>
            <button className="weather-btn" type="submit">
              Enter
            </button>
            {error && <p className="error-message">Invalid city</p>}
          </form>
        </div>
      ) : (
        <div className="weather-data">
          <p>
            Weather
            <br /> in <br />
            <b>{data.name}</b>
          </p>
          <h1>{data.temp}º</h1>
          <button type="button" className="back-button" onClick={goback}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Weather;
