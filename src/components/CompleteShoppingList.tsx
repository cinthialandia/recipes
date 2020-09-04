import React, { useContext } from "react";
import "./CompleteShoppingList.scss";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { ShoppingList } from "../types";
import { IngredientContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  nameOfRecipe?: string;
  ingredientsOfRecipe: ShoppingList["ingredients"];
  onRemove: (id: string) => void;
  handleCreateListClick: () => void;
}

const CompleteShoppingList: React.FC<Props> = ({
  nameOfRecipe,
  ingredientsOfRecipe,
  onRemove,
  handleCreateListClick,
}) => {
  const { value: ingredientMap } = useContext(IngredientContext);
  const ingredientsArr = Object.entries(ingredientsOfRecipe);
  console.log(ingredientMap);
  return (
    <div className="container-card-list-of-ingredients">
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
        <div className="button-create-shopping-list">
          <Button onClick={handleCreateListClick}>Create shopping list</Button>
        </div>
      </Card>
    </div>
  );
};

export default CompleteShoppingList;
