import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktailList, isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (!cocktailList) {
    return (
      <h2 className="section-title">
        No Cocktails Matched Your Search Criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      {
        <div className="cocktails-center">
          {cocktailList.map((cocktailItem) => {
            const { idDrink } = cocktailItem;
            return <Cocktail key={idDrink} {...cocktailItem} />;
          })}
        </div>
      }
    </section>
  );
};

export default CocktailList;
