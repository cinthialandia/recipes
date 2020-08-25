import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { KeywordContext } from "../context";

interface Props {
  selected: string;
  onInput: (id: string) => void;
}

const SelectNewKeyword: React.FC<Props> = ({ selected, onInput }) => {
  const { value: keywordMap, loading, error } = useContext(KeywordContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
  };

  const keywordList = keywordMap ? Object.values(keywordMap) : [];
  return (
    <div className="container-select-keyword">
      <Form.Group>
        <Form.Label>Select an existing Keyword</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={selected}
          as="select"
          custom
        >
          <option value="">Choose the keyword</option>
          {keywordList.map((keyword) => (
            <option value={keyword.id} key={keyword.id}>
              {keyword.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default SelectNewKeyword;
