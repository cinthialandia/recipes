import React from "react";
import { Link } from "@reach/router";
import { fakeRecipes } from "../Mock";
import "./Recipes.scss";

function Recipes() {
  console.log(fakeRecipes);
  return (
    <div className="Recipes">
      {fakeRecipes.map((recipe) => (
        <Link
          className="recipes-link"
          key={recipe.id}
          to={`recipe/${recipe.id}`}
        >
          {recipe.name}
        </Link>
      ))}
    </div>
  );
}

export default Recipes;
