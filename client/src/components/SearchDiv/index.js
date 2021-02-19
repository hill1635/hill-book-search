import React from "react";
import "./style.css";

function SearchDiv() {
  return (
    <div className="searchDiv col-11 mx-auto mt-5">
      <h5>Book Search</h5>
      <p>Book:</p>
      <input className="col-12" type="text"></input>
      <button>Search</button>
    </div>
  );
}

export default SearchDiv;
