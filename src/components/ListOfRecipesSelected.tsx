import React from "react";
import Card from "react-bootstrap/esm/Card";
import { Recipe } from "../types";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ListOfRecipesSelected.scss";
import SelectRecipeModal from "./SelectRecipeModal";

interface Props {
  listOfRecipesSelected: Recipe[];
  onRemove: (id: string) => void;
  onSelect: (recipe: Recipe) => void;
}

const ListOfRecipesSelected: React.FC<Props> = ({
  listOfRecipesSelected,
  onRemove,
  onSelect,
}) => {
  return (
    <div className="container-list-of-recipes-selected">
      <Card>
        <Card.Header>Lista de recipes</Card.Header>
        <Card.Body>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            {listOfRecipesSelected.map(({ name, id }) => (
              <li key={id}>
                {" "}
                <Button variant="link" onClick={() => onRemove(id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
                {name}
              </li>
            ))}
          </ul>
          <div className="modal-recipe-container">
            <SelectRecipeModal onSelect={onSelect} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListOfRecipesSelected;
