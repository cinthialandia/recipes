import React, { useState, useCallback, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import Tab from "react-bootstrap/esm/Tab";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Nav from "react-bootstrap/esm/Nav";
import { Recipe, ShoppingList } from "./types";
import "./CreateShoppingList.scss";
import Form from "react-bootstrap/Form";
import DatePicker from "./components/DatePicker";
import { db } from "./firebase";
import CompleteShoppingList from "./components/CompleteShoppingList";
import ListOfRecipes from "./components/ListOfRecipes";
import ListOfRecipesSelected from "./components/ListOfRecipesSelected";
import { useAuth } from "./providers/AuthProvider";
import useAllRecipesByTimestamps from "./hooks/useAllRecipesByTimestamps";
import ListOfOthers from "./components/ListOfOthers";

const CreateShoppingList: React.FC<RouteComponentProps> = ({ navigate }) => {
  const [weekTimestamp, setWeektimestamps] = useState<number[]>([]);
  const recipesOfTheWeek = useAllRecipesByTimestamps(weekTimestamp);
  const [ingredients, setIngredients] = useState<ShoppingList["ingredients"]>(
    {}
  );
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [name, setName] = useState("");
  const { value: user } = useAuth();
  const [others, setOthers] = useState<string[]>([]);

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
      others,
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

  const handleOtherSelect = (item: string) => {
    const newOthers = [...others, item];
    setOthers(newOthers);
  };

  const handleOtherRemove = (index: number) => {
    const newOthers = [...others];
    newOthers.splice(index, 1);
    setOthers(newOthers);
  };

  return (
    <div className="container-create-shopping-list">
      <h2 className="create-shopping-list-title">Create shopping list</h2>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">1. Name</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="two">2. Recipes by week</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="three">3. Single recipes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="four">4. Other items</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="five">5. Shopping list</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="title-tab-shopping-list">
                  {" "}
                  Create a name for your shopping list
                </div>
                <div className="input-name-of-the-list">
                  <Form.Control
                    value={name}
                    onChange={handleChangeName}
                    type="text"
                    placeholder="Enter a name"
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="two">
                <div className="title-tab-shopping-list">
                  Select all the recipes per week
                </div>
                <div className="container-date-picker-list">
                  <div className="datePicke-create-shopping-list">
                    <DatePicker onChange={handleDateChange} />
                  </div>
                  <div className="list-of-Recipe">
                    <ListOfRecipes listOfRecipes={recipesOfTheWeek} />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                {" "}
                <div className="title-tab-shopping-list">
                  Include new recipes to your week planning
                </div>
                <div className="container-recipe-modal-list-recipe">
                  <div className="list-of-recipe">
                    <ListOfRecipesSelected
                      listOfRecipesSelected={selectedRecipes}
                      onSelect={handleRecipeSelect}
                      onRemove={removeRecipe}
                    />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <div className="title-tab-shopping-list">
                  Add items (others than ingredients) to your shopping list
                </div>
                <div className="container-others-list">
                  <ListOfOthers
                    listOfItems={others}
                    onSelect={handleOtherSelect}
                    onRemove={handleOtherRemove}
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="five">
                <div className="title-tab-shopping-list">
                  Confirm and create your shopping list
                </div>
                <div className="container-list-shopping-title">
                  <CompleteShoppingList
                    nameOfRecipe={name}
                    ingredientsOfRecipe={ingredients}
                    onRemove={removeIngredient}
                    handleCreateListClick={handleCreateListClick}
                    listOfOthers={others}
                  />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default CreateShoppingList;
