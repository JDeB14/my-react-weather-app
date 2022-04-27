import React from "react";

export default function SearchedCityAndDate(props) {
  let currentDate = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  let date = currentDate.getDate();
  
  return (
    <div>
      <h3 className="default-color">{props.city}</h3>
      <h6 className="color">
        {day}, {month} {date}
      </h6>
    </div>
  );
}
