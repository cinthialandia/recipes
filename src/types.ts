export interface Recipe {
  id: string;
  name: string;
  photo: string;
  preparation: string;
  ingredients: {
    id: string;
    quantity: number;
  }[];
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit?: string;
}
