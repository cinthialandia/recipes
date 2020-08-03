import React from "react";
import { fakeRecipes } from "./Mock";

function Recipes() {
  console.log(fakeRecipes);
  return (
    <div className="Recipes">
      {fakeRecipes.map((recipe) => (
        <>
          <div>{recipe.name}</div>
        </>
      ))}
    </div>
  );
}

export default Recipes;
