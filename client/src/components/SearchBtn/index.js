import React from "react";
import "./style.css";

function SearchBtn(props) {
  return (
      <button className="searchBtn rounded btn-primary ml-1 float-right" onClick={props.onClick}>Search</button>
  );
}

export default SearchBtn;
