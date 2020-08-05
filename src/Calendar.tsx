import React from "react";
import { RouteComponentProps } from "@reach/router";
import { fakeRecipes } from "./Mock";
import CalendarWeek from "./components/CalendarWeek";
import SearchBox from "./components/searhBox";

const Calendar: React.FC<RouteComponentProps> = () => {
  console.log(fakeRecipes);
  return (
    <>
      <CalendarWeek />
      <SearchBox />
    </>
  );
};

export default Calendar;
