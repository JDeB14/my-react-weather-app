import React from "react";
import "./Time.css";

export default function Time() {
  let currentTime = new Date();

  let time = currentTime.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  return <span className="col-6 time">{time}</span>;
}
