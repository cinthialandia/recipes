import React from "react";
import SelectRecipeModal from "./SelectRecipeModal";
import { RecipeType, Recipe } from "../types";
import { format } from "date-fns";
import "./CalendarDay.scss";
import Recipes from "./Recipes";

const formatDateNumber = (date: Date) => format(date, "d");
const formatDateName = (date: Date) => format(date, "EEEE");

interface Props {
  timestamp: number;
  onSelect: (id: string, type: RecipeType, date: Date) => void;
  recipes: Recipe[];
}

const CalendarDay: React.FC<Props> = ({ timestamp, onSelect, recipes }) => {
  const date = new Date(timestamp);
  const weekDateToDay = formatDateNumber(date);
  const weekDateToDayName = formatDateName(date);

  const filterRecipeByType = (recipes: Recipe[], recipeType: RecipeType) =>
    recipes.filter(
      (recipe) => recipe.menu && recipe.menu[timestamp].includes(recipeType)
    );

  const breakfast = filterRecipeByType(recipes, "breakfast");
  const lunch = filterRecipeByType(recipes, "lunch");
  const dinner = filterRecipeByType(recipes, "dinner");

  const handleOnSelect = (id: string, type: RecipeType) => {
    onSelect(id, type, date);
  };

  return (
    <>
      <div className="calendar-day-title">
        <div>{weekDateToDayName}</div>
        <span>{weekDateToDay}</span>
      </div>
      <div>
        {breakfast.map((recipe) => (
          <p>{recipe.name}</p>
        ))}
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "breakfast")} />
      </div>
      <div>
        {lunch.map((recipe) => (
          <p>{recipe.name}</p>
        ))}
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "lunch")} />
      </div>
      <div>
        {dinner.map((recipe) => (
          <p>{recipe.name}</p>
        ))}
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "dinner")} />
      </div>
    </>
  );
};

export default CalendarDay;
