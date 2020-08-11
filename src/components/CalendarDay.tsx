import React from "react";
import SearchBox from "./searhBox";

interface Props {
  day: string;
}

const CalendarDay: React.FC<Props> = ({ day }) => {
  return (
    <>
      <div className="title">{day}</div>
      <div>
        {" "}
        <SearchBox />
      </div>
      <div>
        {" "}
        <SearchBox />
      </div>
      <div>
        {" "}
        <SearchBox />
      </div>
    </>
  );
};

export default CalendarDay;
