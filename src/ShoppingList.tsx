import React from "react";
import { RouteComponentProps } from "@reach/router";
import List from "./components/List";
import "./ShoppingList.scss";

const ShoppingList: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <h2 className="shopping-list-title">Shopping list</h2>
      <div className="container-shopping-list">
        <List />
      </div>
    </>
  );
};

export default ShoppingList;
