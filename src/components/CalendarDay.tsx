import React from "react";

interface Props {
  day: string;
}

const CalendarDay: React.FC<Props> = ({ day }) => {
  return (
    <>
      <div className="title">{day}</div>
      <div>lorem</div>
      <div>lorem</div>
      <div>lorem</div>
    </>
  );
};

export default CalendarDay;
