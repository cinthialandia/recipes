import React from "react";
import { fakeRecipe as recipe, fakeIngredients, fakeRecipes } from "../Mock";
import { RouteComponentProps } from "@reach/router";
import "./Recipe.scss";

interface Props extends RouteComponentProps {
  recipeId?: string;
}

const Recipe: React.FC<Props> = ({ recipeId }) => {
  const recipe = fakeRecipes.find(({ id }) => id === recipeId);
  console.log(recipe);

  return recipe ? (
    <div className="Recipe">
      <h3 className="recipe-name">{recipe.name}</h3>
      <div className="recipe-img">
        <img style={{ width: "400px" }} src={recipe.photo} alt="food" />
      </div>
      <div>
        <h4 className="recipe-ingredient-sub-title">Ingredients</h4>
        <ul>
          {recipe.ingredients.map(({ quantity, id }) => (
            <li className="recipe-ingredients" key={id}>
              <span className="recipe-ingredient-name">
                {fakeIngredients[id].name}:
              </span>
              {quantity}
              {fakeIngredients[id].unit}
            </li>
          ))}
        </ul>
      </div>
      <h4 className="recipe-ingredient-sub-title">Preparation</h4>
      <div className="recipe-preparation">{recipe.preparation}</div>
    </div>
  ) : (
    <div>Recipe not found</div>
  );
};

export default Recipe;
