import React, { useState } from "react";
import NewIngredient from "./NewIngredient";
import SelectIngredient from "./SelectIngredient";
import Button from "react-bootstrap/esm/Button";
import ShowIngredients from "./ShowIngredients";
import { Recipe } from "../types";

interface Props {
  ingredients: Recipe["ingredients"];
  setIngredients: (state: Recipe["ingredients"]) => void;
}

const Ingredients: React.FC<Props> = ({ ingredients, setIngredients }) => {
  const [ingredientdActive, setIngredientActive] = useState(true);

  const toggleIngredientActive = () => {
    setIngredientActive(!ingredientdActive);
  };

  const removeIngredient = (idToDelete: string) => {
    const newIngredients = ingredients.filter((item) => item.id !== idToDelete);
    setIngredients(newIngredients);
  };

  const handleIngredientInput = (id: string, quantity: number) => {
    setIngredients([...ingredients, { id, quantity }]);
  };

  return (
    <div>
      <ShowIngredients
        removeIngredient={removeIngredient}
        ingredients={ingredients}
      />
      {ingredientdActive ? (
        <div>
          <SelectIngredient onInput={handleIngredientInput} />
          <Button variant="link" onClick={toggleIngredientActive}>
            Enter a new ingredient
          </Button>
        </div>
      ) : (
        <div>
          <NewIngredient onInput={handleIngredientInput} />
          <Button variant="link" onClick={toggleIngredientActive}>
            Select an ingredient
          </Button>
        </div>
      )}
    </div>
  );
};

export default Ingredients;
