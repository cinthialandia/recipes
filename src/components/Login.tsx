import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { auth } from "../firebase";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "./Login.scss";

interface Props {
  handleSignUp: (register: boolean) => void;
}

const Login: React.FC<Props> = ({ handleSignUp }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<firebase.auth.Error>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const values = new FormData(e.target as HTMLFormElement);
    const email = values.get("email") as string;
    const password = values.get("password") as string;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
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
              disabled={loading}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              disabled={loading}
            />
          </Form.Group>
          <Button disabled={loading} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="register-user-button">
        <Button
          disabled={loading}
          variant="link"
          onClick={() => handleSignUp(false)}
        >
          Not user yet? Sign up
        </Button>
        <div className="alert-message">
          {error ? <Alert variant="danger">{error?.message}</Alert> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
