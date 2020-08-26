import React, { useState, useCallback } from "react";
import { RouteComponentProps } from "@reach/router";
import Recipes from "./components/Recipes";
import "./Home.scss";
import SearchBox from "./components/SearchBox";
import { Recipe } from "./types";
import { IngredientContext } from "./context";

const Home: React.FC<RouteComponentProps> = () => {
  const [result, setResult] = useState<Recipe[]>([]);

  const letter = "dWADrdBN0mY16libdNV8";
  const finded = result.map(function (element) {
    if (element.keyword === letter) {
      return element;
    }
  });
  console.log(finded);

  const handleResult = useCallback((result: Recipe[]) => {
    setResult(result);
  }, []);

  return (
    <div className="home-container">
      <h2 className="title-home-recipe">Recipes</h2>
      <div className="search-box-home-recipe">
        <SearchBox onResults={handleResult} />
      </div>

      <div className="home-recipe-container">
        <Recipes results={result} />
      </div>
    </div>
  );
};

export default Home;
