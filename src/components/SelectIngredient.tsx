import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Typeahead } from "react-bootstrap-typeahead";
import { fakeIngredients } from "../Mock";
import { Ingredient } from "../types";
import "./SelectIngredient.scss";

const SelectIngredientToObject = Object.values(fakeIngredients);

interface Props {
  onInput: (id: string, quantity: number) => void;
}

const SelectIngredient: React.FC<Props> = ({ onInput }) => {
  const [ingredientSelect, setIngredienteSelect] = useState<Ingredient>();
  const [ingredientQuantity, setIngredientQauntity] = useState<number>(0);

  const handleAddClick = () => {
    if (ingredientSelect === undefined) {
      return;
    }

    onInput(ingredientSelect.id, ingredientQuantity);
    //cleaning inputs
    setIngredientQauntity(0);
    setIngredienteSelect(undefined);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = e.target.value === "" ? 0 : parseInt(e.target.value);
    setIngredientQauntity(quantity);
  };

  const handleIngredientSelect = ([ingredient]: Ingredient[]) => {
    setIngredienteSelect(ingredient);
  };

  return (
    <div className="select-ingredient">
      <div className="ingredient">
        <Form.Label>Ingredient</Form.Label>
        <Typeahead
          id="select-ingredient"
          options={SelectIngredientToObject}
          labelKey="name"
          placeholder="Choose a ingredient"
          onChange={handleIngredientSelect}
          selected={ingredientSelect ? [ingredientSelect] : []}
        />
      </div>
      <div className="quantity">
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <InputGroup>
            <Form.Control
              onChange={handleQuantityChange}
              type="number"
              min="0"
              placeholder="Quantity"
              value={ingredientQuantity}
            />
            <InputGroup.Append>
              <InputGroup.Text>{ingredientSelect?.unit}</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </div>
      <Button onClick={handleAddClick} className="button-save-ingredient">
        Add
      </Button>
    </div>
  );
};

export default SelectIngredient;
