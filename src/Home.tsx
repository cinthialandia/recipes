import React from "react";
import { RouteComponentProps } from "@reach/router";
import { fakeRecipes } from "./Mock";
import Recipes from "./components/Recipes";
import "./Home.scss";

const Home: React.FC<RouteComponentProps> = ({ children }) => {
  console.log(fakeRecipes);
  return (
    <div className="home-container">
      <h2 className="title-home-recipe">Recipes</h2>
      <div className="home-recipe-container">
        <div className="home-recipes">
          <Recipes />
        </div>
        <div className="home-recipe">{children}</div>
      </div>
    </div>
  );
};

export default Home;
