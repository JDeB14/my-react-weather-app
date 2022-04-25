import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form id="search-form">
      <input
        type="search"
        placeholder="  Type a city..."
        className="border border-white border-2 bg-transparent rounded-pill shadow"
        autoFocus="on"
        autoComplete="off"
      />
      <button className="border border-white border-2 rounded-pill search-btn">
        <span role="img" aria-label="magnifyingGlass">
          🔍
        </span>
      </button>
    </form>
  );
}
