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
        <img src={logo} alt="Logo" />
        <h1>Cinthialandia Recipes</h1>
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
