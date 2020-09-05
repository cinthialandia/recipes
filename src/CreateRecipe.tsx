import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./CreateRecipe.scss";
import Ingredients from "./components/Ingredients";
import Keyword from "./components/Keyword";
import Photo from "./components/Photo";
import DetailsRecipe from "./components/DetailsRecipe";
import { RecipeDetails, RecipeNutrition, Recipe } from "./types";
import Nutrition from "./components/Nutrition";
import { db, storage } from "./firebase";
import createTokens from "./utils/createTokens";
import { useAuth } from "./providers/AuthProvider";

const CreateRecipe: React.FC<RouteComponentProps> = ({ navigate }) => {
  const { value: user } = useAuth();
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
  const [preparation, setPreparation] = useState(EditorState.createEmpty());
  const [photo, setPhoto] = useState<Blob>();
  const editorOptions = {
    options: ["inline", "list", "textAlign", "link", "emoji"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tokens = createTokens(details.name);
    const recipe: Omit<Recipe, "id"> = {
      ingredients,
      keyword,
      nutrition,
      preparation: draftToHtml(convertToRaw(preparation.getCurrentContent())),
      tokens,
      ...details,
    };

    // Add a new document with a generated id.
    const docRef = await db
      .collection(`users/${user!.uid}/recipes`)
      .add(recipe);

    //upload photo
    if (photo) {
      const photoRef = storage.ref().child(`${user!.uid}/${docRef.id}`);
      await photoRef.put(photo);

      const photoUrl = await photoRef.getDownloadURL();
      await docRef.update({ photo: photoUrl });
    }

    if (navigate) {
      navigate(`/recipe/${docRef.id}`);
    }
  };

  return (
    <div className="container-Create-Recipe">
      <Form onSubmit={handleFormSubmit}>
        <div className="title-create-new-recipe">Create new recipe</div>

        <h4 className="sub-title-create-recipe">
          Choose a photo for your recipe
        </h4>
        <div className="container-photo-create-recipe">
          {" "}
          <Photo onChange={setPhoto} />
        </div>

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
        <Editor
          editorState={preparation}
          editorStyle={{ minHeight: "200px", border: "1px solid #b8babc" }}
          onEditorStateChange={setPreparation}
          toolbar={editorOptions}
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
