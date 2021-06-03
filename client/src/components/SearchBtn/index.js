import React from "react";
import "./style.css";

function SearchBtn(props) {
  return (
      <button className="searchBtn col-1 border border-left-0 border-solid bg-transparent" onClick={props.onClick}>
        <i class="fas fa-search text-primary"></i>
      </button>
  );
}

export default SearchBtn;