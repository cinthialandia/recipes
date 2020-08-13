import React from "react";
import SearchBox from "./searhBox";
import { RecipeType } from "../types";

interface Props {
  date: string;
  onSelect: (id: string, type: RecipeType, date: string) => void;
}

const CalendarDay: React.FC<Props> = ({ date, onSelect }) => {
  const handleOnSelect = (id: string, type: RecipeType) => {
    onSelect(id, type, date);
  };
  return (
    <>
      <div className="title">{date}</div>
      <div>
        <SearchBox onSelect={(id) => handleOnSelect(id, "breakfast")} />
      </div>
      <div>
        <SearchBox onSelect={(id) => handleOnSelect(id, "lunch")} />
      </div>
      <div>
        <SearchBox onSelect={(id) => handleOnSelect(id, "dinner")} />
      </div>
    </>
  );
};

export default CalendarDay;
