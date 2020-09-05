import React, { useState, useEffect, useMemo } from "react";
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
import "./DatePicker.scss";

const getWeekDates = (date: Date) => {
  const start = startOfWeek(date);
  const end = endOfWeek(date);
  const weekDates = eachDayOfInterval({ start, end });
  return weekDates;
};

const getWeekTimestamps = (dates: Date[]) => {
  return dates.map((date) => date.getTime());
};

interface Props {
  onChange: (timestamps: number[]) => void;
}

const DatePicker: React.FC<Props> = ({ onChange }) => {
  const [activeDate, setActiveDate] = useState(new Date());
  const weekDates = useMemo(() => getWeekDates(activeDate), [activeDate]);
  const firstDay = useMemo(() => format(weekDates[0], "d LLLL"), [weekDates]);
  const endDay = useMemo(() => format(weekDates[6], "d LLLL"), [weekDates]);
  const weekTimestamps = useMemo(() => getWeekTimestamps(weekDates), [
    weekDates,
  ]);
  const actualYear = useMemo(() => format(weekDates[6], "yyyy"), [weekDates]);

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

  useEffect(() => {
    onChange(weekTimestamps);
  }, [weekTimestamps, onChange]);

  return (
    <>
      <div className="calendar-week-container-button-and-date">
        <Button variant="light" onClick={handlePrevWeek}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <div className="title-meal-month-year-container">
          <h2>{`${firstDay} - ${endDay}`}</h2>
          <h3>{actualYear}</h3>
        </div>
        <Button variant="light" onClick={handleNextWeek}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
    </>
  );
};

export default DatePicker;
