import React from "react";
import { RouteComponentProps } from "@reach/router";
import List from "./components/List";

const ShoppingList: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <List />
    </>
  );
};

export default ShoppingList;
