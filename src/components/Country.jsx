import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
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
      <button onClick={handleClick}>
        {isVisited ? "Visited" : "Plan for Goining"}
      </button>
    </div>
  );
};

export default Country;
