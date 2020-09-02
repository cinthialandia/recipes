import React, { useState, useCallback, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { Recipe, ShoppingList } from "./types";
import "./CreateShoppingList.scss";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "./components/DatePicker";
import useRecipesByTimestamps from "./hooks/useRecipesByTimestamps";
import { db } from "./firebase";
import CompleteShoppingList from "./CompleteShoppingList";
import ListOfRecipes from "./components/ListOfRecipes";
import ListOfRecipesSelected from "./components/ListOfRecipesSelected";
import SelectRecipeModal from "./components/SelectRecipeModal";

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
    <div>
      <h2 className="create-shopping-list-title">Create shopping lists</h2>
      <Form.Label>Name of the list</Form.Label>
      <Form.Control
        value={name}
        onChange={handleChangeName}
        type="text"
        placeholder="Enter a name"
      />
      <DatePicker onChange={handleDateChange} />
      <Button onClick={handleCreateListClick}>Create shopping list</Button>
      <CompleteShoppingList
        nameOfRecipe={name}
        ingredientsOfRecipe={ingredients}
        onRemove={removeIngredient}
      />
      <ListOfRecipes listOfRecipes={recipesOfTheWeek} />
      <ListOfRecipesSelected
        listOfRecipesSelected={selectedRecipes}
        onRemove={removeRecipe}
      />
      <SelectRecipeModal onSelect={handleRecipeSelect} />
    </div>
  );
};

export default CreateShoppingList;
