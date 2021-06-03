import React, { useState } from "react";
import SearchDiv from "../components/SearchDiv";
import ResultsDiv from "../components/ResultsDiv";
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
      .catch((err) => (err));
  }

  function searchState(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <SearchDiv onClick={handleSubmit} onChange={searchState} search={search} />
      <ResultsDiv resultsList={resultsList} />
    </div>
  );
}

export default Search;
