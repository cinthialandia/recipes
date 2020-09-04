import useRecipesByTimestamps from "./useRecipesByTimestamps";
import { useEffect, useState } from "react";
import { Recipe } from "../types";

//
const useAllRecipesByTimestamps = (timestamps: number[]) => {
  const normalizedRecipes = useRecipesByTimestamps(timestamps);
  const [denormalizedRecipes, setDenormalizedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const recipes: Recipe[] = [];

    for (const recipe of normalizedRecipes) {
      for (const timestamp of timestamps) {
        if (!recipe.menu || !recipe.menu[timestamp]) {
          continue;
        }
        recipe.menu[timestamp].forEach(() => recipes.push(recipe));
      }
    }

    setDenormalizedRecipes(recipes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedRecipes]);

  return denormalizedRecipes;
};

export default useAllRecipesByTimestamps;
