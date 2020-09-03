import React from "react";
import { IngredientContext } from "../context";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Ingredient, IngredientMap } from "../types";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";

const IngredientsProvider: React.FC = ({ children }) => {
  const { value: user } = useAuth();
  const [value, loading, error] = useCollectionData<Ingredient>(
    db.collection(`users/${user!.uid}/ingredients`),
    {
      idField: "id",
    }
  );
  const valueAsMap = value
    ? value.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
      }, {} as IngredientMap)
    : undefined;

  return (
    <IngredientContext.Provider value={{ value: valueAsMap, loading, error }}>
      {children}
    </IngredientContext.Provider>
  );
};

export default IngredientsProvider;
