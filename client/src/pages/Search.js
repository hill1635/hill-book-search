import React from "react";
import SearchDiv from "../components/SearchDiv";
import ResultsDiv from "../components/ResultsDiv";
import Book from "../components/Book";
import API from "../utils/API";

function Search() {
  return (
    <div>
      <SearchDiv />
      <ResultsDiv>
        <Book />
      </ResultsDiv>
    </div>
  );
}

export default Search;
