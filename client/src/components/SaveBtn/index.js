import React from "react";
import API from "../../utils/API";
import "./style.css";

function SaveBtn(props) {
  
  function saveBook() {
    API.postBook(props.bookInfo);
  }

  return <button className="rounded btn-success" onClick={saveBook}>Save</button>;
}

export default SaveBtn;
