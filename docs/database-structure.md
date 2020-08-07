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

interface DB {
  recipes: Recipe[];
  ingredients: Ingredient[];
}
```

# Examples

### Empty

```json
{
  "recipes": [],
  "ingredients": []
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
      "menu": [
        {
          "timestamp": 1596686319469,
          "date": "2020-10-23",
          "type": "dinner"
        },
        {
          "timestamp": 1596686319900,
          "date": "2020-10-23",
          "type": "lunch"
        }
      ],
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
  ]
}
```
