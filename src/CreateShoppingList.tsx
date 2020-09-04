import React, { useState, useCallback, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { Recipe, ShoppingList } from "./types";
import "./CreateShoppingList.scss";
import Form from "react-bootstrap/Form";
import DatePicker from "./components/DatePicker";
import { db } from "./firebase";
import CompleteShoppingList from "./components/CompleteShoppingList";
import ListOfRecipes from "./components/ListOfRecipes";
import ListOfRecipesSelected from "./components/ListOfRecipesSelected";
import SelectRecipeModal from "./components/SelectRecipeModal";
import { useAuth } from "./providers/AuthProvider";
import useAllRecipesByTimestamps from "./hooks/useAllRecipesByTimestamps";

const CreateShoppingList: React.FC<RouteComponentProps> = ({ navigate }) => {
  const [weekTimestamp, setWeektimestamps] = useState<number[]>([]);
  const recipesOfTheWeek = useAllRecipesByTimestamps(weekTimestamp);
  const [ingredients, setIngredients] = useState<ShoppingList["ingredients"]>(
    {}
  );
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [name, setName] = useState("");
  const { value: user } = useAuth();

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
    await db.collection(`users/${user!.uid}/shoppingLists`).add({
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
      <div className="input-name-of-the-list">
        <Form.Control
          value={name}
          onChange={handleChangeName}
          type="text"
          placeholder="Enter a name"
        />
      </div>
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
