import React from "react";
import "./CalendarWeek.scss";
import CalendarDay from "./CalendarDay";
import { RecipeType } from "../types";

const CalendarWeek: React.FC = () => {
  const handleRecipeSelect = (id: string, type: RecipeType, date: string) => {
    console.log(id, type, date);
  };
  return (
    <>
      <h2 className="title-calendar">Calendar</h2>
      <div className="CalendarWeek">
        <div className="title">Meal</div>
        <div>Breakfast</div>
        <div>Lunch</div>
        <div>Dinner</div>

        <CalendarDay date="Sunday" onSelect={handleRecipeSelect} />
        <CalendarDay date="Monday" onSelect={handleRecipeSelect} />
        <CalendarDay date="Tuesday" onSelect={handleRecipeSelect} />
        <CalendarDay date="Wednesday" onSelect={handleRecipeSelect} />
        <CalendarDay date="Thursday" onSelect={handleRecipeSelect} />
        <CalendarDay date="Friday" onSelect={handleRecipeSelect} />
        <CalendarDay date="Saturday" onSelect={handleRecipeSelect} />
      </div>
    </>
  );
};

export default CalendarWeek;
