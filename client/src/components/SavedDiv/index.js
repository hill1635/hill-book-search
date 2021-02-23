import React from "react";
import ViewBtn from "../ViewBtn";
import "./style.css";

function SavedDiv(props) {
  // console.log("savedProps: ", props);
  return (
    <div className="savedDiv col-11 mx-auto mt-5 p-3">
      <h5>Saved Books</h5>
      <hr></hr>
      {props.saved.data.map((book) => (
        <div className="savedCard p-3">
          <h5>{book.title}</h5>
          <ViewBtn />
          <p>Written by {book.author}</p>
          <img
            src={book.img}
            alt={book.title}
          ></img>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedDiv;
