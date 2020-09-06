import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Recipe } from "../types";
import "./SelectRecipeModal.scss";
import SearchBox from "./SearchBox";

interface Props {
  onSelect: (recipe: Recipe) => void;
}

const SelectRecipeModal: React.FC<Props> = ({ onSelect }) => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState<Recipe[]>([]);

  const handleClick = (recipe: Recipe) => {
    onSelect(recipe);
    setShow(false);
  };

  const handleResult = (result: Recipe[]) => {
    setResult(result);
  };

  return (
    <div className="SelectRecipeModal">
      {" "}
      <Button
        className="button-selectRecipeModal"
        variant="link"
        onClick={() => setShow(true)}
      >
        add <FontAwesomeIcon icon={faUtensils} />
      </Button>
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <SearchBox onResults={handleResult} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result.map((recipe) => {
            return (
              <div key={recipe.id} className="Select-Recipe-Modal-recipe-photo">
                <Media>
                  <img
                    width={70}
                    height={48}
                    className="mr-3"
                    src={recipe.photo}
                    alt="recipe"
                  />
                  <Media.Body>
                    <h5>{recipe.name}</h5>
                    <Button
                      variant="light"
                      onClick={() => handleClick(recipe)}
                      className="stretched-link Select-Recipe-Modal-button"
                      aria-label={`select ${recipe.name} recipe`}
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

export default SelectRecipeModal;
