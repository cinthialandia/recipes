import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import SelectIngredient from "./components/SelectIngredient";
import { fakeIngredients } from "./Mock";
import NewIngredient from "./components/NewIngredient";
import "./CreateRecipe.scss";

const CreateRecipe: React.FC<RouteComponentProps> = () => {
  const [ingredients, setIngredients] = useState<{ [id: string]: number }>({});

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
        </div>
        <div className="create-recipe-preparation">
          <Form.Group>
            <Form.Label>Preparation</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
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
        <div className="create-recipe-component-select-ingredient">
          <SelectIngredient onInput={handleIngredientInput} />
        </div>
        <div className="create-recipe-component-new-ingredient">
          <NewIngredient />
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
