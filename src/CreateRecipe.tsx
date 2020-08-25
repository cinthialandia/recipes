import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./CreateRecipe.scss";
import Ingredients from "./components/Ingredients";
import Keyword from "./components/Keyword";
import Photo from "./components/Photo";
import DetailsRecipe from "./components/DetailsRecipe";
import { RecipeDetails, RecipeNutrition } from "./types";
import Nutrition from "./components/Nutrition";

const CreateRecipe: React.FC<RouteComponentProps> = () => {
  const [ingredients, setIngredients] = useState<{ [id: string]: number }>({});
  const [keyword, setKeyword] = useState("");
  const [details, setDetails] = useState<RecipeDetails>({
    name: "",
    time: "",
    difficulty: "Easy",
    serving: "",
  });
  const [nutrition, setNutrition] = useState<RecipeNutrition>({
    calories: 0,
    carbohydrates: 0,
    fats: 0,
    proteins: 0,
  });

  return (
    <div className="container-Create-Recipe">
      <Form>
        <h2 className="title-create-new-recipe">Create new recipe</h2>
        <div className="create-recipe-name-of-the-recipe">
          <Photo />
        </div>
        <div className="create-recipe-upload-file">
          <h4 className="title-ingredients-create-recipe">
            Details of the recipe
          </h4>
        </div>

        <div className="details-of-the-recipe">
          <DetailsRecipe details={details} setDetails={setDetails} />
          <h4 className="title-ingredients-create-recipe">Nutrition</h4>
          <Nutrition nutrition={nutrition} setNutrition={setNutrition} />
        </div>
        <Keyword keyword={keyword} setKeyword={setKeyword} />
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
