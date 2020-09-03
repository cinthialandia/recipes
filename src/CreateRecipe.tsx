import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateRecipe.scss";
import Ingredients from "./components/Ingredients";
import Keyword from "./components/Keyword";
import Photo from "./components/Photo";
import DetailsRecipe from "./components/DetailsRecipe";
import { RecipeDetails, RecipeNutrition, Recipe } from "./types";
import Nutrition from "./components/Nutrition";
import Preparation from "./components/Preparation";
import { db } from "./firebase";
import createTokens from "./utils/createTokens";
import { useAuth } from "./providers/AuthProvider";

const CreateRecipe: React.FC<RouteComponentProps> = ({ navigate }) => {
  const [ingredients, setIngredients] = useState<Recipe["ingredients"]>([]);
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
  const [preparation, setPreparation] = useState("");
  const { value: user } = useAuth();

  const handleClickAddDateBase = async (e: React.FormEvent) => {
    e.preventDefault();

    const tokens = createTokens(details.name);
    const recipe: Omit<Recipe, "id"> = {
      ingredients,
      keyword,
      nutrition,
      preparation,
      tokens,
      ...details,
    };

    // Add a new document with a generated id.
    const docRef = await db
      .collection(`users/${user!.uid}/recipes`)
      .add(recipe);
    if (navigate) {
      navigate(`/recipe/${docRef.id}`);
    }
  };

  return (
    <div className="container-Create-Recipe">
      <Form onSubmit={handleClickAddDateBase}>
        <h2 className="title-create-new-recipe">Create new recipe</h2>
        <h4 className="sub-title-create-recipe">
          Choose a photo for your recipe
        </h4>
        <Photo />
        <h4 className="sub-title-create-recipe">Details of the recipe</h4>
        <DetailsRecipe details={details} setDetails={setDetails} />
        <h4 className="sub-title-create-recipe">Nutrition</h4>
        <Nutrition nutrition={nutrition} setNutrition={setNutrition} />
        <h4 className="sub-title-create-recipe">
          Select a keyword for your recipe
        </h4>
        <Keyword keyword={keyword} setKeyword={setKeyword} />
        <h4 className="sub-title-create-recipe">Ingredients</h4>
        <Ingredients
          ingredients={ingredients}
          setIngredients={setIngredients}
        />

        <h4 className="sub-title-create-recipe">Preparation</h4>
        <Preparation
          preparation={preparation}
          setPreparation={setPreparation}
        />
        <div className="button-submit-create-recipe">
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateRecipe;
