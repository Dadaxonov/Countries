import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./simple-style.css";

export default function Simple() {
  const params = useParams();
  console.log(params);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        if (item.cca2 == params.cioc) {
          return (
            <div key={index} className="simple-container">
              <button className="btn">
                <Link to="/">Back To</Link>
              </button>
              <div className="simple_info">
                <div className="simple_img">
                  <img src={item.flags.svg} alt={item.name.common} />
                </div>
                <div>
                  <h3 className="name">{item.name.common}</h3>
                  <p>Native Name : {item.name.official}</p>
                  <p>Population : {item.population}</p>
                  <p>Region : {item.region}</p>
                  <p> Sub Region : {item.subregion}</p>
                  <p>Capital : {item.capital}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
