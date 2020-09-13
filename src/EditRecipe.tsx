import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, convertFromHTML, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./CreateRecipe.scss";
import Ingredients from "./components/Ingredients";
import Keyword from "./components/Keyword";
// import Photo from "./components/Photo";
import DetailsRecipe from "./components/DetailsRecipe";
import { RecipeDetails, RecipeNutrition, Recipe } from "./types";
import Nutrition from "./components/Nutrition";
import { db } from "./firebase";
import createTokens from "./utils/createTokens";
import { useAuth } from "./providers/AuthProvider";
import { useDocumentData } from "react-firebase-hooks/firestore";

interface Props extends RouteComponentProps {
  recipeId?: string;
}

const EditRecipe: React.FC<Props> = ({ navigate, recipeId }) => {
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
  const [preparation, setPreparation] = useState(
    convertToRaw(ContentState.createFromText(""))
  );
  // const [photo, setPhoto] = useState<Blob>();
  const editorOptions = {
    options: ["inline", "list", "textAlign", "link", "emoji"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
  };

  const [recipe] = useDocumentData<Recipe>(
    db.doc(`users/${user!.uid}/recipes/${recipeId}`)
  );

  useEffect(() => {
    if (!recipe) {
      return;
    }
    setIngredients(recipe.ingredients);
    setKeyword(recipe.keyword);
    setDetails({
      name: recipe.name,
      time: recipe.time,
      difficulty: recipe.difficulty,
      serving: recipe.serving,
    });
    setNutrition(recipe.nutrition);

    const blocksFromHTML = convertFromHTML(recipe.preparation);
    const preparationState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setPreparation(convertToRaw(preparationState));
  }, [recipe]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tokens = createTokens(details.name);
    const recipe: Omit<Recipe, "id"> = {
      ingredients,
      keyword,
      nutrition,
      preparation: draftToHtml(preparation),
      tokens,
      ...details,
    };

    // Add a new document with a generated id.
    const docRef = db.doc(`users/${user!.uid}/recipes/${recipeId}`);

    await docRef.update(recipe);

    //upload photo
    // if (photo) {
    //   const photoRef = storage.ref().child(`${user!.uid}/${docRef.id}`);
    //   await photoRef.put(photo);

    //   const photoUrl = await photoRef.getDownloadURL();
    //   await docRef.update({ photo: photoUrl });
    // }

    if (navigate) {
      navigate(`/recipe/${docRef.id}`);
    }
  };

  return (
    <div className="container-Create-Recipe">
      <Form onSubmit={handleFormSubmit}>
        <div className="title-create-new-recipe">Edit recipe</div>

        {/* <h4 className="sub-title-create-recipe">
          Choose a photo for your recipe
        </h4>
        <div className="container-photo-create-recipe">
          {" "}
          <Photo onChange={setPhoto} />
        </div> */}

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
          contentState={preparation}
          editorStyle={{ minHeight: "200px", border: "1px solid #b8babc" }}
          onContentStateChange={setPreparation}
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

export default EditRecipe;
