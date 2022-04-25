import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  function showWeatherData(response) {
    console.log(response.data);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Memphis&appid=10cecfc6ca6c9a59ad2246de5dec6a11&units=imperial`;
  axios.get(apiUrl).then(showWeatherData);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
