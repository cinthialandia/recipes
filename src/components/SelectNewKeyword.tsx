import React from "react";
import Form from "react-bootstrap/Form";
import { KeywordFilter } from "../Mock";

const SelectNewKeyword: React.FC = () => {
  return (
    <div className="container-select-keyword">
      <Form.Group>
        <Form.Label>Select an existing Keyword</Form.Label>
        <Form.Control as="select" custom>
          {KeywordFilter.map((keyword) => (
            <option key={keyword}>{keyword}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default SelectNewKeyword;
