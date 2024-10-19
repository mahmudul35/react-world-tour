import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitCountries, handleFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [isVisited, setIsVisited] = useState(false);

  const handleClick = () => {
    setIsVisited(!isVisited);
  };
  return (
    <div className={`country ${isVisited ? "visited" : ""}`}>
      <p>{name.common}</p>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitCountries(country)}>
        Mark Visited
      </button>{" "}
      <br /> <br />
      <button onClick={() => handleFlags(country.flags.png)}>
        Add Flag
      </button>{" "}
      <br />
      <br />
      <button onClick={handleClick}>
        {isVisited ? "Visited" : "Plan for Goining"}
      </button>
    </div>
  );
};

export default Country;
