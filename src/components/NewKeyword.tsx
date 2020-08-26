import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { db } from "../firebase";
import "./NewKeyword.scss";

interface Props {
  onInput: (id: string) => void;
}

const NewKeyword: React.FC<Props> = ({ onInput }) => {
  const [newKeyword, setNewKeyword] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewKeyword(e.target.value);
  };

  const handleAddClick = async () => {
    // Add a new document with a generated id.
    const docRef = await db.collection("users/fake/keywords").add({
      name: newKeyword,
    });
    onInput(docRef.id);
  };

  return (
    <div className="container-newKeyword">
      <Form.Group className="newKeyword-input">
        <Form.Label>Enter a new Keyword</Form.Label>
        <Form.Control
          value={newKeyword}
          onChange={handleChangeInput}
          type="text"
          placeholder="Enter an keyword"
        />
      </Form.Group>
      <Button className="newKeyword-button" onClick={handleAddClick}>
        Create
      </Button>
    </div>
  );
};

export default NewKeyword;
