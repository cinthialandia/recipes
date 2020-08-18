import React from "react";
import Form from "react-bootstrap/Form";

const NewKeyword: React.FC = () => {
  return (
    <div className="container-select-new-keyword">
      <Form.Group>
        <Form.Label>Enter a new Keyword</Form.Label>
        <Form.Control type="text" placeholder="Enter an keyword" />
      </Form.Group>
    </div>
  );
};

export default NewKeyword;
