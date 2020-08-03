import React from "react";
import Recipes from "./Recipes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div>Home</div>
        <div>Calendar</div>
        <div>Shopping list</div>
      </header>
      <div>
        <Recipes />
        <div>Recipe</div>
      </div>
    </div>
  );
}

export default App;
