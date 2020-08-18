export type RecipeType = "breakfast" | "lunch" | "dinner";

export type Keyword = string[];

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
