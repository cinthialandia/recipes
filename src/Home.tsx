import React from "react";
import { RouteComponentProps } from "@reach/router";
import { fakeRecipes } from "./Mock";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import "./Home.css";

const Home: React.FC<RouteComponentProps> = ({ children }) => {
  console.log(fakeRecipes);
  return (
    <div className="home-container">
      <div className="recipes">
        <Recipes />
      </div>
      <div className="recipe">{children}</div>
    </div>
  );
};

export default Home;
