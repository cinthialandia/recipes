import React, { useState, useCallback } from "react";
import "./CalendarWeek.scss";
import CalendarDay from "./CalendarDay";
import DatePicker from "./DatePicker";
import useRecipesByTimestamps from "../hooks/useRecipesByTimestamps";

const CalendarWeek: React.FC = () => {
  const [weekTimestamps, setWeektimestamps] = useState<number[]>([]);
  const recipes = useRecipesByTimestamps(weekTimestamps);

  const handleDateChange = useCallback((timestamps: number[]) => {
    setWeektimestamps(timestamps);
  }, []);

  return (
    <>
      <h2 className="title-calendar">Calendar</h2>
      <DatePicker onChange={handleDateChange} />
      <div className="CalendarWeek">
        <div className="title-meal">
          Meal
          <span role="img" aria-label="meal">
            🥧
          </span>
        </div>
        <div>
          Breakfast{" "}
          <span role="img" aria-label="meal">
            🥞
          </span>
        </div>
        <div>
          Lunch{" "}
          <span role="img" aria-label="meal">
            🥗
          </span>
        </div>
        <div>
          Dinner{" "}
          <span role="img" aria-label="meal">
            🍝
          </span>
        </div>

        {weekTimestamps.map((timestamp) => (
          <CalendarDay
            key={timestamp}
            timestamp={timestamp}
            recipes={
              recipes?.filter((recipe) =>
                recipe.timestamps?.includes(timestamp)
              ) || []
            }
          />
        ))}
      </div>
    </>
  );
};

export default CalendarWeek;
