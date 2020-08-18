import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./NewIngredient.scss";
import { UNITS } from "../constants";

// const SelectIngredientToObject = Object.values(fakeIngredients);

// interface Props {
//   onInput: (id: string, quantity: number) => void;
// }

const NewIngredient: React.FC = () => {
  return (
    <div className="container-select-ingredient">
      <div className="select-new-ingredient">
        <Form.Group>
          <Form.Label>Ingredient</Form.Label>
          <Form.Control type="text" placeholder="Enter an ingredient" />
        </Form.Group>
      </div>
      <div className="select-ingredient-quantity">
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" min="0" placeholder="Quantity" />
        </Form.Group>
      </div>
      <div className="select-ingredient-choose">
        <Form.Group>
          <Form.Label>Unit</Form.Label>
          <Form.Control as="select" defaultValue="Choose the unit">
            <option>Choose the unit</option>
            {UNITS.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>
      <Button className="button-save-new-ingredient">Create</Button>
    </div>
  );
};

export default NewIngredient;
