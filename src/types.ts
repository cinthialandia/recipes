export interface Recipe {
  id: string;
  name: string;
  photo: string;
  preparation: string;
  menu: {
    timestamp: number;
    date: string;
    type: "breakfast" | "lunch" | "dinner";
  }[];
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
