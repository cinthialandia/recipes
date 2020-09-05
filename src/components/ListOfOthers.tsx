import React, { useState } from "react";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ListOfOthers.scss";

interface Props {
  listOfItems: string[];
  onRemove: (index: number) => void;
  onSelect: (item: string) => void;
}

const ListOfOthers: React.FC<Props> = ({ listOfItems, onRemove, onSelect }) => {
  const [newItem, setNewItem] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const handleAddClick = () => {
    if (!newItem) {
      return;
    }
    onSelect(newItem);
    setNewItem("");
  };
  return (
    <div className="container-list-of-other">
      <Card>
        <Card.Header>List of other items</Card.Header>
        <Card.Body>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            {listOfItems.map((item, index) => (
              <li key={index}>
                <Button variant="link" onClick={() => onRemove(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
                {item}
              </li>
            ))}
          </ul>

          <Form.Group className="newItem-input">
            <Form.Label>Add a new item</Form.Label>
            <Form.Control
              value={newItem}
              onChange={handleChangeInput}
              type="text"
              placeholder="Enter an item"
            />
          </Form.Group>
          <Button className="newItem-button" onClick={handleAddClick}>
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListOfOthers;
