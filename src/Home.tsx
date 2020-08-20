import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Recipes from "./components/Recipes";
import "./Home.scss";
import SearchBox from "./components/SearchBox";
import { Recipe } from "./types";
import Button from "react-bootstrap/esm/Button";

const Home: React.FC<RouteComponentProps> = () => {
  const [result, setResult] = useState<Recipe[]>([]);

  const handleResult = (result: Recipe[]) => {
    setResult(result);
  };

  return (
    <div className="home-container">
      <h2 className="title-home-recipe">Recipes</h2>
      <div className="search-box-home-recipe">
        <SearchBox onResults={handleResult} />
      </div>

      <div className="home-recipe-container">
        <Recipes />
      </div>
    </div>
  );
};

export default Home;
