import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import SearchedCityAndDate from "./SearchedCityAndDate";
import MainTemp from "./MainTemp";
import WeatherIcon from "./WeatherIcon";
import WeatherParameters from "./WeatherParameters";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("Memphis");
  const [weatherInfo, setWeatherInfo] = useState({});

  function showWeatherData(response) {
    setReady(true);
    setWeatherInfo({
      temp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      cityName: response.data.name,
      iconDescription: response.data.weather[0].main,
      coords: response.data.coord,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10cecfc6ca6c9a59ad2246de5dec6a11&units=imperial`;
    axios.get(apiUrl).then(showWeatherData);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function getCoords() {
    navigator.geolocation.getCurrentPosition(handlePosition);
  }
  function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let gpsApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=36c575cad287795d9f73ee1a501c593a&units=imperial`;
    axios.get(gpsApiUrl).then(showWeatherData);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="weather-app">
          <div className="card-body">
            <div className="top-half">
              <div className="row">
                <span className="col-6">
                  <button className="buttons location-btn" onClick={getCoords}>
                    <i className="fa-solid fa-location-arrow location-icon"></i>
                  </button>
                </span>
                <Time />
              </div>
              <div className="row justify-content-center">
                <div className="col-7">
                  <form id="search-form" onSubmit={handleSubmit}>
                    <input
                      type="search"
                      placeholder="  Type a city..."
                      className="border border-white border-2 bg-transparent rounded-pill shadow"
                      autoFocus="on"
                      autoComplete="off"
                      onChange={updateCity}
                    />
                    <button className="border border-white border-2 rounded-pill search-btn">
                      <span role="img" aria-label="magnifyingGlass">
                        🔍
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-7 city-date">
                  <SearchedCityAndDate searchedCity={weatherInfo.cityName} />
                </div>
                <div className="col-5">
                  <div className="sun">
                    <span role="img" aria-label="icons">
                      <WeatherIcon
                        iconDescription={weatherInfo.iconDescription}
                      />
                    </span>
                  </div>
                  <p className="description text-capitalize">
                    {weatherInfo.description}
                  </p>
                </div>
              </div>
              <MainTemp temp={weatherInfo.temp} />
              <WeatherParameters
                feelsLike={weatherInfo.feelsLike}
                humidity={weatherInfo.humidity}
                pressure={weatherInfo.pressure}
                wind={weatherInfo.wind}
              />
            </div>
            <br />
            <h2 className="forecast">5 Day Forecast</h2>
            <br />
            <div className="daily-forecast"></div>
            <Forecast coords={weatherInfo.coords} />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
  }
}

export default App;
