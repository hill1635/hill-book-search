import React from "react";
import API from "../../utils/API";
import "./style.css";

function SaveBtn(props) {
  console.log("buttonProps:", props);
  return (
      <button onClick={props.onClick}>Save</button>
  );
}

export default SaveBtn;
