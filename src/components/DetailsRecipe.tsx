import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RecipeDetails } from "../types";
import "./DetailsRecipe.scss";

interface Props {
  details: RecipeDetails;
  setDetails: (details: RecipeDetails) => void;
}

const DetailsRecipe: React.FC<Props> = ({ details, setDetails }) => {
  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, name: e.target.value });
  };

  const handleInputServing = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, serving: e.target.value });
  };

  const handleInputTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, time: e.target.value });
  };

  const handleInputDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
    //we are setting with typescript that the value is a valid one, example Easy
    setDetails({
      ...details,
      difficulty: e.target.value as RecipeDetails["difficulty"],
    });
  };

  return (
    <div>
      <Form.Group>
        <Form.Group>
          <Form.Label>Name of the recipe</Form.Label>
          <Form.Control
            value={details.name}
            type="text"
            placeholder="Enter the name of the recipe"
            onChange={handleInputName}
          />
        </Form.Group>
        <div className="container-serving-time-difficulty">
          <div className="details">
            <Form.Label>Serving</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                min="0"
                placeholder="number of people"
                onChange={handleInputServing}
                value={details.serving}
              />
            </InputGroup>
          </div>

          <div className="details">
            <Form.Label>Time</Form.Label>
            <InputGroup>
              <Form.Control
                value={details.time}
                type="number"
                min="0"
                placeholder="time in minutes"
                onChange={handleInputTime}
              />
              <InputGroup.Append>
                <InputGroup.Text>min</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="details">
            <Form.Label>Difficulty</Form.Label>
            <Form.Control
              as="select"
              custom
              onChange={handleInputDifficulty}
              value={details.difficulty}
            >
              <option value={"Easy"}>Easy</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Hard"}>Hard</option>
            </Form.Control>
          </div>
        </div>
      </Form.Group>
    </div>
  );
};

export default DetailsRecipe;
