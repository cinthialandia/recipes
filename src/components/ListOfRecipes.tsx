import React from "react";
import Card from "react-bootstrap/esm/Card";
import { Recipe } from "../types";

interface Props {
  listOfRecipes: Recipe[];
}

const ListOfRecipes: React.FC<Props> = ({ listOfRecipes }) => {
  return (
    <>
      <Card>
        <Card.Header>Lista de recipes</Card.Header>
        <Card.Body>
          <ul>
            {listOfRecipes.map(({ name }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListOfRecipes;
