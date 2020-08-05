import React from "react";
import { fakeRecipe } from "../Mock";

const List: React.FC = () => {
  console.log(fakeRecipe);
  return <div className="List">Aqui va la lista de compras perras!!</div>;
};

export default List;
