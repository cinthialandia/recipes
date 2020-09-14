import React from "react";
import { Router, Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Home";
import "./AuthenticatedApp.scss";
import Calendar from "./Calendar";
import ShoppingList from "./ShoppingList";
import CreateRecipe from "./CreateRecipe";
import Recipe from "./Recipe";
import IngredientsProvider from "./components/IngredientProvider";
import KeywordProvider from "./components/KeywordProvider";
import CreateShoppingList from "./CreateShoppingList";
import { auth } from "./firebase";
import logo from "./img/logo.png";
import EditRecipe from "./EditRecipe";

function AuthenticatedApp() {
  const logout = () => {
    auth.signOut();
  };

  return (
    <>
      <header>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: "50px" }} />
          </Link>
        </Navbar.Brand>
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="calendar">
          Calendar
        </Link>
        <Link className="nav" to="shopping-list">
          Shopping List
        </Link>
        <Link className="nav" to="" onClick={logout}>
          Logout
        </Link>
      </header>
      <Navbar className="nav-container" expand="lg" bg="light">
        <Navbar.Brand>
          <Link className="nav" to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link className="nav" to="calendar">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link className="nav" to="shopping-list">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link onClick={logout} className="nav" to="">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Link>
        </Navbar.Brand>
      </Navbar>
      <div className="App">
        <IngredientsProvider>
          <KeywordProvider>
            <Router>
              <Home path="/" />
              <Recipe path="/recipe/:recipeId" />
              <Calendar path="calendar" />
              <ShoppingList path="shopping-list" />
              <CreateRecipe path="create-recipe" />
              <CreateShoppingList path="/create-shopping-list" />
              <EditRecipe path="/edit-recipe/:recipeId" />
            </Router>
          </KeywordProvider>
        </IngredientsProvider>
      </div>
    </>
  );
}

export default AuthenticatedApp;
