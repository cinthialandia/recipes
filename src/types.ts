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
