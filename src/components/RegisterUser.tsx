import React from "react";
import { auth } from "../firebase";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "./RegisterUser.scss";

interface Props {
  handleRegister: (signUp: boolean) => void;
}

const RegisterUser: React.FC<Props> = ({ handleRegister }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.target as HTMLFormElement);
    const email = values.get("email") as string;
    const password = values.get("password") as string;

    auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h3 className="create-new-account">Create new account</h3>
      <div className="container-for-register-user">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="log-in-button">
        <Button variant="link" onClick={() => handleRegister(true)}>
          Do you have a user? Log in
        </Button>
      </div>
    </div>
  );
};

export default RegisterUser;
