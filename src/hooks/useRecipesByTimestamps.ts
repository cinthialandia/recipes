import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Recipe } from "../types";

const useRecipesByTimestamps = (timestamps: number[]) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (timestamps.length === 0) {
      setRecipes([]);
      return;
    }
    const unsubscribe = db
      .collection("users/fake/recipes")
      .where("timestamps", "array-contains-any", timestamps)
      .onSnapshot((querySnapshot) => {
        const _recipes: Recipe[] = [];
        querySnapshot.forEach(function (doc) {
          _recipes.push({ ...doc.data(), id: doc.id } as Recipe);
        });
        setRecipes(_recipes);
      });

    return () => unsubscribe();
  }, [timestamps]);

  return recipes;
};

export default useRecipesByTimestamps;
