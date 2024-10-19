import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "./Country";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitCountries = (country) => {
    // console.log("visited omok country");

    const addCountry = [...visitedCountries, country];
    setVisitedCountries(addCountry);
  };

  const handleFlags = (flags) => {
    const newFlag = [...visitedFlags, flags];
    setVisitedFlags(newFlag);
    console.log("Flag added");
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <p> Countries:{countries.length}</p>
      <div>
        <h3>Visited Countries:{visitedCountries.length}</h3>
        <ul>
          {visitedCountries.map((country) => (
            <li>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* visited flags */}
      <div>
        <h3>Visited Country flags: {visitedFlags.length}</h3>
        <div className="flag-container">
          {visitedFlags.map((flag) => (
            <img src={flag}></img>
          ))}
        </div>
      </div>

      {/* display country */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitCountries={handleVisitCountries}
            handleFlags={handleFlags}
          />
        ))}
      </div>
    </div>
  );
}
