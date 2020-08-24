import React from "react";
import { IngredientMap } from "./types";

interface Context<T> {
  loading: boolean;
  error?: Error;
  value?: T;
}

export const IngredientContext = React.createContext<Context<IngredientMap>>({
  loading: true,
});
