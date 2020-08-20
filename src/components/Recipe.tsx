import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faClock,
  faMitten,
  faCarrot,
  faChargingStation,
  faEgg,
  faBacon,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { fakeRecipe as recipe, fakeIngredients, fakeRecipes } from "../Mock";
import { RouteComponentProps } from "@reach/router";
import "./Recipe.scss";
import Card from "react-bootstrap/esm/Card";

interface Props extends RouteComponentProps {
  recipeId?: string;
}

const Recipe: React.FC<Props> = ({ recipeId }) => {
  const recipe = fakeRecipes.find(({ id }) => id === recipeId);

  return recipe ? (
    <Card className="Recipe">
      <div>
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="recipe-img">
          <img style={{ width: "400px" }} src={recipe.photo} alt="food" />
        </div>
        <div className="description-of-the-recipe">
          <div>
            <FontAwesomeIcon icon={faTag} /> {`Keyword: ${recipe.keyword}`}
          </div>
          <div>
            <FontAwesomeIcon icon={faUserFriends} />{" "}
            {`Serving: ${recipe.serving}`}
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} /> {`Time: ${recipe.time}`}
          </div>
          <div>
            <FontAwesomeIcon icon={faMitten} />{" "}
            {`Difficulty: ${recipe.difficulty}`}
          </div>
        </div>
        <div className="nutrition-of-the-recipe">
          <div>
            <FontAwesomeIcon icon={faChargingStation} />{" "}
            {`Calories: ${recipe.nutrition.calories} Calories`}
          </div>
          <div>
            <FontAwesomeIcon icon={faCarrot} />{" "}
            {`Carbohydrates: ${recipe.nutrition.carbohydrates} gr`}
          </div>
          <div>
            <FontAwesomeIcon icon={faEgg} />{" "}
            {`Proteins: ${recipe.nutrition.proteins} gr`}
          </div>
          <div>
            <FontAwesomeIcon icon={faBacon} />{" "}
            {`Fats: ${recipe.nutrition.fats} gr`}
          </div>
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
    </Card>
  ) : (
    <div>Recipe not found</div>
  );
};

export default Recipe;
