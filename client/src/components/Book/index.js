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
      // snippet: bookResult.searchInfo.textSnippet,
      synopsis: bookInfo.description,
    };
    bookList.push(book);
  });

  return (
    <div>
      {bookList.map((book) => (
        <div className="bookCard card m-5 p-0 col-lg-5 col-xs-12 border border-solid rounded d-inline-block" key={book.title}>
          <div className="row g-0">
            <div className="col-4">
              <img src={book.lgImg} alt={book.title} className="bookImg"></img>
            </div>
            <div className="col-8">
              <div className="card-body p-3">
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>Rating: {book.rating}</p>
                <div className="buttons row col-12">
                  <ViewBtn bookInfo={book} />
                  <SaveBtn bookInfo={book} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
