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
          <Button variant="light">
            {" "}
            <FontAwesomeIcon style={{ color: "#6C757D" }} icon={faHome} /> Home
          </Button>
        </Link>
        <Link className="nav" to="calendar">
          <Button variant="light">
            {" "}
            <FontAwesomeIcon
              style={{ color: "#6C757D" }}
              icon={faCalendarAlt}
            />{" "}
            Calendar
          </Button>
        </Link>
        <Link className="nav" to="shopping-list">
          <Button variant="light">
            {" "}
            <FontAwesomeIcon
              style={{ color: "#6C757D" }}
              icon={faShoppingCart}
            />{" "}
            Shopping List
          </Button>
        </Link>
        <Link className="nav" to="create-recipe">
          <Button variant="light">
            <FontAwesomeIcon style={{ color: "#6C757D" }} icon={faFile} />{" "}
            Create recipe
          </Button>
        </Link>
        <Button variant="light" onClick={logout}>
          <FontAwesomeIcon style={{ color: "#6C757D" }} icon={faSignOutAlt} />{" "}
          Logout
        </Button>
      </header>
      <Navbar className="nav-container" expand="lg" bg="light">
        <Navbar.Brand>
          <Link className="nav" to="/">
            <FontAwesomeIcon style={{ color: "#6C757D" }} icon={faHome} />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link className="nav" to="calendar">
            <FontAwesomeIcon
              style={{ color: "#6C757D" }}
              icon={faCalendarAlt}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link className="nav" to="shopping-list">
            <FontAwesomeIcon
              style={{ color: "#6C757D" }}
              icon={faShoppingCart}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link className="nav" to="create-recipe">
            <FontAwesomeIcon style={{ color: "#6C757D" }} icon={faFile} />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Button variant="light" onClick={logout}>
            <FontAwesomeIcon style={{ color: "#6C757D" }} icon={faSignOutAlt} />
          </Button>
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
            </Router>
          </KeywordProvider>
        </IngredientsProvider>
      </div>
    </>
  );
}

export default AuthenticatedApp;
