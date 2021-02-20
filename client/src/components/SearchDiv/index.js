import React from "react";
import SearchBtn from "../SearchBtn";
import "./style.css";

function SearchDiv(props) {
  // var inputVal = document.querySelector(".searchInput").value;
  // console.log(props);
  return (
    <div className="searchDiv col-11 mx-auto mt-5 p-3">
      <h5>Book Search</h5>
      <p>Book:</p>
      <input className="searchInput col-12" type="text"></input>
      <SearchBtn 
      onClick={props.onClick}
      setSearch={props.setSearch}
      />
    </div>
  );
}

export default SearchDiv;
