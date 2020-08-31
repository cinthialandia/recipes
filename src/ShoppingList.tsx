import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import List from "./components/List";
import "./ShoppingList.scss";
import Button from "react-bootstrap/esm/Button";
import DatePicker from "./components/DatePicker";

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
