import React from "react";
import { auth } from "../firebase";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "./Login.scss";

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
      <h3 className="login">Log in</h3>
      <div className="container-login">
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
      <div className="register-user-button">
        <Button variant="link" onClick={() => handleSignUp(false)}>
          Not user yet? Sign up
        </Button>
      </div>
    </div>
  );
};

export default Login;
