import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "./Country";
export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <p> Countries:{countries.length}</p>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
}
