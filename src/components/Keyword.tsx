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
      <div className="container-keyword">
        {keywordActive ? (
          <div className="keyword-selected">
            <SelectNewKeyword selected={keyword} onInput={handleKeywordInput} />
            <Button variant="link" onClick={toggleKeywordActive}>
              Enter a new Keyword
            </Button>
          </div>
        ) : (
          <div className="keyword-new">
            <NewKeyword onInput={handleKeywordInput} />
            <Button variant="link" onClick={toggleKeywordActive}>
              Select a new Keyword
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Keyword;
