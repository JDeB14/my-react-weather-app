import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Audio from "./Audio";
import LocationButton from "./LocationButton";
import Time from "./Time";
import Form from "./Form";
import SearchedCityAndDate from "./SearchedCityAndDate";
import MainTemp from "./MainTemp";
import WeatherParameters from "./WeatherParameters";
import Footer from "./Footer";

function App() {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("Memphis");
  const [weatherInfo, setWeatherInfo] = useState({});
  let weatherData = {
    description: "Sunny",
    forecastDay: "Mon",
    emojiIcon: "🌤",
  };

  function showWeatherData(response) {
    setReady(true);
    setCity(response.data.name);
    setWeatherInfo({
      temp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
    });
  }

  if (ready) {
    return (
      <div className="App">
        <Audio />
        <div className="weather-app">
          <div className="card-body">
            <div className="top-half">
              <div className="row">
                <span className="col-6">
                  <LocationButton />
                </span>
                <Time />
              </div>
              <div className="row justify-content-center">
                <div className="col-7">
                  <Form />
                </div>
              </div>
              <div className="row">
                <div className="col-7 city-date">
                  <SearchedCityAndDate city={city} />
                </div>
                <div className="col-5">
                  <div className="sun">
                    <span role="img" aria-label="sunEmoji">
                      ☀️
                    </span>
                  </div>
                  <p className="description">{weatherData.description}</p>
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
            <h3 className="forecast">5 Day Forecast</h3>
            <br />
            <div className="daily-forecast"></div>
            <div className="row">
              <div className="col future-first">
                <div className="day">{weatherData.forecastDay}</div>
                <div className="emoji">🌧</div>
              </div>
              <div className="col future">
                <div className="day">{weatherData.forecastDay}</div>
                <div className="emoji">{weatherData.emojiIcon}</div>
              </div>
              <div className="col future">
                <div className="day">{weatherData.forecastDay}</div>
                <div className="emoji">
                  <span role="img" aria-label="emoji">
                    ❄️
                  </span>
                </div>
              </div>
              <div className="col future">
                <div className="day">{weatherData.forecastDay}</div>
                <div className="emoji">⛈</div>
              </div>
              <div className="col future-last">
                <div className="day">{weatherData.forecastDay}</div>
                <div className="emoji">🌥</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10cecfc6ca6c9a59ad2246de5dec6a11&units=imperial`;
    axios.get(apiUrl).then(showWeatherData);
  }
}

export default App;
