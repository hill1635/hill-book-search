import React, { useState } from "react";
import SearchDiv from "../components/SearchDiv";
import ResultsDiv from "../components/ResultsDiv";
import Book from "../components/Book";
import API from "../utils/API";

function Search() {
  const [resultsList, setResultsList] = useState([]);
  const [search, setSearch] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    API.searchBooks(search)
      .then((books) => {
        var response = books.data.items;
        setResultsList(response);
      })
      .catch((err) => console.log(err));
  }

  function searchState(e) {
    setSearch(e.target.value);
  }

  function saveBook(e) {
    console.log("this: ", e.target.parentNode);
  }

  return (
    <div>
      <SearchDiv onClick={handleSubmit} onChange={searchState} search={search} />
      <ResultsDiv resultsList={resultsList} onClick={saveBook} />
    </div>
  );
}

export default Search;
