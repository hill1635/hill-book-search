import React from "react";
import API from "../../utils/API";
import "./style.css";

function SaveBtn(props) {
  function saveBook() {
    API.postBook(props.bookInfo);
  }

  return (
    <button className="text-primary bg-transparent border-0" onClick={saveBook}>
      <i class="fas fa-save"></i>
    </button>
  );
}

export default SaveBtn;
