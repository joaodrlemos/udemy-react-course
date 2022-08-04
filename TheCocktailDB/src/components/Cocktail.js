import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, info, img, glass }) => {
  return (
    <Link className="cocktail" to={`/cocktail/${id}`}>
      <img src={img} alt="cocktail" />
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
      </div>
    </Link>
  );
};

export default Cocktail;
