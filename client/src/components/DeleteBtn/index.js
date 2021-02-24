import React from "react";
import API from "../../utils/API";
import "./style.css";

function DeleteBtn(props) {

  function deleteBook() {
    API.deleteBook(props.saved._id);
  }

  return <button className="rounded btn-danger" onClick={deleteBook}>Delete</button>;
}

export default DeleteBtn;
