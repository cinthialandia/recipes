import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./NewIngredient.scss";
import { UNITS } from "../constants";
import { db } from "../firebase";

interface Props {
  onInput: (id: string, quantity: number) => void;
}

const NewIngredient: React.FC<Props> = ({ onInput }) => {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("0");
  const [unit, setUnit] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  };

  const handleChangeInputQuantity = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantity(e.target.value);
  };

  const handleChangeInputUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(e.target.value);
  };

  const handleClick = async () => {
    // Add a new document with a generated id.
    const docRef = await db.collection("users/fake/ingredients").add({
      name: ingredient,
      quantity: 0,
      unit: unit,
    });
    onInput(docRef.id, parseFloat(quantity));
  };

  return (
    <div className="container-select-ingredient">
      <div className="select-new-ingredient">
        <Form.Group>
          <Form.Label>Ingredient</Form.Label>
          <Form.Control
            value={ingredient}
            onChange={handleChangeInput}
            type="text"
            placeholder="Enter an ingredient"
          />
        </Form.Group>
      </div>
      <div className="select-ingredient-quantity">
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={handleChangeInputQuantity}
            type="number"
            min="0"
            placeholder="Quantity"
            value={quantity}
          />
        </Form.Group>
      </div>
      <div className="select-ingredient-choose">
        <Form.Group>
          <Form.Label>Unit</Form.Label>
          <Form.Control
            onChange={handleChangeInputUnit}
            as="select"
            value={unit}
          >
            <option value="">Choose the unit</option>
            {UNITS.map((unit) => (
              <option value={unit} key={unit}>
                {unit}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>
      <Button
        onClick={handleClick}
        type="button"
        className="button-save-new-ingredient"
      >
        Create
      </Button>
    </div>
  );
};

export default NewIngredient;
