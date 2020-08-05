import React from "react";
import { fakeRecipes } from "../Mock";

function Recipes() {
  console.log(fakeRecipes);
  return (
    <div className="Recipes">
      {fakeRecipes.map((recipe) => (
        <>
          <button>{recipe.name}</button>
        </>
      ))}
    </div>
  );
}

export default Recipes;
