import React, { useCallback } from "react";
import { debounce } from "debounce";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { fakeRecipes } from "../Mock";
import { Recipe } from "../types";
import "./SearchBox.scss";

interface Props {
  onResults: (results: Recipe[]) => void;
}

const SearchBox: React.FC<Props> = ({ onResults }) => {
  const searchWord = useCallback(
    debounce(async (keyword: string) => {
      if (keyword === "") {
        onResults([]);
        return;
      }
      onResults(fakeRecipes);
    }, 700),
    [onResults]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchWord(e.target.value);
  };

  const handleSelectFilter = (select: string) => {
    console.log(select);
  };

  return (
    <div className="container-search-box">
      <InputGroup className="search-box-input">
        <FormControl onChange={handleChange} placeholder="Search" />
      </InputGroup>
      <DropdownButton
        className="search-box-dropdwon"
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={<FontAwesomeIcon icon={faFilter} />}
      >
        {/* {KeywordFilter.map((element) => (
          <Dropdown.Item
            key={element}
            onClick={() => handleSelectFilter(element)}
          >
            {element}
          </Dropdown.Item>
        ))} */}
      </DropdownButton>
    </div>
  );
};

export default SearchBox;
