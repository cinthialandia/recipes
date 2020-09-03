import React from "react";
import { KeywordContext } from "../context";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Keyword, KeywordMap } from "../types";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";

const KeywordProvider: React.FC = ({ children }) => {
  const { value: user } = useAuth();
  const [value, loading, error] = useCollectionData<Keyword>(
    db.collection(`users/${user!.uid}/keywords`),
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
