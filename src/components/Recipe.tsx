import React from "react";
import { fakeRecipe, fakeIngredients } from "../Mock";

const Recipe: React.FC = () => {
  console.log(fakeRecipe);
  return (
    <div className="Recipe">
      <div>{fakeRecipe.name}</div>
      <img style={{ width: "400px" }} src={fakeRecipe.photo} alt="food" />
      <div>
        {fakeRecipe.ingredients.map(({ quantity, id }) => (
          <>
            <p>{fakeIngredients[id].name}</p>
            <p>{fakeIngredients[id].unit}</p>
            <p>{quantity}</p>
          </>
        ))}
      </div>
      <div>{fakeRecipe.preparation}</div>
    </div>
  );
};

export default Recipe;
