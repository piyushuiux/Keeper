import React from "react";

function Footer() {
  let time = new Date().getFullYear();

  return <p className="footer">Copyright © {time}</p>;
}

export default Footer;
