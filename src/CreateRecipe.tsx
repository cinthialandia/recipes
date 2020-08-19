import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import SelectIngredient from "./components/SelectIngredient";
import { fakeRecipe as recipe, fakeIngredients } from "./Mock";
import NewIngredient from "./components/NewIngredient";
import "./CreateRecipe.scss";
import NewKeyword from "./components/NewKeyword";
import SelectNewKeyword from "./components/SelectNewKeyword";

const CreateRecipe: React.FC<RouteComponentProps> = () => {
  const [ingredients, setIngredients] = useState<{ [id: string]: number }>({});
  const [keywordActive, setKeywordActive] = useState(true);
  const [ingredientdActive, setIngredientActive] = useState(true);

  const handleIngredientInput = (id: string, quantity: number) => {
    setIngredients({ ...ingredients, [id]: quantity });
  };

  const handleClickRemoveButton = (idToDelete: string) => {
    const newIngredients = { ...ingredients };
    if (newIngredients.hasOwnProperty(idToDelete)) {
      delete newIngredients[idToDelete];
    }
    setIngredients(newIngredients);
  };

  const toggleKeywordActive = () => {
    setKeywordActive(!keywordActive);
  };

  const toggleIngredientActive = () => {
    setIngredientActive(!ingredientdActive);
  };

  return (
    <div className="container-Create-Recipe">
      <Form>
        <h2 className="title-create-new-recipe">Create new recipe</h2>
        <div className="create-recipe-name-of-the-recipe">
          <Form.Group>
            <Form.Label>Name of the recipe</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the name of the recipe"
            />
          </Form.Group>
        </div>
        <div className="create-recipe-upload-file">
          <Form.Group>
            <Form.File
              required
              name="file"
              label="Upload a photo"
              // onChange={handleChange}
              // isInvalid={!!errors.file}
              // feedback={errors.file}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group>
          <h4 className="title-ingredients-create-recipe">
            Details of the recipe
          </h4>
        </div>
        <div className="details-of-the-recipe">
          <Form.Group>
            <div className="container-keyword">
              {keywordActive ? (
                <div className="keyword-selected">
                  <SelectNewKeyword />
                  <Button variant="link" onClick={toggleKeywordActive}>
                    Enter a new Keyword
                  </Button>
                </div>
              ) : (
                <div className="keyword-new">
                  <NewKeyword />
                  <Button variant="link" onClick={toggleKeywordActive}>
                    Select a new Keyword
                  </Button>
                </div>
              )}
            </div>

            <div className="container-serving-time-difficulty">
              <div className="container-serving">
                <Form.Label>Serving</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="number of people"
                  />
                </InputGroup>
              </div>

              <div className="container-time">
                <Form.Label>Time</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="time in minutes"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>min</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </div>
              <div className="container-difficulty">
                <Form.Label>Difficulty</Form.Label>
                <Form.Control as="select" custom>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </Form.Control>
              </div>
            </div>
          </Form.Group>
          <div className="container-calories-car-pro-fats">
            <div className="create-recipe-calories">
              <Form.Label>Calories</Form.Label>
              <InputGroup>
                <Form.Control type="number" min="0" placeholder="" />
                <InputGroup.Append>
                  <InputGroup.Text>Kcal</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="create-recipe-calories">
              <Form.Label>Carbohydrates</Form.Label>
              <InputGroup>
                <Form.Control type="number" min="0" placeholder="" />
                <InputGroup.Append>
                  <InputGroup.Text>gr</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="create-recipe-calories">
              <Form.Label>Proteins</Form.Label>
              <InputGroup>
                <Form.Control type="number" min="0" placeholder="" />
                <InputGroup.Append>
                  <InputGroup.Text>gr</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="create-recipe-calories">
              <Form.Label>Fats</Form.Label>
              <InputGroup>
                <Form.Control type="number" min="0" placeholder="" />
                <InputGroup.Append>
                  <InputGroup.Text>gr</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
        </div>
        <div>
          <h4 className="title-ingredients-create-recipe">Ingredients</h4>
          <ul className="create-recipe-ingredient-select-container">
            {Object.entries(ingredients).map(([id, quantity]) => (
              <li className="create-recipe-ingredient-select" key={id}>
                {fakeIngredients[id].name}: {quantity}{" "}
                {fakeIngredients[id].unit}
                <Button
                  onClick={() => handleClickRemoveButton(id)}
                  className="create-recipe-ingredient-select-delete"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </li>
            ))}
          </ul>
        </div>
        {ingredientdActive ? (
          <div className="create-recipe-component-select-ingredient">
            <SelectIngredient onInput={handleIngredientInput} />
            <Button variant="link" onClick={toggleIngredientActive}>
              Enter a new ingredient
            </Button>
          </div>
        ) : (
          <div className="create-recipe-component-new-ingredient">
            <NewIngredient />
            <Button variant="link" onClick={toggleIngredientActive}>
              Select an ingredient
            </Button>
          </div>
        )}

        <div className="create-recipe-preparation">
          <Form.Group>
            <h4 className="title-ingredients-create-recipe">Preparation</h4>
            <Form.Control as="textarea" />
          </Form.Group>
        </div>
        <Button
          className="button-create-recipe-save"
          variant="primary"
          type="submit"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default CreateRecipe;
