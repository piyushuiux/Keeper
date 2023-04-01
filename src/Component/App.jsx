import React, { useState } from "react";
import Heading from "./heading";
import Footer from "./Footer";
import Note from "./Note";
import Before from "./Before";

function App() {
  const [items, setItems] = useState([]);

  function deleteItems(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <Before />
      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          onChecked={deleteItems}
          title={item.title}
          contant={item.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
