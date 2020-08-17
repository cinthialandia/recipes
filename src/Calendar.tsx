import React from "react";
import { RouteComponentProps } from "@reach/router";

import CalendarWeek from "./components/CalendarWeek";

const Calendar: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <CalendarWeek />
    </>
  );
};

export default Calendar;
