import React from "react";
import { Router, Link } from "@reach/router";
import Home from "./Home";
import "./App.scss";
import Calendar from "./Calendar";
import ShoppingList from "./ShoppingList";

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
      </header>
      <Router>
        <Home path="/" />
        <Calendar path="calendar" />
        <ShoppingList path="shopping-list" />
      </Router>
    </div>
  );
}

export default App;
