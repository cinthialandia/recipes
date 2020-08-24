import React from "react";
import { IngredientContext } from "../context";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Ingredient, IngredientMap } from "../types";
import { db } from "../firebase";

const IngredientsProvider: React.FC = ({ children }) => {
  const [value, loading, error] = useCollectionData<Ingredient>(
    db.collection("users/fake/ingredients"),
    {
      idField: "id",
    }
  );

  console.log(value);
  const valueAsMap = value
    ? value.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
      }, {} as IngredientMap)
    : {};

  return (
    <IngredientContext.Provider value={{ value: valueAsMap, loading, error }}>
      {children}
    </IngredientContext.Provider>
  );
};

export default IngredientsProvider;
