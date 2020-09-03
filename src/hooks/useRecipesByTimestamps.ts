import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Recipe } from "../types";
import { useAuth } from "../providers/AuthProvider";

const useRecipesByTimestamps = (timestamps: number[]) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { value: user } = useAuth();

  useEffect(() => {
    if (timestamps.length === 0) {
      setRecipes([]);
      return;
    }
    const unsubscribe = db
      .collection(`users/${user!.uid}/recipes`)
      .where("timestamps", "array-contains-any", timestamps)
      .onSnapshot((querySnapshot) => {
        const _recipes: Recipe[] = [];
        querySnapshot.forEach(function (doc) {
          _recipes.push({ ...doc.data(), id: doc.id } as Recipe);
        });
        setRecipes(_recipes);
      });

    return () => unsubscribe();
  }, [timestamps, user]);

  return recipes;
};

export default useRecipesByTimestamps;
