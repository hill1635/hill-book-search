import React from "react";
import API from "../../utils/API";
import "./style.css";

function SaveBtn(props) {
  var bookInfo = props.bookInfo;

  function saveBook() {
    var book = {
      lgImg: bookInfo.imageLinks.thumbnail,
      smImg: bookInfo.imageLinks.smallThumbnail,
      title: bookInfo.title,
      author: bookInfo.authors.join(", "),
      synopsis: bookInfo.description,
    };
    API.postBook(book);
  }

  return <button onClick={saveBook}>Save</button>;
}

export default SaveBtn;
