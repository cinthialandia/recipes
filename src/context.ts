import React from "react";
import { IngredientMap, KeywordMap } from "./types";

interface Context<T> {
  loading: boolean;
  error?: Error;
  value?: T;
}

export const IngredientContext = React.createContext<Context<IngredientMap>>({
  loading: true,
});

export const KeywordContext = React.createContext<Context<KeywordMap>>({
  loading: true,
});
