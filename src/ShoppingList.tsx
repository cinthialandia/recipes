import React, { useContext } from "react";
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
import { useAuth } from "./providers/AuthProvider";

const ShoppingList: React.FC<RouteComponentProps> = () => {
  const { value: user } = useAuth();
  const [values] = useCollectionData<IShoppingList>(
    db.collection(`users/${user!.uid}/shoppingLists`),
    { idField: "id" }
  );

  const { value: ingredientMap } = useContext(IngredientContext);

  const onRemove = async (ingredientId: string, list: IShoppingList) => {
    delete list.ingredients[ingredientId];
    const dbRef = db.doc(`users/${user!.uid}/shoppingLists/${list.id}`);
    await dbRef.update({
      ingredients: list.ingredients,
    });
  };

  const clickRemove = async (list: IShoppingList) => {
    const dbRef = db.doc(`users/${user!.uid}/shoppingLists/${list.id}`);
    await dbRef.delete();
  };

  return (
    <div className="container-shooping-list">
      <h2 className="shopping-list-title">Shopping lists</h2>
      <div className="button-create-shopping-list">
        {" "}
        <Button variant="light">
          <Link to="/create-shopping-list">Create shopping list</Link>
        </Button>
      </div>
      <div className="container-card-create-list-shopping">
        {values
          ? values.map((list) => (
              <div key={list.id}>
                <Card className="card-create-list-shopping">
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
                  <div className="button-delete-create-shopping-list">
                    <Button onClick={() => clickRemove(list)} variant="danger">
                      Delete the list
                    </Button>
                  </div>
                </Card>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default ShoppingList;
