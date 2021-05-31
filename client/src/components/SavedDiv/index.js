import React from "react";
import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";
import "./style.css";

function SavedDiv(props) {
  // console.log(props.saved);

  return (
    <div className="savedDiv col-11 mx-auto mt-5 p-3 rounded" onLoad={props.onLoad}>
      <h5>Saved Books</h5>
      <hr></hr>
      {props.saved.map((book) => (
        <div className="savedCard p-3">
          <h5>{book.title}</h5>
          <ViewBtn bookInfo={book} />
          <DeleteBtn saved={book} />
          <p>Written by {book.author}</p>
          <img
            src={book.smImg}
            alt={book.title}
          ></img>
        </div>
      ))}
    </div>
  );
}

export default SavedDiv;
