import React from "react";
import { RouteComponentProps } from "@reach/router";
import { fakeRecipes } from "./Mock";
import CalendarWeek from "./components/CalendarWeek";

const Calendar: React.FC<RouteComponentProps> = () => {
  console.log(fakeRecipes);
  return (
    <>
      <CalendarWeek />
    </>
  );
};

export default Calendar;
