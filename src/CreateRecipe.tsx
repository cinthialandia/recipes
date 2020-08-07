import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SelectIngredient from "./components/SelectIngredient";
import { fakeIngredients } from "./Mock";

const CreateRecipe: React.FC<RouteComponentProps> = () => {
  const [ingredients, setIngredients] = useState<{ [id: string]: number }>({});

  const handleIngredientInput = (id: string, quantity: number) => {
    setIngredients({ ...ingredients, [id]: quantity });
  };
  return (
    <div className="Create-Recipe">
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the recipe"
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            className="position-relative"
            required
            name="file"
            label="Upload a photo"
            // onChange={handleChange}
            // isInvalid={!!errors.file}
            // feedback={errors.file}
            id="validationFormik107"
            feedbackTooltip
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        {Object.entries(ingredients).map(([id, quantity]) => (
          <div key={id}>
            {fakeIngredients[id].name}: {quantity} {fakeIngredients[id].unit}
          </div>
        ))}

        <SelectIngredient onInput={handleIngredientInput} />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateRecipe;
