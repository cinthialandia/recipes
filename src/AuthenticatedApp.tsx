import React from "react";
import { Router, Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faShoppingCart,
  faFile,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Home";
import "./AuthenticatedApp.scss";
import Calendar from "./Calendar";
import ShoppingList from "./ShoppingList";
import CreateRecipe from "./CreateRecipe";
import Recipe from "./components/Recipe";
import IngredientsProvider from "./components/IngredientProvider";
import KeywordProvider from "./components/KeywordProvider";
import CreateShoppingList from "./components/CreateShoppingList";
import { auth } from "./firebase";
import Button from "react-bootstrap/esm/Button";

function AuthenticatedApp() {
  const logout = () => {
    auth.signOut();
  };

  return (
    <>
      <header>
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="calendar">
          Calendar
        </Link>
        <Link className="nav" to="shopping-list">
          Shopping List
        </Link>
        <Link className="nav" to="create-recipe">
          Create recipe
        </Link>
        <Button onClick={logout}>Logout</Button>
      </header>
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
            </Router>
          </KeywordProvider>
        </IngredientsProvider>
      </div>
      <footer>
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
            <Link className="nav" to="create-recipe">
              <FontAwesomeIcon icon={faFile} />
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Button variant="light" onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Button>
          </Navbar.Brand>
        </Navbar>
      </footer>
    </>
  );
}

export default AuthenticatedApp;
