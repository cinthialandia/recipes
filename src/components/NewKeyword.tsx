import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { db } from "../firebase";

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
    <div className="container-select-new-keyword">
      <Form.Group>
        <Form.Label>Enter a new Keyword</Form.Label>
        <Form.Control
          value={newKeyword}
          onChange={handleChangeInput}
          type="text"
          placeholder="Enter an keyword"
        />
        <Button onClick={handleAddClick}>Create</Button>
      </Form.Group>
    </div>
  );
};

export default NewKeyword;
