import React, { useState, useCallback } from "react";
import { RouteComponentProps } from "@reach/router";
import { Recipe } from "./types";
import "./CreateShoppingList.scss";
import Button from "react-bootstrap/esm/Button";
import DatePicker from "./components/DatePicker";
import SearchBox from "./components/SearchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/esm/Modal";
import Media from "react-bootstrap/esm/Media";

const CreateShoppingList: React.FC<RouteComponentProps> = () => {
  const [result, setResult] = useState<Recipe[]>([]);
  const [show, setShow] = useState(false);
  const [resultSearchBox, setResultSearchBox] = useState("");
  const [weekTimestamp, setWeektimestamps] = useState<number[]>([]);

  const handleDateChange = useCallback((timestamps: number[]) => {
    setWeektimestamps(timestamps);
  }, []);

  console.log(weekTimestamp);
  console.log(resultSearchBox);

  const handleResult = (result: Recipe[]) => {
    setResult(result);
    console.log(result);
  };

  const handleClick = (id: string) => {
    setResultSearchBox(id);
    setShow(false);
  };
  return (
    <div>
      <h2 className="create-shopping-list-title">Create shopping lists</h2>
      <DatePicker onChange={handleDateChange} />
      <Button
        className="button-selectRecipeModal"
        variant="link"
        onClick={() => setShow(true)}
      >
        Select a recipe <FontAwesomeIcon icon={faUtensils} />
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <SearchBox onResults={handleResult} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result.map(({ name, id, photo }) => {
            return (
              <div key={id} className="Select-Recipe-Modal-recipe-photo">
                <Media>
                  <img
                    width={70}
                    height={48}
                    className="mr-3"
                    src={photo}
                    alt="recipe"
                  />
                  <Media.Body>
                    <h5>{name}</h5>
                    <Button
                      variant="light"
                      onClick={() => handleClick(id)}
                      className="stretched-link Select-Recipe-Modal-button"
                      aria-label={`select ${name} recipe`}
                    ></Button>
                  </Media.Body>
                </Media>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateShoppingList;
