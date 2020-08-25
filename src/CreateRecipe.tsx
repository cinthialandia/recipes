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

const CreateRecipe: React.FC<RouteComponentProps> = () => {
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

  // const handleClickAddDateBase = async () => {
  //   // Add a new document with a generated id.
  //   const docRef = await db.collection("users/fake/recipes").add({
  //     difficulty: details.difficulty,
  //     ingredients:
  //     }
  //   });
  //   onInput(docRef.id, parseFloat(quantity));
  // };

  return (
    <div className="container-Create-Recipe">
      <Form>
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
        <Preparation />

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default CreateRecipe;
