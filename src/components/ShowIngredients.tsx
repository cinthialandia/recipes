import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { IngredientContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Recipe } from "../types";

interface Props {
  removeIngredient: (id: string) => void;
  ingredients: Recipe["ingredients"];
}

const ShowIngredients: React.FC<Props> = ({
  removeIngredient,
  ingredients,
}) => {
  const { value: ingredientMap, loading, error } = useContext(
    IngredientContext
  );
  return (
    <div>
      <ul className="create-recipe-ingredient-select-container">
        {ingredients.map(({ id, quantity }) =>
          ingredientMap && ingredientMap[id] ? (
            <li className="create-recipe-ingredient-select" key={id}>
              {ingredientMap[id].name}: {quantity} {ingredientMap[id].unit}
              <Button
                onClick={() => removeIngredient(id)}
                className="create-recipe-ingredient-select-delete"
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ShowIngredients;
