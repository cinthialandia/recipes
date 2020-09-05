import React from "react";
import ShowRecipe from "./components/ShowRecipe";
import { RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {
  recipeId?: string;
}

const Recipe: React.FC<Props> = ({ recipeId }) => {
  return <ShowRecipe recipeId={recipeId} />;
};

export default Recipe;
