export type RecipeType = "breakfast" | "lunch" | "dinner";

export interface Keyword {
  id: string;
  name: string;
}

export interface KeywordMap {
  [id: string]: Keyword;
}

export interface RecipeDetails {
  name: string;
  serving: string;
  time: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface RecipeNutrition {
  calories: number;
  carbohydrates: number;
  fats: number;
  proteins: number;
}

export interface Recipe extends RecipeDetails {
  id: string;
  keyword: string;
  photo?: string;
  preparation: string;
  ingredients: {
    id: string;
    quantity: number;
  }[];
  nutrition: RecipeNutrition;
  tokens?: string[];
  timestamps?: number[];
  menu?: {
    [timestamp: number]: RecipeType[];
  };
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit?: string;
}

export interface IngredientMap {
  [id: string]: Ingredient;
}
