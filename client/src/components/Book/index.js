import React from "react";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import "./style.css";

function Book(props) {
  var bookList = [];
  props.resultsList.forEach((bookResult) => {
    console.log(bookResult);
    var bookInfo = bookResult.volumeInfo;
    var book = {
      lgImg: bookInfo.imageLinks.thumbnail,
      smImg: bookInfo.imageLinks.smallThumbnail,
      title: bookInfo.title,
      author: bookInfo.authors.join(", "),
      synopsis: bookInfo.description,
    };
    bookList.push(book);
  });

  return (
    <div>
      {bookList.map((book) => (
        <div className="bookCard p-3 border rounded">
          <h5>{book.title}</h5>
          <ViewBtn bookInfo={book} />
          <SaveBtn bookInfo={book} />
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

export default Book;
