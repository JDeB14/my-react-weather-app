import React, { useState, useEffect } from "react";
import ForecastInfo from "./ForecastInfo";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col future-first">
            <ForecastInfo forecast={forecast[0]} />
          </div>
          <div className="col future">
            <ForecastInfo forecast={forecast[1]} />
          </div>
          <div className="col future">
            <ForecastInfo forecast={forecast[2]} />
          </div>
          <div className="col future">
            <ForecastInfo forecast={forecast[3]} />
          </div>
          <div className="col future-last">
            <ForecastInfo forecast={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=36c575cad287795d9f73ee1a501c593a&units=imperial`;
    axios.get(forecastApiUrl).then(showForecast);
  }
}
