import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useAuth } from "./providers/AuthProvider";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import "./App.scss";

//copied from https://kentcdodds.com/blog/authentication-in-react-applications
function App() {
  const { value: user, loading } = useAuth();

  return loading ? (
    <div className="loading">
      <Spinner animation="grow" />
    </div>
  ) : user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp />
  );
}
export default App;
