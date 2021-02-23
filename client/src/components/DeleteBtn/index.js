import React from "react";
import API from "../../utils/API";
import "./style.css";

function DeleteBtn(props) {

  function deleteBook() {
    API.deleteBook(props.saved._id);
  }

  return <button onClick={deleteBook}>Delete</button>;
}

export default DeleteBtn;
