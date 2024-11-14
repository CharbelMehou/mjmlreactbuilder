// MjButton.js
import React from "react";

const MjNavbar = ({ baseUrl, hamburger,icoColor,children }) => {
  const style = {icoColor:"#000000"};
  const links = [];
  return(<div style={style}>{children}</div>);
};

export default MjNavbar;
