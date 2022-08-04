import React, { useState, useCallback, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});

  const fetchCocktail = useCallback(async () => {
    try {
      const response = await fetch(url + id);
      const jsonResp = await response.json();
      const drink = jsonResp.drinks[0];
      let a = 1;
      const ingredients = [];

      while (drink["strIngredient" + a] !== null) {
        ingredients.push(drink["strIngredient" + a]);
        a++;
      }

      const newDrink = {
        id: drink.idDrink,
        name: drink.strDrink,
        category: drink.strCategory,
        info: drink.strAlcoholic,
        glass: drink.strGlass,
        instructions: drink.strInstructions,
        ingredients: ingredients,
        img: drink.strDrinkThumb,
      };
      setCocktail(newDrink);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchCocktail();
  }, [fetchCocktail]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <article className="section cocktail-section">
      <div className="header">
        <Link to="/" className="btn-primary">
          Back Home
        </Link>
        <h2 className="section-title">{cocktail.name}</h2>
      </div>
      <div className="drink">
        <img src={cocktail.img} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name :</span> {cocktail.name}
          </p>
          <p>
            <span className="drink-data">Category :</span> {cocktail.category}
          </p>
          <p>
            <span className="drink-data">Info :</span> {cocktail.info}
          </p>
          <p>
            <span className="drink-data">Glass :</span> {cocktail.glass}
          </p>
          <p>
            <span className="drink-data">Instructions :</span>
            {cocktail.instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>
            {cocktail.ingredients}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SingleCocktail;
