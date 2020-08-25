import { Recipe, Ingredient, Keyword } from "./types";

export const USER_ID = "fake";

export const fakeRecipes: Recipe[] = [
  {
    id: "12345677777789",
    keyword: "chicken",
    name: "chicken with potatos",
    photo: "/img/photo2.png",
    preparation:
      "Lorem ipsum dolor sit amet, eget varius aliquam, vestibulum aliquam dolor pede, quisque amet praesent ut, aptent etiam a sit, nostra molestie sed sit eget elit. Mauris elit commodo, consequat donec lacinia tincidunt et nec quis, in ante, ultricies id sodales ipsum. Viverra malesuada, dolor libero wisi vivamus eleifend. Libero dolor donec nisl sociis donec tempor, duis laoreet amet et, arcu lectus quam erat, scelerisque potenti phasellus aenean amet, vivamus ac vel in quis arcu. Fames morbi nec odio, dolor leo ipsum amet. Ac cursus facilisis dui id mollis eleifend, eget sed molestie ac. Vivamus sagittis vitae, facilisis in faucibus dignissim neque porttitor.",
    menu: [
      {
        timestamp: 1596686319469,
        date: "2020-10-23",
        type: "dinner",
      },
      {
        timestamp: 1596686319900,
        date: "2020-10-23",
        type: "lunch",
      },
    ],
    ingredients: [
      {
        id: "545df",
        quantity: 2,
      },
      {
        id: "54gghhj5df",
        quantity: 1,
      },
      {
        id: "dfgfgh",
        quantity: 1,
      },
      {
        id: "545sdfdf",
        quantity: 1,
      },
    ],
    serving: "4",
    time: "70 min",
    difficulty: "Easy",
    nutrition: {
      calories: 440,
      carbohydrates: 30,
      fats: 20,
      proteins: 30,
    },
  },
  {
    id: "9101118888821314",
    keyword: "chicken",
    name: "Carbonara pasta",
    photo: "/img/photo3.jpg",
    preparation:
      "Lorem ipsum dolor sit amet, eget varius aliquam, vestibulum aliquam dolor pede, quisque amet praesent ut, aptent etiam a sit, nostra molestie sed sit eget elit. Mauris elit commodo, consequat donec lacinia tincidunt et nec quis, in ante, ultricies id sodales ipsum. Viverra malesuada, dolor libero wisi vivamus eleifend. Libero dolor donec nisl sociis donec tempor, duis laoreet amet et, arcu lectus quam erat, scelerisque potenti phasellus aenean amet, vivamus ac vel in quis arcu. Fames morbi nec odio, dolor leo ipsum amet. Ac cursus facilisis dui id mollis eleifend, eget sed molestie ac. Vivamus sagittis vitae, facilisis in faucibus dignissim neque porttitor.",
    menu: [
      {
        timestamp: 1596686319469,
        date: "2020-10-23",
        type: "dinner",
      },
      {
        timestamp: 1596686319900,
        date: "2020-10-23",
        type: "lunch",
      },
    ],
    ingredients: [
      {
        id: "545df",
        quantity: 2,
      },
      {
        id: "54gghhj5df",
        quantity: 1,
      },
      {
        id: "dfgfgh",
        quantity: 1,
      },
      {
        id: "545sdfdf",
        quantity: 1,
      },
    ],
    serving: "5",
    time: "78 min",
    difficulty: "Hard",
    nutrition: {
      calories: 300,
      carbohydrates: 20,
      fats: 30,
      proteins: 22,
    },
  },
  {
    id: "1516171899995444419",
    keyword: "chicken",
    name: "ice cream with chocolate",
    photo: "/img/photo3.jpg",
    preparation:
      "Lorem ipsum dolor sit amet, eget varius aliquam, vestibulum aliquam dolor pede, quisque amet praesent ut, aptent etiam a sit, nostra molestie sed sit eget elit. Mauris elit commodo, consequat donec lacinia tincidunt et nec quis, in ante, ultricies id sodales ipsum. Viverra malesuada, dolor libero wisi vivamus eleifend. Libero dolor donec nisl sociis donec tempor, duis laoreet amet et, arcu lectus quam erat, scelerisque potenti phasellus aenean amet, vivamus ac vel in quis arcu. Fames morbi nec odio, dolor leo ipsum amet. Ac cursus facilisis dui id mollis eleifend, eget sed molestie ac. Vivamus sagittis vitae, facilisis in faucibus dignissim neque porttitor.",
    menu: [
      {
        timestamp: 1596686319469,
        date: "2020-10-23",
        type: "dinner",
      },
      {
        timestamp: 1596686319900,
        date: "2020-10-23",
        type: "lunch",
      },
    ],
    ingredients: [
      {
        id: "545df",
        quantity: 2,
      },
      {
        id: "54gghhj5df",
        quantity: 1,
      },
      {
        id: "dfgfgh",
        quantity: 1,
      },
      {
        id: "545sdfdf",
        quantity: 1,
      },
    ],
    serving: "3",
    time: "50 min",
    difficulty: "Medium",
    nutrition: {
      calories: 200,
      carbohydrates: 10,
      fats: 15,
      proteins: 30,
    },
  },
  {
    id: "78965444441232",
    keyword: "chicken",
    name: "Chinese rice",
    photo: "/img/photo4.jpg",
    preparation:
      "Lorem ipsum dolor sit amet, eget varius aliquam, vestibulum aliquam dolor pede, quisque amet praesent ut, aptent etiam a sit, nostra molestie sed sit eget elit. Mauris elit commodo, consequat donec lacinia tincidunt et nec quis, in ante, ultricies id sodales ipsum. Viverra malesuada, dolor libero wisi vivamus eleifend. Libero dolor donec nisl sociis donec tempor, duis laoreet amet et, arcu lectus quam erat, scelerisque potenti phasellus aenean amet, vivamus ac vel in quis arcu. Fames morbi nec odio, dolor leo ipsum amet. Ac cursus facilisis dui id mollis eleifend, eget sed molestie ac. Vivamus sagittis vitae, facilisis in faucibus dignissim neque porttitor.",
    menu: [
      {
        timestamp: 1596686319469,
        date: "2020-10-23",
        type: "dinner",
      },
      {
        timestamp: 1596686319900,
        date: "2020-10-23",
        type: "lunch",
      },
    ],
    ingredients: [
      {
        id: "545df",
        quantity: 2,
      },
      {
        id: "54gghhj5df",
        quantity: 1,
      },
      {
        id: "dfgfgh",
        quantity: 1,
      },
      {
        id: "545sdfdf",
        quantity: 1,
      },
    ],
    serving: "2",
    time: "30 min",
    difficulty: "Easy",
    nutrition: {
      calories: 200,
      carbohydrates: 25,
      fats: 20,
      proteins: 30,
    },
  },
  {
    id: "154896425555556452",
    keyword: "chicken",
    name: "Arepa with tuna",
    photo: "/img/photo5.jpg",
    preparation:
      "Lorem ipsum dolor sit amet, eget varius aliquam, vestibulum aliquam dolor pede, quisque amet praesent ut, aptent etiam a sit, nostra molestie sed sit eget elit. Mauris elit commodo, consequat donec lacinia tincidunt et nec quis, in ante, ultricies id sodales ipsum. Viverra malesuada, dolor libero wisi vivamus eleifend. Libero dolor donec nisl sociis donec tempor, duis laoreet amet et, arcu lectus quam erat, scelerisque potenti phasellus aenean amet, vivamus ac vel in quis arcu. Fames morbi nec odio, dolor leo ipsum amet. Ac cursus facilisis dui id mollis eleifend, eget sed molestie ac. Vivamus sagittis vitae, facilisis in faucibus dignissim neque porttitor.",
    menu: [
      {
        timestamp: 1596686319469,
        date: "2020-10-23",
        type: "dinner",
      },
      {
        timestamp: 1596686319900,
        date: "2020-10-23",
        type: "lunch",
      },
    ],
    ingredients: [
      {
        id: "545df",
        quantity: 2,
      },
      {
        id: "54gghhj5df",
        quantity: 1,
      },
      {
        id: "dfgfgh",
        quantity: 1,
      },
      {
        id: "545sdfdf",
        quantity: 1,
      },
    ],
    serving: "2",
    time: "20 min",
    difficulty: "Easy",
    nutrition: {
      calories: 100,
      carbohydrates: 15,
      fats: 20,
      proteins: 15,
    },
  },
  {
    id: "123456666666789",
    keyword: "beans",
    name: "sald with black beans",
    photo: "/img/photo6.jpg",
    preparation:
      "Lorem ipsum dolor sit amet, eget varius aliquam, vestibulum aliquam dolor pede, quisque amet praesent ut, aptent etiam a sit, nostra molestie sed sit eget elit. Mauris elit commodo, consequat donec lacinia tincidunt et nec quis, in ante, ultricies id sodales ipsum. Viverra malesuada, dolor libero wisi vivamus eleifend. Libero dolor donec nisl sociis donec tempor, duis laoreet amet et, arcu lectus quam erat, scelerisque potenti phasellus aenean amet, vivamus ac vel in quis arcu. Fames morbi nec odio, dolor leo ipsum amet. Ac cursus facilisis dui id mollis eleifend, eget sed molestie ac. Vivamus sagittis vitae, facilisis in faucibus dignissim neque porttitor.",
    menu: [
      {
        timestamp: 1596686319469,
        date: "2020-10-23",
        type: "dinner",
      },
      {
        timestamp: 1596686319900,
        date: "2020-10-23",
        type: "lunch",
      },
    ],
    ingredients: [
      {
        id: "545df",
        quantity: 2,
      },
      {
        id: "54gghhj5df",
        quantity: 1,
      },
      {
        id: "dfgfgh",
        quantity: 1,
      },
      {
        id: "545sdfdf",
        quantity: 1,
      },
    ],
    serving: "8",
    time: "92 min",
    difficulty: "Easy",
    nutrition: {
      calories: 200,
      carbohydrates: 30,
      fats: 20,
      proteins: 30,
    },
  },
];

