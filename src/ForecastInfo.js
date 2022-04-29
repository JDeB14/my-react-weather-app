import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInfo(props) {
  function forecastDay() {
    let correctedDate = new Date(props.forecast.dt * 1000);
    let day = correctedDate.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="day">{forecastDay()}</div>
      <div className="emoji">
        <WeatherIcon iconDescription={props.forecast.weather[0].main} />
      </div>
      <div>
        <span className="H">{Math.round(props.forecast.temp.max)}°</span>
        <span className="L"> {Math.round(props.forecast.temp.min)}°</span>
      </div>
    </div>
  );
}
