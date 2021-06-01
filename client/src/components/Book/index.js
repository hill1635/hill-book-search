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
      title: bookInfo.title,
      lgImg: bookInfo.imageLinks.thumbnail,
      smImg: bookInfo.imageLinks.smallThumbnail,
      author: bookInfo.authors.join(", "),
      pageCount: bookInfo.pageCount,
      publisher: bookInfo.publisher,
      publishedDate: bookInfo.publishedDate,
      rating: bookInfo.averageRating,
      snippet: bookResult.searchInfo.textSnippet,
      synopsis: bookInfo.description,
    };
    bookList.push(book);
  });

  return (
    <div>
      {bookList.map((book) => (
        <div className="bookCard col-4 p-2 border border-solid rounded text-center d-inline-block">
          <img src={book.smImg} alt={book.title}></img>
          <h5>{book.title}</h5>
          <p>Written by {book.author}</p>
          <div className="row col-12">
            <ViewBtn bookInfo={book} />
            <SaveBtn bookInfo={book} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
