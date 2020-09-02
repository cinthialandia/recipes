import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import "./ShoppingList.scss";

const ShoppingList: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <h2 className="shopping-list-title">Shopping lists</h2>
      <div className="container-shopping-list">
        <Link to="/create-shopping-list">Create shopping list</Link>
      </div>
    </>
  );
};

export default ShoppingList;
