import React from "react";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import "./style.css";

function Book() {
  return (
    <div className="bookCard p-3">
      <h5>Title</h5>
      <ViewBtn />
      <SaveBtn />
      <p>Written by Author</p>
      <img src="" alt=""></img>
      <p>Synopsis.</p>
    </div>
  );
}

export default Book;
