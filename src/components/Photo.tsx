import React from "react";
import Form from "react-bootstrap/Form";

const Photo: React.FC = () => {
  return (
    <div>
      {" "}
      <Form.Group>
        <Form.File
          required
          name="file"
          label="Upload a photo"
          // onChange={handleChange}
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
