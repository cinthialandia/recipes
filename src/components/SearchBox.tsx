import React, { useState, useEffect, useContext, useMemo } from "react";
import { debounce } from "debounce";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Recipe, Keyword } from "../types";
import "./SearchBox.scss";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { KeywordContext } from "../context";

interface Props {
  onResults: (results: Recipe[]) => void;
}

const SearchBox: React.FC<Props> = ({ onResults }) => {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const query = useMemo(() => {
    let _query: firebase.firestore.Query = db.collection("users/fake/recipes");
    _query = keyword !== "" ? _query.where("keyword", "==", keyword) : _query;
    _query =
      search !== "" ? _query.where("tokens", "array-contains", search) : _query;

    return _query;
  }, [keyword, search]);

  const [values] = useCollectionData<Recipe>(query, { idField: "id" });

  useEffect(
    debounce(() => {
      if (!values) {
        onResults([]);
      } else {
        onResults(values);
      }
    }, 700),
    [values, onResults]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectFilter = (select: string) => {
    setKeyword(select);
  };

  const { value: keywordMap } = useContext(KeywordContext);
  const keywordArr = keywordMap ? Object.values(keywordMap) : [];

  return (
    <div className="container-search-box">
      <InputGroup className="search-box-input">
        <FormControl
          value={search}
          onChange={handleChange}
          placeholder="Search"
        />

        <DropdownButton
          className="search-box-dropdwon"
          as={InputGroup.Append}
          variant={keyword === "" ? "outline-secondary" : "primary"}
          title={<FontAwesomeIcon icon={faFilter} />}
        >
          <Dropdown.Item key={"all"} onClick={() => handleSelectFilter("")}>
            All
          </Dropdown.Item>
          <Dropdown.Divider />
          {keywordArr.map((element: Keyword) => (
            <Dropdown.Item
              key={element.id}
              active={element.id === keyword}
              onClick={() => handleSelectFilter(element.id)}
            >
              {element.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
