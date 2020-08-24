import React from "react";
import { Router, Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faShoppingCart,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Home";
import "./App.scss";
import Calendar from "./Calendar";
import ShoppingList from "./ShoppingList";
import CreateRecipe from "./CreateRecipe";
import Recipe from "./components/Recipe";
import IngredientsProvider from "./components/IngredientProvider";
import KeywordProvider from "./components/KeywordProvider";

function App() {
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
            </Router>
          </KeywordProvider>
        </IngredientsProvider>
      </div>
      <footer>
        <Navbar className="nav-container" expand="lg" bg="dark" variant="dark">
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
        </Navbar>
      </footer>
    </>
  );
}

export default App;
