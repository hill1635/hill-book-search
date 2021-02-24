import React from "react";
import Book from "../Book";
import "./style.css";

function ResultsDiv(props) {
  return (
    <main className="col-11 mx-auto mt-4 p-3 rounded">
      <h5>Search Results</h5>
      <hr></hr>
      <Book 
      resultsList={props.resultsList}
      onClick={props.onClick}
      />
    </main>
  );
}

export default ResultsDiv;
