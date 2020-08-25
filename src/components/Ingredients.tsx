import React, { useState } from "react";
import NewIngredient from "./NewIngredient";
import SelectIngredient from "./SelectIngredient";
import Button from "react-bootstrap/esm/Button";
import ShowIngredients from "./ShowIngredients";

interface Props {
  ingredients: { [id: string]: number };
  setIngredients: (state: { [id: string]: number }) => void;
}

const Ingredients: React.FC<Props> = ({ ingredients, setIngredients }) => {
  const [ingredientdActive, setIngredientActive] = useState(true);

  const toggleIngredientActive = () => {
    setIngredientActive(!ingredientdActive);
  };

  const removeIngredient = (idToDelete: string) => {
    const newIngredients = { ...ingredients };
    if (newIngredients.hasOwnProperty(idToDelete)) {
      delete newIngredients[idToDelete];
    }
    setIngredients(newIngredients);
  };

  const handleIngredientInput = (id: string, quantity: number) => {
    setIngredients({ ...ingredients, [id]: quantity });
  };

  return (
    <div>
      <ShowIngredients
        removeIngredient={removeIngredient}
        ingredients={ingredients}
      />
      {ingredientdActive ? (
        <div className="create-recipe-component-select-ingredient">
          <SelectIngredient onInput={handleIngredientInput} />
          <Button variant="link" onClick={toggleIngredientActive}>
            Enter a new ingredient
          </Button>
        </div>
      ) : (
        <div className="create-recipe-component-new-ingredient">
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
