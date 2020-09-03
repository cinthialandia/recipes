import React from "react";
import { auth } from "../firebase";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.target as HTMLFormElement);
    const email = values.get("email") as string;
    const password = values.get("password") as string;

    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>email</div>
        <input type="text" name="email"></input>
        <div>password</div>
        <input type="password" name="password"></input>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
