import React from "react";
import "./style.css";
export default function Sorch() {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="form-container">
      <form className="form">
        <input
          type="search"
          placeholder="Search for a country…"
          onChange={handleSearch}
        />
        <select name="select">
          <option value="Filter">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}
