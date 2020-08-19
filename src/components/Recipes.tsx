import React from "react";
import { Link } from "@reach/router";
import { fakeRecipes } from "../Mock";
import "./Recipes.scss";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChargingStation } from "@fortawesome/free-solid-svg-icons";

function Recipes() {
  return (
    <div className="Recipes">
      {fakeRecipes.map((recipe) => (
        <Link
          className="recipes-link"
          key={recipe.id}
          to={`recipe/${recipe.id}`}
        >
          <Card>
            <Card.Img
              style={{ maxWidth: "100%", height: "200px" }}
              variant="top"
              src={recipe.photo}
            />
            <Card.Body>
              <Card.Title className="recipes-title-name">
                {recipe.name}
                <Button variant="link"></Button>
              </Card.Title>
              <div className="recipes-details">
                <p>
                  <FontAwesomeIcon icon={faClock} /> {`Time: ${recipe.time}`}
                </p>
                <p>
                  <FontAwesomeIcon icon={faChargingStation} />{" "}
                  {`Calories: ${recipe.nutrition.calories} Calories`}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Recipes;
