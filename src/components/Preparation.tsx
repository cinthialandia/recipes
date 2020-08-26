import React from "react";
import Form from "react-bootstrap/Form";

interface Props {
  preparation: string;
  setPreparation: (preparation: string) => void;
}

const Preparation: React.FC<Props> = ({ preparation, setPreparation }) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreparation(e.target.value);
  };
  return (
    <div>
      <Form.Group>
        <Form.Control
          placeholder="Your preparation here"
          value={preparation}
          onChange={handleChangeInput}
          as="textarea"
        />
      </Form.Group>
    </div>
  );
};

export default Preparation;
