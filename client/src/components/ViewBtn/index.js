import React from "react";
import "./style.css";

function ViewBtn(props) {
  function viewBook() {
    console.log(props);
  }

  return (
    <button type="button" className="rounded btn-warning" onClick={viewBook}>
      View
    </button>
  );
}

export default ViewBtn;
