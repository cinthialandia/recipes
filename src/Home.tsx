import React from "react";
import { RouteComponentProps } from "@reach/router";
import Recipes from "./components/Recipes";
import "./Home.scss";

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div className="home-container">
      <h2 className="title-home-recipe">Recipes</h2>
      <div className="home-recipe-container">
        <Recipes />
      </div>
    </div>
  );
};

export default Home;
