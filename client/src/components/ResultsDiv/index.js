import React from "react";
import Book from "../Book";
import "./style.css";

function ResultsDiv(props) {
  return (
    <main className="results col-11 mx-auto mt-4 p-3">
      <div className="col-6 mx-auto text-center">
        <h5>Search Results</h5>
        <hr></hr>
      </div>
      <Book resultsList={props.resultsList} onClick={props.onClick}/>
    </main>
  );
}

export default ResultsDiv;
