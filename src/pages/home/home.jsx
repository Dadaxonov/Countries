import React, { useEffect } from "react";
import "./style.css";
import Sorch from "../../layaut/Sorch/sorch";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = React.useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then((res) => res.json())
      .then((data) => (value ? setData(data) : ""))
      .catch((error) => console.log(error));
  };

  const getData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    fetch(`https://restcountries.com/v3.1/region/${value}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="form-container">
        <form className="form">
          <input
            className="input"
            type="search"
            placeholder="Search for a country…"
            onChange={handleSearch}
          />
          <select className="select" onChange={handleChange}>
            <option hidden>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
      </div>

      <div className="box">
        {data.map((item, index) => (
          <Link key={index} to={`/simple/${item.cca2}`}>
            <div className="card">
              <div className="card-imgs">
              <img
                className="card-img"
                src={item.flags.svg}
                alt={item.name.common}
              />
              </div>
              <div className="card-text">
                <h3>{item.name.common}</h3>
                <p>Population:{item.population}</p>
                <p>Region:{item.region}</p>
                <p>Capital:{item.capital}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
