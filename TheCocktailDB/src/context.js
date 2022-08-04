import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = useCallback(async () => {
    try {
      const response = await fetch(url + searchTerm);
      const respJson = await response.json();
      const { drinks } = respJson;

      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const newDrink = {
            id: drink.idDrink,
            name: drink.strDrink,
            info: drink.strAlcoholic,
            glass: drink.strGlass,
            img: drink.strDrinkThumb,
          };
          return newDrink;
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm, fetchCocktails]);

  return (
    <AppContext.Provider
      value={{ isLoading, cocktails, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
