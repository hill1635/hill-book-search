import React from "react";
import SearchBtn from "../SearchBtn";
import "./style.css";

function SearchDiv(props) {
  return (
    <div className="searchDiv col-11 mx-auto mt-5 p-3 text-center">
      <div className="searchRow mx-auto col-6">
        <input className="searchInput col-10 border border-right-0 border-solid" type="text" onChange={props.onChange}></input>
        <SearchBtn onClick={props.onClick} search={props.search}/>
      </div>
    </div>
  );
}

export default SearchDiv;
