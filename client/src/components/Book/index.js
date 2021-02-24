import React from "react";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import "./style.css";

function Book(props) {

  return (
    <div>
      {props.resultsList.map((book) => (
        <div className="bookCard p-3 border rounded">
          <h5>{book.volumeInfo.title}</h5>
          <ViewBtn />
          <SaveBtn bookInfo={book.volumeInfo} />
          <p>Written by Author</p>
          <img src={book.volumeInfo.imageLinks} alt={book.volumeInfo.title}></img>
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Book;
