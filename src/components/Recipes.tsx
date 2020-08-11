import React from "react";
import { Router, Link } from "@reach/router";
import { fakeRecipes } from "../Mock";

function Recipes() {
  console.log(fakeRecipes);
  return (
    <div className="Recipes">
      {fakeRecipes.map((recipe) => (
        <Link key={recipe.id} to={`recipe/${recipe.id}`}>
          {recipe.name}
        </Link>
      ))}
    </div>
  );
}

export default Recipes;
