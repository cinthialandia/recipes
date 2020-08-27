import React, { useState } from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addDays,
  subDays,
} from "date-fns";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./CalendarWeek.scss";
import CalendarDay from "./CalendarDay";
import { RecipeType, Recipe } from "../types";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

const getWeekDates = (date: Date) => {
  const start = startOfWeek(date);
  const end = endOfWeek(date);
  const weekDates = eachDayOfInterval({ start, end });
  return weekDates;
};

const getWeekTimestamps = (dates: Date[]) => {
  return dates.map((date) => date.getTime());
};

const CalendarWeek: React.FC = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  const weekDates = getWeekDates(activeDate);
  const weekTimestamps = getWeekTimestamps(weekDates);
  const actualYear = format(activeDate, "yyyy");
  const actualMonth = format(activeDate, "LLLL");
  const [recipes] = useCollectionData<Recipe>(
    db
      .collection("users/fake/recipes")
      .where("timestamps", "array-contains-any", weekTimestamps),
    {
      idField: "id",
    }
  );

  const handleNextWeek = () => {
    const endOfWeek = weekDates[weekDates.length - 1];
    const startOfNextWeek = addDays(endOfWeek, 1);
    setActiveDate(startOfNextWeek);
  };

  const handlePrevWeek = () => {
    const startOfWeek = weekDates[0];
    const endOfPrevWeek = subDays(startOfWeek, 1);
    setActiveDate(endOfPrevWeek);
  };

  return (
    <>
      <h2 className="title-calendar">Calendar</h2>
      <div className="calendar-week-container-button-and-date">
        <Button variant="light" onClick={handlePrevWeek}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <div className="title-meal-month-year-container">
          <h2>{actualMonth}</h2>
          <h3>{actualYear}</h3>
        </div>
        <Button variant="light" onClick={handleNextWeek}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
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
