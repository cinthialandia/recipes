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
import Spinner from "react-bootstrap/Spinner";
import "./ShowRecipe.scss";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { Recipe as IRecipe } from "../types";
import { IngredientContext, KeywordContext } from "../context";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "@reach/router";

interface Props {
  recipeId?: string;
}

const ShowRecipe: React.FC<Props> = ({ recipeId }) => {
  const { value: user } = useAuth();
  const [recipe] = useDocumentData<IRecipe>(
    db.doc(`users/${user!.uid}/recipes/${recipeId}`)
  );

  const { value: ingredientMap } = useContext(IngredientContext);
  const { value: keywordMap } = useContext(KeywordContext);

  return recipe && ingredientMap ? (
    <>
      <div className="Recipe">
        <Link className="recipes-link" to={`/edit-recipe/${recipeId}`}>
          edit recipe
        </Link>
        <div>
          <h3 className="recipe-name">{recipe.name}</h3>
          <div className="recipe-img">
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              src={recipe.photo}
              alt="food"
            />
          </div>
          <div className="title-details-of-the-recipe">
            Details of the recipe
          </div>
          <div className="description-of-the-recipe">
            {keywordMap ? (
              <div className="recipe-detail">
                <FontAwesomeIcon className="color-icon" icon={faTag} />{" "}
                {`Keyword: ${keywordMap[recipe.keyword].name}`}
              </div>
            ) : null}
            <div className="recipe-detail">
              <FontAwesomeIcon className="color-icon" icon={faUserFriends} />{" "}
              {`Serving: ${recipe.serving}`}
            </div>
            <div className="recipe-detail">
              <FontAwesomeIcon className="color-icon" icon={faClock} />{" "}
              {`Time: ${recipe.time}`}
            </div>
            <div className="recipe-detail">
              <FontAwesomeIcon className="color-icon" icon={faMitten} />{" "}
              {`Difficulty: ${recipe.difficulty}`}
            </div>
          </div>
          <div className="title-nutrition-detail">Details of nutrition</div>
          <div className="container-nutrition-of-the-recipe">
            <div className="nutrition-detail">
              <FontAwesomeIcon
                className="color-icon"
                icon={faChargingStation}
              />{" "}
              {`Calories: ${recipe.nutrition.calories} Calories`}
            </div>
            <div className="nutrition-detail">
              <FontAwesomeIcon className="color-icon" icon={faBacon} />{" "}
              {`Fats: ${recipe.nutrition.fats} gr`}
            </div>
            <div className="nutrition-detail">
              <FontAwesomeIcon className="color-icon" icon={faCarrot} />{" "}
              {`Carbohydrates: ${recipe.nutrition.carbohydrates} gr`}
            </div>
            <div className="nutrition-detail">
              <FontAwesomeIcon className="color-icon" icon={faEgg} />{" "}
              {`Proteins: ${recipe.nutrition.proteins} gr`}
            </div>
          </div>
          <div>
            <h4
              className="recipe-ingredient-sub-title"
              style={{ color: "#f93c64" }}
            >
              Ingredients
            </h4>
            <ul>
              {recipe.ingredients.map(({ quantity, id }) => (
                <li className="recipe-ingredients" key={id}>
                  <span className="recipe-ingredient-name">
                    {`${quantity} ${ingredientMap[id].unit} : ${ingredientMap[id].name}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <h4
            className="recipe-ingredient-sub-title"
            style={{ color: "#f93c64" }}
          >
            Preparation
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: recipe.preparation }}
            className="recipe-preparation"
          ></div>
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
            <div className="title-details-of-the-recipe">
              Details of the recipe
            </div>
            <div className="description-of-the-recipe-tab">
              {keywordMap ? (
                <div className="recipe-detail">
                  <FontAwesomeIcon className="color-icon" icon={faTag} />{" "}
                  {`Keyword: ${keywordMap[recipe.keyword].name}`}
                </div>
              ) : null}
              <div className="recipe-detail">
                <FontAwesomeIcon className="color-icon" icon={faUserFriends} />{" "}
                {`Serving: ${recipe.serving}`}
              </div>
              <div className="recipe-detail">
                <FontAwesomeIcon className="color-icon" icon={faClock} />{" "}
                {`Time: ${recipe.time}`}
              </div>
              <div className="recipe-detail">
                <FontAwesomeIcon className="color-icon" icon={faMitten} />{" "}
                {`Difficulty: ${recipe.difficulty}`}
              </div>
            </div>
            <div className="title-nutrition-detail">Details of nutrition</div>
            <div className="container-nutrition-of-the-recipe">
              <div className="nutrition-detail">
                <FontAwesomeIcon
                  className="color-icon"
                  icon={faChargingStation}
                />{" "}
                {`Calories: ${recipe.nutrition.calories} Calories`}
              </div>
              <div className="nutrition-detail">
                <FontAwesomeIcon className="color-icon" icon={faCarrot} />{" "}
                {`Carbohydrates: ${recipe.nutrition.carbohydrates} gr`}
              </div>
              <div className="nutrition-detail">
                <FontAwesomeIcon className="color-icon" icon={faEgg} />{" "}
                {`Proteins: ${recipe.nutrition.proteins} gr`}
              </div>
              <div className="nutrition-detail">
                <FontAwesomeIcon className="color-icon" icon={faBacon} />{" "}
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
                      {`${quantity} ${ingredientMap[id].unit} : ${ingredientMap[id].name}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Preparation">
            <div
              dangerouslySetInnerHTML={{ __html: recipe.preparation }}
              className="recipe-preparation"
            ></div>
          </Tab>
        </Tabs>
      </div>
    </>
  ) : (
    <div className="loading">
      <Spinner animation="grow" />
    </div>
  );
};

export default ShowRecipe;
