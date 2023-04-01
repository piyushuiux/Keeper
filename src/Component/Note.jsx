import React from "react";
import del from "./Images/delete.png";

function Note(props) {
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.contant}</p>
      <img
        onClick={() => {
          props.onChecked(props.id);
        }}
        src={del}
        height="20px"
        alt="del"
      />
    </div>
  );
}

export default Note;
