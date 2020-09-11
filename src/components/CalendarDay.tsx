import React, { useState } from "react";
import { RecipeType, Recipe } from "../types";
import { format } from "date-fns";
import "./CalendarDay.scss";
import Button from "react-bootstrap/esm/Button";
import { db } from "../firebase";
import Modal from "react-bootstrap/esm/Modal";
import ShowRecipe from "./ShowRecipe";
import { Link } from "@reach/router";
import SelectRecipeModal from "./SelectRecipeModal";
import { useAuth } from "../providers/AuthProvider";
import Calculator from "./Calculator";

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
  const [idRecipe, setIdRecipe] = useState("");
  const [type, setType] = useState("");
  const { value: user } = useAuth();

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
    const dbRef = db.doc(`users/${user!.uid}/recipes/${id}`);
    const doc = await dbRef.get();
    const data = doc.data() as Recipe;
    const timestamps = data.timestamps ? data.timestamps : [];
    const types = data.menu && data.menu[timestamp] ? data.menu[timestamp] : [];

    await dbRef.update({
      timestamps: [...timestamps, timestamp],
      menu: {
        ...data.menu,
        [timestamp]: [...types, type],
      },
    });
  };

  const handleClickRemove = async (id: string, type: string) => {
    const dbRef = db.doc(`users/${user!.uid}/recipes/${id}`);
    const doc = await dbRef.get();
    const data = doc.data() as Recipe;
    const timestamps = data.timestamps ? data.timestamps : [];
    const types = data.menu && data.menu[timestamp] ? data.menu[timestamp] : [];

    await dbRef.update({
      timestamps: timestamps.filter((_timestamp) => _timestamp !== timestamp),
      menu: {
        ...data.menu,
        [timestamp]: types.filter((_type) => _type !== type),
      },
    });
    setShow(false);
  };

  const handleClickModal = (id: string, type: string) => {
    setIdRecipe(id);
    setType(type);
    setShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Body>
          <ShowRecipe recipeId={idRecipe} />
        </Modal.Body>
        <Modal.Footer className="modal-buttons">
          <Link to={`/recipe/${idRecipe}`}>Go to the recipe</Link>
          <Button
            variant="danger"
            onClick={() => handleClickRemove(idRecipe, type)}
          >
            Remove from menu
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="calendar-day-title">
        <div>{weekDateToDayName}</div>
        <span>{weekDateToDay}</span>
      </div>
      <div>
        {breakfast.map((recipe) => (
          <Button
            className="button-modal-calendar-day"
            variant="primary"
            onClick={() => handleClickModal(recipe.id, "breakfast")}
            key={recipe.id}
          >
            {recipe.name}
          </Button>
        ))}
        <SelectRecipeModal
          onSelect={({ id }) => handleOnSelect(id, "breakfast")}
        />
      </div>
      <div>
        {lunch.map((recipe) => (
          <Button
            className="button-modal-calendar-day"
            variant="primary"
            onClick={() => handleClickModal(recipe.id, "lunch")}
            key={recipe.id}
          >
            {recipe.name}
          </Button>
        ))}
        <SelectRecipeModal onSelect={({ id }) => handleOnSelect(id, "lunch")} />
      </div>
      <div>
        {dinner.map((recipe) => (
          <Button
            className="button-modal-calendar-day"
            variant="primary"
            onClick={() => handleClickModal(recipe.id, "dinner")}
            key={recipe.id}
          >
            {recipe.name}
          </Button>
        ))}
        <SelectRecipeModal
          onSelect={({ id }) => handleOnSelect(id, "dinner")}
        />
      </div>
      <Calculator breakfast={breakfast} lunch={lunch} dinner={dinner} />
    </>
  );
};

export default CalendarDay;
