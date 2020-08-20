import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { fakeRecipes } from "../Mock";
import "./Recipes.scss";
import Card from "react-bootstrap/esm/Card";
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
          to={`recipe/${recipe.id}`}
        >
          <Card>
            <Card.Img
              style={{ maxWidth: "100%", height: "auto" }}
              variant="top"
              src={recipe.photo}
            />
            <Card.Body className="details">
              <Card.Title>
                <div className="recipes-title-name"> {recipe.name}</div>
              </Card.Title>
              <div className="recipes-details">
                <div>
                  <FontAwesomeIcon icon={faClock} /> {`Time: ${recipe.time}`}
                </div>
                <div>
                  <FontAwesomeIcon icon={faChargingStation} />{" "}
                  {`Calories: ${recipe.nutrition.calories} Calories`}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Recipes;
