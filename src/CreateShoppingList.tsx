import React, { useState, useCallback, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { Recipe, ShoppingList } from "./types";
import "./CreateShoppingList.scss";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "./components/DatePicker";
import SearchBox from "./components/SearchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/esm/Modal";
import Media from "react-bootstrap/esm/Media";
import useRecipesByTimestamps from "./hooks/useRecipesByTimestamps";
import { db } from "./firebase";
import CompleteShoppingList from "./CompleteShoppingList";
import ListOfRecipes from "./components/ListOfRecipes";
import ListOfRecipesSelected from "./components/ListOfRecipesSelected";

const CreateShoppingList: React.FC<RouteComponentProps> = () => {
  const [result, setResult] = useState<Recipe[]>([]);
  const [show, setShow] = useState(false);
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

  const handleResult = (result: Recipe[]) => {
    setResult(result);
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipes([...selectedRecipes, recipe]);
    setShow(false);
  };

  const handleCreateListClick = async () => {
    // Add the ingrdients in the data base
    const docRef = await db.collection("users/fake/shoppingLists").add({
      name,
      ingredients,
    });
    setName("");
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
      <Button
        className="button-selectRecipeModal"
        variant="link"
        onClick={() => setShow(true)}
      >
        Select a recipe <FontAwesomeIcon icon={faUtensils} />
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <SearchBox onResults={handleResult} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result.map((recipe) => {
            return (
              <div key={recipe.id} className="Select-Recipe-Modal-recipe-photo">
                <Media>
                  <img
                    width={70}
                    height={48}
                    className="mr-3"
                    src={recipe.photo}
                    alt="recipe"
                  />
                  <Media.Body>
                    <h5>{recipe.name}</h5>
                    <Button
                      variant="light"
                      onClick={() => handleSelectRecipe(recipe)}
                      className="stretched-link Select-Recipe-Modal-button"
                      aria-label={`select ${recipe.name} recipe`}
                    ></Button>
                  </Media.Body>
                </Media>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>

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
    </div>
  );
};

export default CreateShoppingList;
