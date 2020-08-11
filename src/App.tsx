import React from "react";
import { Router, Link } from "@reach/router";
import Home from "./Home";
import "./App.scss";
import Calendar from "./Calendar";
import ShoppingList from "./ShoppingList";
import CreateRecipe from "./CreateRecipe";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="App">
      <header className="nav-container">
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
      <Router>
        <Home path="/">
          <Recipe path="/recipe/:recipeId" />
        </Home>
        <Calendar path="calendar" />
        <ShoppingList path="shopping-list" />
        <CreateRecipe path="create-recipe" />
      </Router>
    </div>
  );
}

export default App;
