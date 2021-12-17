import React, { useState, useContext, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [urlParam, setUrlParam] = useState("");
  const [cocktailList, setCocktailList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(url + urlParam);
      const data = await response.json();
      setCocktailList(data.drinks);
      setLoading(false);
    }
    fetchData();
  }, [urlParam]);

  return (
    <AppContext.Provider
      value={{ cocktailList, urlParam, isLoading, setUrlParam }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
