import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { fakeIngredients } from "../Mock";
import "./List.scss";

const List: React.FC = () => {
  const [ingredientsList, setIngredientsList] = useState({
    ...fakeIngredients,
  });

  const handleClickCheckButton = (id: string, quantity: number) => {
    const ingredientSelectedReady = Object.values(ingredientsList).find(
      ({ id }) => id === "545df"
    );
    if (!ingredientSelectedReady) {
      return;
    }

    ingredientSelectedReady.quantity = 0;
    setIngredientsList({
      ...ingredientsList,
      [ingredientSelectedReady.id]: ingredientSelectedReady,
    });
  };

  return (
    <div className="List">
      {Object.values(ingredientsList)
        .filter(({ quantity }) => quantity > 0)
        .map(({ id, name, quantity, unit }) => (
          <Card key={id}>
            <Card.Body className="container-list">
              <div>{name}</div>
              <div>{quantity}</div>
              <div>{unit}</div>
              <Button onClick={() => handleClickCheckButton(id, quantity)}>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default List;
