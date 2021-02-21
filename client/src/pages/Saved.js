import React, { useState } from "react";
import SavedDiv from "../components/SavedDiv";
import Book from "../components/Book";
import API from "../utils/API";

function Saved() {
  const [saved, setSaved] = useState();

  function renderSaved() {
    API.getBooks()
      .then((res) => {
        setSaved(res);
        console.log("savedBooks: ", res);
      })
      .catch((err) => console.log(err));
  }
  renderSaved();
  
  return (
    <div>
      <SavedDiv saved={saved} />
    </div>
  );
}

export default Saved;
