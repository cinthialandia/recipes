import React, { useContext } from "react";
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
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./ShowRecipe.scss";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { Recipe as IRecipe } from "../types";
import { IngredientContext, KeywordContext } from "../context";

interface Props {
  recipeId?: string;
}

const ShowRecipe: React.FC<Props> = ({ recipeId }) => {
  const [recipe] = useDocumentData<IRecipe>(
    db.doc(`users/fake/recipes/${recipeId}`)
  );

  const { value: keywordMap } = useContext(KeywordContext);

  const { value: ingredientMap } = useContext(IngredientContext);

  return recipe && ingredientMap ? (
    <>
      <div className="Recipe">
        <div>
          <h3 className="recipe-name">{recipe.name}</h3>
          <div className="recipe-img">
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              src={recipe.photo}
              alt="food"
            />
          </div>
          <div className="description-of-the-recipe">
            {keywordMap ? (
              <div>
                <FontAwesomeIcon style={{ color: "#E25523" }} icon={faTag} />{" "}
                {`Keyword: ${keywordMap[recipe.keyword].name}`}
              </div>
            ) : null}
            <div>
              <FontAwesomeIcon
                style={{ color: "#E25523" }}
                icon={faUserFriends}
              />{" "}
              {`Serving: ${recipe.serving}`}
            </div>
            <div>
              <FontAwesomeIcon style={{ color: "#E25523" }} icon={faClock} />{" "}
              {`Time: ${recipe.time}`}
            </div>
            <div>
              <FontAwesomeIcon style={{ color: "#E25523" }} icon={faMitten} />{" "}
              {`Difficulty: ${recipe.difficulty}`}
            </div>
          </div>
          <div className="nutrition-of-the-recipe">
            <div>
              <FontAwesomeIcon
                style={{ color: "#E25523" }}
                icon={faChargingStation}
              />{" "}
              {`Calories: ${recipe.nutrition.calories} Calories`}
            </div>
            <div>
              <FontAwesomeIcon style={{ color: "#E25523" }} icon={faBacon} />{" "}
              {`Fats: ${recipe.nutrition.fats} gr`}
            </div>
            <div>
              <FontAwesomeIcon style={{ color: "#E25523" }} icon={faCarrot} />{" "}
              {`Carbohydrates: ${recipe.nutrition.carbohydrates} gr`}
            </div>
            <div>
              <FontAwesomeIcon style={{ color: "#E25523" }} icon={faEgg} />{" "}
              {`Proteins: ${recipe.nutrition.proteins} gr`}
            </div>
          </div>
          <div>
            <h4 className="recipe-ingredient-sub-title">Ingredients</h4>
            <ul>
              {recipe.ingredients.map(({ quantity, id }) => (
                <li className="recipe-ingredients" key={id}>
                  <span className="recipe-ingredient-name">
                    {ingredientMap[id].name}:
                  </span>
                  {quantity}
                  {ingredientMap[id].unit}
                </li>
              ))}
            </ul>
          </div>
          <h4 className="recipe-ingredient-sub-title">Preparation</h4>
          <div className="recipe-preparation">{recipe.preparation}</div>
        </div>
      </div>

      <div className="Recipe-mobile">
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="recipe-img">
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={recipe.photo}
            alt="food"
          />
        </div>

        <Tabs className="tabs">
          <Tab eventKey="home" title="Details">
            <div className="description-of-the-recipe">
              <div>
                <FontAwesomeIcon style={{ color: "#E25523" }} icon={faTag} />{" "}
                {`Keyword: ${recipe.keyword}`}
              </div>
              <div>
                <FontAwesomeIcon
                  style={{ color: "#E25523" }}
                  icon={faUserFriends}
                />{" "}
                {`Serving: ${recipe.serving}`}
              </div>
              <div>
                <FontAwesomeIcon style={{ color: "#E25523" }} icon={faClock} />{" "}
                {`Time: ${recipe.time}`}
              </div>
              <div>
                <FontAwesomeIcon style={{ color: "#E25523" }} icon={faMitten} />{" "}
                {`Difficulty: ${recipe.difficulty}`}
              </div>
            </div>
            <div className="nutrition-of-the-recipe">
              <div className="title-nutrition">Nutrition</div>
              <div>
                <FontAwesomeIcon
                  style={{ color: "#E25523" }}
                  icon={faChargingStation}
                />{" "}
                {`Calories: ${recipe.nutrition.calories} Calories`}
              </div>
              <div>
                <FontAwesomeIcon style={{ color: "#E25523" }} icon={faCarrot} />{" "}
                {`Carbohydrates: ${recipe.nutrition.carbohydrates} gr`}
              </div>
              <div>
                <FontAwesomeIcon style={{ color: "#E25523" }} icon={faEgg} />{" "}
                {`Proteins: ${recipe.nutrition.proteins} gr`}
              </div>
              <div>
                <FontAwesomeIcon style={{ color: "#E25523" }} icon={faBacon} />{" "}
                {`Fats: ${recipe.nutrition.fats} gr`}
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Ingredients">
            <div className="container-Recipe-ingredients">
              <ul>
                {recipe.ingredients.map(({ quantity, id }) => (
                  <li className="recipe-ingredients" key={id}>
                    <span className="recipe-ingredient-name">
                      {ingredientMap[id].name}:
                    </span>
                    {quantity}
                    {ingredientMap[id].unit}
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Preparation">
            <div className="recipe-preparation">{recipe.preparation}</div>
          </Tab>
        </Tabs>
      </div>
    </>
  ) : (
    <div>Recipe not found</div>
  );
};

export default ShowRecipe;
