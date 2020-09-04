import React from "react";
import { Link } from "@reach/router";
import "./Recipes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChargingStation } from "@fortawesome/free-solid-svg-icons";
import { Recipe } from "../types";

interface Props {
  results: Recipe[];
}

const Recipes: React.FC<Props> = ({ results }) => {
  return (
    <div className="Recipes">
      {results.map((recipe) => (
        <Link
          className="recipes-link"
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
        >
          <div className="card">
            <img src={recipe.photo} alt="food" />
            <div className="container details">
              <div className="recipes-title-name"> {recipe.name}</div>
              <div className="recipes-details">
                <div>
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ color: "#f93c64" }}
                  />{" "}
                  {`Time: ${recipe.time}`}
                </div>
                <div>
                  <FontAwesomeIcon
                    style={{ color: "#f93c64" }}
                    icon={faChargingStation}
                  />{" "}
                  {`Calories: ${recipe.nutrition.calories} Calories`}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recipes;
