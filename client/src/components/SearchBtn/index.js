import React from "react";
import "./style.css";

function SearchBtn(props) {
  return (
    <div className="col-12 mx-auto">
      <button className="searchBtn" onClick={props.onClick}>Search</button>
    </div>
  );
}

export default SearchBtn;
