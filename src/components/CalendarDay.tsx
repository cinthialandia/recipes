import React from "react";
import SelectRecipeModal from "./SelectRecipeModal";
import { RecipeType } from "../types";
import { format } from "date-fns";
import "./CalendarDay.scss";

const formatDateNumber = (date: Date) => format(date, "d");
const formatDateName = (date: Date) => format(date, "EEEE");

interface Props {
  date: Date;
  onSelect: (id: string, type: RecipeType, date: Date) => void;
}

const CalendarDay: React.FC<Props> = ({ date, onSelect }) => {
  const weekDateToDay = formatDateNumber(date);
  const weekDateToDayName = formatDateName(date);

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
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "breakfast")} />
      </div>
      <div>
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "lunch")} />
      </div>
      <div>
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "dinner")} />
      </div>
    </>
  );
};

export default CalendarDay;
