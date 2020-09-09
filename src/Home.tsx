import React, { useState, useCallback } from "react";
import Spinner from "react-bootstrap/Spinner";
import { RouteComponentProps } from "@reach/router";
import Recipes from "./components/Recipes";
import "./Home.scss";
import SearchBox from "./components/SearchBox";
import { Recipe } from "./types";

const Home: React.FC<RouteComponentProps> = () => {
  const [result, setResult] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  const handleResult = useCallback((result: Recipe[]) => {
    setResult(result);
  }, []);

  const handleLoading = useCallback((loading: boolean) => {
    setLoading(loading);
  }, []);

  console.log(loading);

  return (
    <div className="home-container">
      <h2 className="title-home-recipe">Recipes</h2>
      <div className="search-box-home-recipe">
        <SearchBox onResults={handleResult} onLoading={handleLoading} />
      </div>
      {loading ? (
        <Spinner className="loading" animation="grow" />
      ) : (
        <div className="home-recipe-container">
          <Recipes results={result} />
        </div>
      )}
    </div>
  );
};

export default Home;
