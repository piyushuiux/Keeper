import React, { useState } from "react";
import Input from "./Input";

function Before() {
  const [before, after] = useState();
  function handelChange() {
    after(<Input />);
  }

  return (
    <div>
      {before ? null : (
        <div className="before">
          <input onClick={handelChange} type="text" placeholder="Note.." />
        </div>
      )}
      {before}
    </div>
  );
}

export default Before;
