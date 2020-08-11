import React from "react";
import { fakeRecipe } from "../Mock";
import "./CalendarWeek.scss";
import CalendarDay from "./CalendarDay";

const CalendarWeek: React.FC = () => {
  console.log(fakeRecipe);
  return (
    <>
      <h2 className="title-calendar">Calendar</h2>
      <div className="CalendarWeek">
        <div className="title">Meal</div>
        <div>Breakfast</div>
        <div>Lunch</div>
        <div>Dinner</div>

        <CalendarDay day="Monday" />
        <CalendarDay day="Tuesday" />
        <CalendarDay day="Wednesday" />
        <CalendarDay day="Thursday" />
        <CalendarDay day="Friday" />
        <CalendarDay day="Saturday" />
        <CalendarDay day="Sunday" />
      </div>
    </>
  );
};

export default CalendarWeek;
