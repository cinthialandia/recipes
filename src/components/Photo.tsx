import React from "react";
import Form from "react-bootstrap/Form";

interface Props {
  onChange: (file: File) => void;
}

const Photo: React.FC<Props> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    onChange(e.target.files[0]);
  };

  return (
    <div>
      {" "}
      <Form.Group>
        <Form.File
          name="file"
          label="Upload a photo"
          onChange={handleChange}
          // isInvalid={!!errors.file}
          // feedback={errors.file}
          id="validationFormik107"
          feedbackTooltip
        />
      </Form.Group>
    </div>
  );
};

export default Photo;
