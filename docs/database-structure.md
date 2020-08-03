# Entities

```ts
interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit?: string;
}

interface Recipe {
  id: string;
  name: string;
  photo: string;
  preparation: string;
  ingredients: {
    id: string;
    quantity: number;
  }[];
}

interface DayMenu {
  date: string;
  breakfast: string;
  lunch: string;
  dinner: string;
}

interface DB {
  recipes: Recipe[];
  ingredients: Ingredient[];
  menu: { [day: string]: DayMenu };
}
```

# Examples

### Empty

```json
{
  "recipes": [],
  "ingredients": [],
  "menu": {}
}
```

### Filled

```json
{
  "recipes": [
    {
      "ïd": "sdf54541",
      "name": "Chicken with mushroom",
      "photo": "urlverguita",
      "preparation": ".....",
      "ingredientes": {
        "id": "123456",
        "quantity": 1
      }
    },
    {
      "id": "jsdha54",
      "name": "Salmon with salad",
      "photo": "urlverguita",
      "preparation": ".....",
      "ingredientes": {
        "id": "123455",
        "quantity": 1
      }
    }
  ],
  "ingredients": [
    {
      "id": "5154",
      "name": "fish",
      "quantity": 2,
      "unit": "gr"
    },
    {
      "id": "54654",
      "name": "chicken",
      "quantity": 3,
      "unit": "gr"
    }
  ],

  "menu": {
    "23": {
      "date": "02/03/21",
      "breakfast": "5648645sdf",
      "lunch": "545df",
      "dinner": "545dfgfg"
    }
  }
}
```
