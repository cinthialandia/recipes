import React from "react";
import { RouteComponentProps } from "@reach/router";
import { fakeRecipes } from "./Mock";

import List from "./components/List";

const ShoppingList: React.FC<RouteComponentProps> = () => {
  console.log(fakeRecipes);
  return (
    <>
      <List />
    </>
  );
};

export default ShoppingList;
