import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SelectRecipeModal from "./SelectRecipeModal";
import { RecipeType, Recipe } from "../types";
import { format } from "date-fns";
import "./CalendarDay.scss";
import Button from "react-bootstrap/esm/Button";
import { db } from "../firebase";
import Modal from "react-bootstrap/esm/Modal";

const formatDateNumber = (date: Date) => format(date, "d");
const formatDateName = (date: Date) => format(date, "EEEE");

interface Props {
  timestamp: number;
  recipes: Recipe[];
}

const CalendarDay: React.FC<Props> = ({ timestamp, recipes }) => {
  const date = new Date(timestamp);
  const weekDateToDay = formatDateNumber(date);
  const weekDateToDayName = formatDateName(date);
  const [show, setShow] = useState(false);

  const filterRecipeByType = (recipes: Recipe[], recipeType: RecipeType) =>
    recipes.filter(
      (recipe) =>
        recipe.menu &&
        recipe.menu[timestamp] &&
        recipe.menu[timestamp].includes(recipeType)
    );

  const breakfast = filterRecipeByType(recipes, "breakfast");
  const lunch = filterRecipeByType(recipes, "lunch");
  const dinner = filterRecipeByType(recipes, "dinner");

  const handleOnSelect = async (id: string, type: RecipeType) => {
    const dbRef = db.doc(`users/fake/recipes/${id}`);
    const doc = await dbRef.get();
    const data = doc.data() as Recipe;
    const timestamps = data.timestamps ? data.timestamps : [];
    const types = data.menu && data.menu[timestamp] ? data.menu[timestamp] : [];

    dbRef.update({
      timestamps: [...timestamps, timestamp],
      menu: {
        ...data.menu,
        [timestamp]: [...types, type],
      },
    });
  };

  const handleClickRemove = async (id: string, type: string) => {
    const dbRef = db.doc(`users/fake/recipes/${id}`);
    const doc = await dbRef.get();
    const data = doc.data() as Recipe;
    const timestamps = data.timestamps ? data.timestamps : [];
    const types = data.menu && data.menu[timestamp] ? data.menu[timestamp] : [];

    dbRef.update({
      timestamps: timestamps.filter((_timestamp) => _timestamp !== timestamp),
      menu: {
        ...data.menu,
        [timestamp]: types.filter((_type) => _type !== type),
      },
    });
  };

  return (
    <>
      <div className="calendar-day-title">
        <div>{weekDateToDayName}</div>
        <span>{weekDateToDay}</span>
      </div>
      <div>
        {breakfast.map((recipe) => (
          <>
            <Button
              variant="primary"
              onClick={() => setShow(true)}
              // onClick={() => handleClickRemove(recipe.id, "breakfast")}
              key={recipe.id}
            >
              {recipe.name}
            </Button>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Body>
                <p>{recipe.name}</p>
              </Modal.Body>
            </Modal>
          </>
        ))}
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "breakfast")} />
      </div>
      <div>
        {lunch.map((recipe) => (
          <>
            <Button
              variant="primary"
              onClick={() => setShow(true)}
              // onClick={() => handleClickRemove(recipe.id, "lunch")}
              key={recipe.id}
            >
              {recipe.name}
            </Button>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Body>
                <p>{recipe.name}</p>
              </Modal.Body>
            </Modal>
          </>
        ))}
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "lunch")} />
      </div>
      <div>
        {dinner.map((recipe) => (
          <>
            <Button
              variant="primary"
              onClick={() => setShow(true)}
              // onClick={() => handleClickRemove(recipe.id, "dinner")}
              key={recipe.id}
            >
              {recipe.name}
            </Button>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Body>
                <p>{recipe.name}</p>
              </Modal.Body>
            </Modal>
          </>
        ))}
        <SelectRecipeModal onSelect={(id) => handleOnSelect(id, "dinner")} />
      </div>
    </>
  );
};

export default CalendarDay;
