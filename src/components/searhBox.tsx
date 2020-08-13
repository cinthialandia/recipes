import React, { useState, useCallback } from "react";
import { debounce } from "debounce";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Media from "react-bootstrap/Media";
import { fakeRecipes } from "../Mock";
import { Recipe } from "../types";
import "./SearchBox.scss";

interface Props {
  onSelect: (id: string) => void;
}

const SearchBox: React.FC<Props> = ({ onSelect }) => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState<Recipe[]>([]);

  const searchWord = useCallback(
    debounce(async (keyword: string) => {
      if (keyword === "") {
        setResult([]);
        return;
      }
      setResult(fakeRecipes);
    }, 700),
    [setResult]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchWord(e.target.value);
  };

  const handleClick = (id: string) => {
    onSelect(id);
    setShow(false);
  };

  return (
    <div className="SearchBox">
      {" "}
      <Button variant="primary" onClick={() => setShow(true)}>
        select
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <InputGroup>
              <FormControl onChange={handleChange} placeholder="Search" />
            </InputGroup>
          </Modal.Title>
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Chicken</Dropdown.Item>
            <Dropdown.Item href="#">Beans</Dropdown.Item>
            <Dropdown.Item href="#">Red Meat</Dropdown.Item>
            <Dropdown.Item href="#">Fish</Dropdown.Item>
          </DropdownButton>
        </Modal.Header>
        <Modal.Body>
          {result.map(({ name, id, photo }) => {
            return (
              <div key={id} className="searchBox-recipe-photo">
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
                    <button
                      onClick={() => handleClick(id)}
                      className="stretched-link searchBox-recipe-button"
                      aria-label={`select ${name} recipe`}
                    ></button>
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

export default SearchBox;
