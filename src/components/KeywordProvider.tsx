import React from "react";
import { KeywordContext } from "../context";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Keyword, KeywordMap } from "../types";
import { db } from "../firebase";

const KeywordProvider: React.FC = ({ children }) => {
  const [value, loading, error] = useCollectionData<Keyword>(
    db.collection("users/fake/keywords"),
    {
      idField: "id",
    }
  );
  const valueAsMap = value
    ? value.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
      }, {} as KeywordMap)
    : {};

  return (
    <KeywordContext.Provider value={{ value: valueAsMap, loading, error }}>
      {children}
    </KeywordContext.Provider>
  );
};

export default KeywordProvider;
