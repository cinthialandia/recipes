import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RecipeNutrition } from "../types";
import "./Nutrition.scss";

interface Props {
  nutrition: RecipeNutrition;
  setNutrition: (nutrition: RecipeNutrition) => void;
}

const DetailsRecipe: React.FC<Props> = ({ nutrition, setNutrition }) => {
  const handleInpuCalories = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNutrition({ ...nutrition, calories: parseFloat(e.target.value) });
  };

  const handleInpuProteins = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNutrition({ ...nutrition, proteins: parseFloat(e.target.value) });
  };

  const handleInpuCarbs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNutrition({ ...nutrition, carbohydrates: parseFloat(e.target.value) });
  };

  const handleInpuFats = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNutrition({ ...nutrition, fats: parseFloat(e.target.value) });
  };

  return (
    <div>
      <Form.Group></Form.Group>
      <div className="container-calories-car-pro-fats">
        <div className="create-recipe-calories">
          <Form.Label>Calories</Form.Label>
          <InputGroup>
            <Form.Control
              onChange={handleInpuCalories}
              type="number"
              min="0"
              placeholder=""
              value={nutrition.calories}
            />
            <InputGroup.Append>
              <InputGroup.Text>Kcal</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div className="create-recipe-calories">
          <Form.Label>Carbohydrates</Form.Label>
          <InputGroup>
            <Form.Control
              value={nutrition.carbohydrates}
              onChange={handleInpuCarbs}
              type="number"
              min="0"
              placeholder=""
            />
            <InputGroup.Append>
              <InputGroup.Text>gr</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div className="create-recipe-calories">
          <Form.Label>Proteins</Form.Label>
          <InputGroup>
            <Form.Control
              value={nutrition.proteins}
              onChange={handleInpuProteins}
              type="number"
              min="0"
              placeholder=""
            />
            <InputGroup.Append>
              <InputGroup.Text>gr</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div className="create-recipe-calories">
          <Form.Label>Fats</Form.Label>
          <InputGroup>
            <Form.Control
              value={nutrition.fats}
              onChange={handleInpuFats}
              type="number"
              min="0"
              placeholder=""
            />
            <InputGroup.Append>
              <InputGroup.Text>gr</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default DetailsRecipe;
