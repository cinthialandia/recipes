import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { fakeIngredients } from "../Mock";
import "./List.scss";
import { Ingredient } from "../types";

const List: React.FC = () => {
  const [ingredientsList, setIngredientsList] = useState({
    ...fakeIngredients,
  });

  const handleClickCheckButton = (ingredient: Ingredient) => {
    ingredient.quantity = 0;
    setIngredientsList({
      ...ingredientsList,
      [ingredient.id]: ingredient,
    });
  };

  return (
    <div className="List">
      {Object.values(ingredientsList)
        .filter(({ quantity }) => quantity > 0)
        .map((ingredient) => (
          <Card className="ingredient-card" key={ingredient.id}>
            <Card.Body className="container-list">
              <div className="list-ingredient">{ingredient.name}</div>
              <div className="list-ingredient">{`${ingredient.quantity} ${ingredient.unit} `}</div>
              <Button onClick={() => handleClickCheckButton(ingredient)}>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default List;
