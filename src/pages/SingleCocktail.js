import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [cocktailDetails, setCocktailDetails] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(url + id);
      const data = await response.json();
      setCocktailDetails(data.drinks[0]);
      console.log(data.drinks[0]);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
  } = cocktailDetails;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <section className="section-title">{strDrink}</section>
      <div className="drink">
        <img src={strDrinkThumb} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {strDrink}
          </p>
          <p>
            <span className="drink-data">catalog :</span>
            {strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {strGlass}
          </p>
          <p>
            <span className="drink-data">instructons :</span>
            {strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {Object.keys(cocktailDetails).forEach(function (key) {
              if (key.includes("strIngredient") && cocktailDetails[key]) {
                return <span key={key}>{cocktailDetails[key]}</span>;
              }
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
