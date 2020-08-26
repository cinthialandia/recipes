import React, { useState } from "react";
import SelectNewKeyword from "./SelectNewKeyword";
import NewKeyword from "./NewKeyword";
import Button from "react-bootstrap/esm/Button";

interface Props {
  keyword: string;
  setKeyword: (id: string) => void;
}

const Keyword: React.FC<Props> = ({ keyword, setKeyword }) => {
  const [keywordActive, setKeywordActive] = useState(true);

  const toggleKeywordActive = () => {
    setKeywordActive(!keywordActive);
  };
  const handleKeywordInput = (id: string) => {
    setKeyword(id);
    setKeywordActive(true);
  };

  return (
    <div>
      {keywordActive ? (
        <div>
          <SelectNewKeyword selected={keyword} onInput={handleKeywordInput} />
          <Button variant="link" onClick={toggleKeywordActive}>
            Enter a new Keyword
          </Button>
        </div>
      ) : (
        <div>
          <NewKeyword onInput={handleKeywordInput} />
          <Button variant="link" onClick={toggleKeywordActive}>
            Select a new Keyword
          </Button>
        </div>
      )}
    </div>
  );
};

export default Keyword;
