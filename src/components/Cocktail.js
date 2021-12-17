import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  idDrink,
  strCategory,
  strDrink,
  strGlass,
  strDrinkThumb,
}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strCategory}</p>
      </div>
      <Link className="btn btn-primary btn-details" to={`/single/${idDrink}`}>
        DETAILS
      </Link>
    </article>
  );
};

export default Cocktail;
