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
  onSelect: (id: string) => void;
}

const SelectRecipeModal: React.FC<Props> = ({ onSelect }) => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState<Recipe[]>([]);

  const handleClick = (id: string) => {
    onSelect(id);
    setShow(false);
  };

  const handleResult = (result: Recipe[]) => {
    setResult(result);
  };

  return (
    <div className="SelectRecipeModal">
      {" "}
      <Button variant="link" onClick={() => setShow(true)}>
        add <FontAwesomeIcon icon={faUtensils} />
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

export default SelectRecipeModal;
