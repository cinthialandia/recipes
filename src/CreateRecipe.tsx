import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./CreateRecipe.scss";
import Ingredients from "./components/Ingredients";
import Keyword from "./components/Keyword";
import Photo from "./components/Photo";

const CreateRecipe: React.FC<RouteComponentProps> = () => {
  const [ingredients, setIngredients] = useState<{ [id: string]: number }>({});
  const [keyword, setKeyword] = useState("");

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
          <Photo />
          <h4 className="title-ingredients-create-recipe">
            Details of the recipe
          </h4>
        </div>

        <div className="details-of-the-recipe">
          <Keyword keyword={keyword} setKeyword={setKeyword} />
          <Form.Group>
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
        <h4 className="title-ingredients-create-recipe">Ingredients</h4>
        <Ingredients
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
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
