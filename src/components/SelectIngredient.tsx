import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Typeahead } from "react-bootstrap-typeahead";
import { Ingredient } from "../types";
import "./SelectIngredient.scss";
import { IngredientContext } from "../context";

interface Props {
  onInput: (id: string, quantity: number) => void;
}

const SelectIngredient: React.FC<Props> = ({ onInput }) => {
  const [ingredientSelect, setIngredienteSelect] = useState<Ingredient>();
  const [ingredientQuantity, setIngredientQauntity] = useState("0");
  const { value: ingredientMap } = useContext(IngredientContext);

  const ingredientList = ingredientMap ? Object.values(ingredientMap) : [];

  const handleAddClick = () => {
    if (ingredientSelect === undefined) {
      return;
    }

    onInput(ingredientSelect.id, parseFloat(ingredientQuantity));
    //cleaning inputs
    setIngredientQauntity("0");
    setIngredienteSelect(undefined);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientQauntity(e.target.value);
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
          options={ingredientList}
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
              step="any"
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
