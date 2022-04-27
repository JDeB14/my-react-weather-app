import React from "react";
import "./WeatherParameters.css";

export default function WeatherParameters(props) {
  return (
    <div className="row">
      <div className="col-6">
        <ul>
          <li className="color">
            Feels Like:{" "}
            <span className="percent">{Math.round(props.feelsLike)}°</span>
          </li>
          <li className="color">
            Humidity: <span className="percent">{props.humidity}%</span>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <ul className="text-end">
          <li className="color">
            Wind:
            <span className="mph">
              {" "}
              <span>{Math.round(props.wind)} MPH</span>
              <i className="fa-solid fa-wind"></i>
            </span>
          </li>
          <li className="color">
            Pressure: <span className="pressure">{props.pressure} hPa</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
