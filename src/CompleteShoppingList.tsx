import React, { useContext } from "react";
import "./ShoppingList.scss";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { ShoppingList, Recipe } from "./types";
import { IngredientContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  nameOfRecipe?: string;
  ingredientsOfRecipe: ShoppingList["ingredients"];
  onRemove: (id: string) => void;
}

const CompleteShoppingList: React.FC<Props> = ({
  nameOfRecipe,
  ingredientsOfRecipe,
  onRemove,
}) => {
  const { value: ingredientMap } = useContext(IngredientContext);
  const ingredientsArr = Object.entries(ingredientsOfRecipe);
  console.log(ingredientMap);
  return (
    <>
      <Card>
        <Card.Header>{nameOfRecipe}</Card.Header>
        <Card.Body>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            {ingredientsArr.map(([id, quantity]) =>
              ingredientMap && ingredientMap[id] ? (
                <li key={id} className="showIngredient-selected">
                  <Button onClick={() => onRemove(id)} variant="link">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                  {ingredientMap[id].name}: {quantity} {ingredientMap[id].unit}
                </li>
              ) : null
            )}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default CompleteShoppingList;
