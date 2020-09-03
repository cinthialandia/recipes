import React from "react";
import { useAuth } from "./providers/AuthProvider";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

//copied from https://kentcdodds.com/blog/authentication-in-react-applications
function App() {
  const { value: user, loading, error } = useAuth();
  console.log(user);
  return loading ? (
    <div>loading...</div>
  ) : user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp />
  );
}
export default App;
