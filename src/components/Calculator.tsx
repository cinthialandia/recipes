import React from "react";
import { Recipe } from "../types";

interface Props {
  breakfast: Recipe[];
  lunch: Recipe[];
  dinner: Recipe[];
}

const Calculator: React.FC<Props> = ({ breakfast, lunch, dinner }) => {
  const dayFood = [...breakfast, ...lunch, ...dinner];

  const nutrition = dayFood.reduce(
    (acc, currentValue) => {
      return {
        calories: acc.calories + currentValue.nutrition.calories,
        fats: acc.fats + currentValue.nutrition.fats,
        protein: acc.protein + currentValue.nutrition.proteins,
        carbs: acc.carbs + currentValue.nutrition.carbohydrates,
      };
    },
    { calories: 0, fats: 0, protein: 0, carbs: 0 }
  );

  return (
    <>
      <div className="calculator-nutrition">{nutrition.calories}</div>
      <div className="calculator-nutrition">{nutrition.protein}</div>
      <div className="calculator-nutrition">{nutrition.fats}</div>
      <div className="calculator-nutrition">{nutrition.carbs}</div>
    </>
  );
};

export default Calculator;
