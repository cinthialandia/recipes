import React, { useState, useCallback, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { Recipe, ShoppingList } from "../types";
import "./CreateShoppingList.scss";
import Form from "react-bootstrap/Form";
import DatePicker from "./DatePicker";
import useRecipesByTimestamps from "../hooks/useRecipesByTimestamps";
import { db } from "../firebase";
import CompleteShoppingList from "./CompleteShoppingList";
import ListOfRecipes from "./ListOfRecipes";
import ListOfRecipesSelected from "./ListOfRecipesSelected";
import SelectRecipeModal from "./SelectRecipeModal";

const CreateShoppingList: React.FC<RouteComponentProps> = ({ navigate }) => {
  const [weekTimestamp, setWeektimestamps] = useState<number[]>([]);
  const recipesOfTheWeek = useRecipesByTimestamps(weekTimestamp);
  const [ingredients, setIngredients] = useState<ShoppingList["ingredients"]>(
    {}
  );
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const _recipes = [...recipesOfTheWeek, ...selectedRecipes];
    const _ingredients = _recipes.reduce((acc, recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (acc[ingredient.id]) {
          acc[ingredient.id] = acc[ingredient.id] + ingredient.quantity;
        } else {
          acc[ingredient.id] = ingredient.quantity;
        }
      });
      return acc;
    }, {} as ShoppingList["ingredients"]);
    console.log(_ingredients);

    setIngredients(_ingredients);
  }, [recipesOfTheWeek, selectedRecipes]);

  const handleDateChange = useCallback((timestamps: number[]) => {
    setWeektimestamps(timestamps);
  }, []);

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipes([...selectedRecipes, recipe]);
  };

  const handleCreateListClick = async () => {
    // Add the ingrdients in the data base
    const docRef = await db.collection("users/fake/shoppingLists").add({
      name,
      ingredients,
    });
    if (navigate) {
      navigate(`/shopping-list/`);
    }
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const removeIngredient = (idToDelete: string) => {
    const newIngredients = { ...ingredients };
    delete newIngredients[idToDelete];
    setIngredients(newIngredients);
  };

  const removeRecipe = (idToDelete: string) => {
    setSelectedRecipes(
      selectedRecipes.filter(({ id }) => {
        return idToDelete !== id;
      })
    );
  };

  return (
    <div className="container-create-shopping-list">
      <h2 className="create-shopping-list-title">Create shopping lists</h2>
      <h3 className="select-list-title">Create name for your shooping list</h3>
      <Form.Label>Name of the list</Form.Label>
      <Form.Control
        value={name}
        onChange={handleChangeName}
        type="text"
        placeholder="Enter a name"
      />
      <h3 className="select-list-title">
        All the recipes selected for the week
      </h3>
      <div className="container-date-picker-list">
        <div className="datePicke-create-shopping-list">
          <DatePicker onChange={handleDateChange} />
        </div>
        <div className="list-of-Recipe">
          <ListOfRecipes listOfRecipes={recipesOfTheWeek} />
        </div>
      </div>
      <h3 className="select-list-title">
        Select another recipe to include on the shopping list
      </h3>
      <div className="container-recipe-modal-list-recipe">
        <div className="select-recipe-modal">
          <SelectRecipeModal onSelect={handleRecipeSelect} />
        </div>
        <div className="list-of-recipe">
          <ListOfRecipesSelected
            listOfRecipesSelected={selectedRecipes}
            onRemove={removeRecipe}
          />
        </div>
      </div>
      <h3 className="select-list-title">Shopping list to create</h3>
      <CompleteShoppingList
        nameOfRecipe={name}
        ingredientsOfRecipe={ingredients}
        onRemove={removeIngredient}
        handleCreateListClick={handleCreateListClick}
      />
    </div>
  );
};

export default CreateShoppingList;
