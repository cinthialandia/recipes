import React from "react";
import Card from "react-bootstrap/esm/Card";
import { Recipe } from "../types";
import "./ListOfRecipes.scss";

interface Props {
  listOfRecipes: Recipe[];
}

const ListOfRecipes: React.FC<Props> = ({ listOfRecipes }) => {
  return (
    <div className="container-list-of-recipes-card">
      <Card>
        <Card.Header>Recipes of the week</Card.Header>
        <Card.Body>
          <ul>
            {listOfRecipes.map(({ name }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListOfRecipes;
