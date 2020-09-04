import React from "react";
import { auth } from "../firebase";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

interface Props {
  handleSignUp: (register: boolean) => void;
}

const Login: React.FC<Props> = ({ handleSignUp }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.target as HTMLFormElement);
    const email = values.get("email") as string;
    const password = values.get("password") as string;

    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button variant="link" onClick={() => handleSignUp(false)}>
        Not user yet? Sign up
      </Button>
    </div>
  );
};

export default Login;
