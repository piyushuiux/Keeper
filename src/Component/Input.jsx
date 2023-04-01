import React, { useState } from "react";

function Input({ setItems }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleContentChange(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, { title: title, content: content }];
    });
    setTitle("");
    setContent("");
  }

  return (
    <div className="info">
      <input
        onChange={handleTitleChange}
        className="title"
        value={title}
        type="text"
        placeholder="Title"
      />
      <input
        className="content"
        value={content}
        onChange={handleContentChange}
        type="text"
        placeholder="Take A Note..."
      />
      <button onClick={addItems}>+</button>
    </div>
  );
}

export default Input;