export const fakeRecipe = {
  id: "123456789",
  keyword: "chicken",
  name: "chicken with potatos",
  photo: "/img/photo2.png",
  preparation:
    "Lorem ipsum dolor sit amet, eget varius aliquam, vestibulum aliquam dolor pede, quisque amet praesent ut, aptent etiam a sit, nostra molestie sed sit eget elit. Mauris elit commodo, consequat donec lacinia tincidunt et nec quis, in ante, ultricies id sodales ipsum. Viverra malesuada, dolor libero wisi vivamus eleifend. Libero dolor donec nisl sociis donec tempor, duis laoreet amet et, arcu lectus quam erat, scelerisque potenti phasellus aenean amet, vivamus ac vel in quis arcu. Fames morbi nec odio, dolor leo ipsum amet. Ac cursus facilisis dui id mollis eleifend, eget sed molestie ac. Vivamus sagittis vitae, facilisis in faucibus dignissim neque porttitor.",
  ingredients: [
    {
      id: "545df",
      quantity: 2,
    },
    {
      id: "54gghhj5df",
      quantity: 1,
    },
    {
      id: "dfgfgh",
      quantity: 1,
    },
    {
      id: "545sdfdf",
      quantity: 1,
    },
  ],
};

export const fakeIngredients: { [id: string]: Ingredient } = {
  "545df": {
    id: "545df",
    name: "chicken",
    quantity: 2,
    unit: "gr",
  },
  "54gghhj5df": {
    id: "54gghhj5df",
    name: "potato",
    quantity: 0,
    unit: "gr",
  },
  dfgfgh: {
    id: "dfgfgh",
    name: "cheese",
    quantity: 4,
    unit: "gr",
  },
  "545sdfdf": {
    id: "545sdfdf",
    name: "onion",
    quantity: 5,
    unit: "gr",
  },
};
