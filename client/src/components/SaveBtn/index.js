import React from "react";
import API from "../../utils/API";
import "./style.css";

function SaveBtn(props) {
  var bookInfo = props.bookInfo;

  function saveBook() {
    var book = {
      title: bookInfo.title,
      author: bookInfo.authors.join(", "),
      synopsis: bookInfo.description,
    };
    API.postBook(book);
    console.log("saved");
  }

  return <button onClick={saveBook}>Save</button>;
}

export default SaveBtn;
