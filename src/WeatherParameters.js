import React from "react";
import "./WeatherParameters.css";

export default function WeatherParameters() {
  let weatherData = {
    feelsLike: 60,
    humidity: 52,
    wind: 21,
    pressure: 1021,
  };
  return (
    <div className="row">
      <div className="col-6">
        <ul>
          <li className="color">
            Feels Like:{" "}
            <span className="percent">{weatherData.feelsLike}°</span>
          </li>
          <li className="color">
            Humidity: <span className="percent">{weatherData.humidity}%</span>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <ul className="text-end">
          <li className="color">
            Wind:
            <span className="mph">
              {" "}
              <span>{weatherData.wind} MPH</span>
              <i className="fa-solid fa-wind"></i>
            </span>
          </li>
          <li className="color">
            Pressure:{" "}
            <span className="pressure">{weatherData.pressure} hPa</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
