import React from "react";
import Card from "react-bootstrap/esm/Card";
import { Recipe } from "../types";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  listOfRecipesSelected: Recipe[];
  onRemove: (id: string) => void;
}

const ListOfRecipesSelected: React.FC<Props> = ({
  listOfRecipesSelected,
  onRemove,
}) => {
  return (
    <>
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
        </Card.Body>
      </Card>
    </>
  );
};

export default ListOfRecipesSelected;
