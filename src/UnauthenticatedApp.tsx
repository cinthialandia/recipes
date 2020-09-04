import React, { useState } from "react";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import logo from "./img/logo.png";
import "./UnauthenticatedApp.scss";

const UnauthenticatedApp = () => {
  const [login, setLogin] = useState(true);

  const handleSignUp = (register: boolean) => {
    setLogin(register);
  };

  const handleRegister = (signUp: boolean) => {
    setLogin(signUp);
  };

  return (
    <div>
      <div className="logo">
        <h1>Cinthialandia Recipes</h1>
        <img src={logo} alt="Logo" />
      </div>
      {login ? (
        <Login handleSignUp={handleSignUp} />
      ) : (
        <RegisterUser handleRegister={handleRegister} />
      )}
    </div>
  );
};

export default UnauthenticatedApp;
