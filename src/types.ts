export type RecipeType = "breakfast" | "lunch" | "dinner";

export interface Keyword {
  id: string;
  name: string;
}

export interface KeywordMap {
  [id: string]: Keyword;
}

export interface Recipe {
  id: string;
  keyword: string;
  name: string;
  photo: string;
  preparation: string;
  menu: {
    timestamp: number;
    date: string;
    type: RecipeType;
  }[];
  ingredients: {
    id: string;
    quantity: number;
  }[];
  serving: number;
  time: string;
  difficulty: "Easy" | "Medium" | "Hard";
  nutrition: {
    calories: number;
    carbohydrates: number;
    fats: number;
    proteins: number;
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
