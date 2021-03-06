import React, { useState, useCallback } from "react";
import "./CalendarWeek.scss";
import CalendarDay from "./CalendarDay";
import DatePicker from "./DatePicker";
import useRecipesByTimestamps from "../hooks/useRecipesByTimestamps";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
          <div>Breakfast</div>
          <span role="img" aria-label="meal">
            🥞
          </span>
        </div>
        <div>
          <div>Lunch</div>
          <span role="img" aria-label="meal">
            🥗
          </span>
        </div>
        <div>
          <div>Dinner</div>
          <span role="img" aria-label="meal">
            🍝
          </span>
        </div>
        <div className="calculator-nutrition">
          <div>Total calories</div>
          <span role="img" aria-label="meal">
            ⚡
          </span>
        </div>
        <div className="calculator-nutrition">
          <div>Total protein</div>
          <span role="img" aria-label="meal">
            🐟
          </span>
        </div>
        <div className="calculator-nutrition">
          <div>Total fat</div>
          <span role="img" aria-label="meal">
            🥑
          </span>
        </div>
        <div className="calculator-nutrition">
          <div>Total carbohydrate</div>
          <span role="img" aria-label="meal">
            🍚
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
      <Link className="float-button btn btn-primary" to="create-recipe">
        <FontAwesomeIcon icon={faPlus} />
      </Link>
    </>
  );
};

export default CalendarWeek;
