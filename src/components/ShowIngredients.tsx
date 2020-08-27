import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { IngredientContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Recipe } from "../types";
import "./ShowIngredients.scss";

interface Props {
  removeIngredient: (id: string) => void;
  ingredients: Recipe["ingredients"];
}

const ShowIngredients: React.FC<Props> = ({
  removeIngredient,
  ingredients,
}) => {
  const { value: ingredientMap } = useContext(IngredientContext);
  return (
    <ul className="showIngredient-list">
      {ingredients.map(({ id, quantity }) =>
        ingredientMap && ingredientMap[id] ? (
          <li className="showIngredient-selected" key={id}>
            {ingredientMap[id].name}: {quantity} {ingredientMap[id].unit}
            <Button onClick={() => removeIngredient(id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default ShowIngredients;
