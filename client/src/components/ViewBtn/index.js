import React from "react";
import "./style.css";

function ViewBtn(props) {
  var book = props.bookInfo;

  return (
    <div>
      <button type="button" className="rounded btn-warning" data-bs-toggle="modal" data-bs-target="#modal">
        View
      </button>
      <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className= "modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                {book.title}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <img className="d-inline" src={book.smImg} alt={book.title}></img>
                <p className="d-inline">Written by {book.author}</p>
              </div>
              <p>{book.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBtn;
