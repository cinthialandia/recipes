import React, { useContext, useState } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import "./ShoppingList.scss";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ShoppingList as IShoppingList } from "./types";
import { db } from "./firebase";
import { IngredientContext } from "./context";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/esm/Card";

const ShoppingList: React.FC<RouteComponentProps> = () => {
  const [values] = useCollectionData<IShoppingList>(
    db.collection("users/fake/shoppingLists"),
    { idField: "id" }
  );

  const { value: ingredientMap } = useContext(IngredientContext);

  const onRemove = async (ingredientId: string, list: IShoppingList) => {
    delete list.ingredients[ingredientId];
    const dbRef = db.doc(`users/fake/shoppingLists/${list.id}`);
    await dbRef.update({
      ingredients: list.ingredients,
    });
  };

  const clickRemove = async (list: IShoppingList) => {
    const dbRef = db.doc(`users/fake/shoppingLists/${list.id}`);
    await dbRef.delete();
  };

  return (
    <>
      <h2 className="shopping-list-title">Shopping lists</h2>
      <Link to="/create-shopping-list">Create shopping list</Link>

      {values
        ? values.map((list) => (
            <div key={list.id}>
              <Card>
                <Card.Header>{list.name}</Card.Header>
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  {Object.entries(list.ingredients).map(([id, quantity]) =>
                    ingredientMap && ingredientMap[id] ? (
                      <li key={id} className="showIngredient-selected">
                        <Button
                          onClick={() => onRemove(id, list)}
                          variant="link"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        {ingredientMap[id].name}: {quantity}{" "}
                        {ingredientMap[id].unit}
                      </li>
                    ) : null
                  )}
                </ul>
                <div>
                  <Button onClick={() => clickRemove(list)} variant="danger">
                    Delete the list
                  </Button>
                </div>
              </Card>
            </div>
          ))
        : null}
    </>
  );
};
export default ShoppingList;
