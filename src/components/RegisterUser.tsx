import React, { useState } from "react";
import { auth } from "../firebase";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "./RegisterUser.scss";
import Alert from "react-bootstrap/esm/Alert";

interface Props {
  handleRegister: (signUp: boolean) => void;
}

const RegisterUser: React.FC<Props> = ({ handleRegister }) => {
  const [error, setError] = useState<firebase.auth.Error>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const values = new FormData(e.target as HTMLFormElement);
    const email = values.get("email") as string;
    const password = values.get("password") as string;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
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
      <div className="log-in-button">
        <Button
          disabled={loading}
          variant="link"
          onClick={() => handleRegister(true)}
        >
          Do you have a user? Log in
        </Button>
      </div>
      <div className="alert-message">
        {error ? <Alert variant="danger">{error?.message}</Alert> : null}
      </div>
    </div>
  );
};

export default RegisterUser;
