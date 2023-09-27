import React from "react";
import "./SearchResultsLists.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsLists = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};
