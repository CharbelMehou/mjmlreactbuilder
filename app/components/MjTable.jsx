// MjTable.js
import React from "react";

const MjTable = ({
  border,
  color,
  containerBackgroundColor,
  fontFamily,
  fontSize,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  children,
}) => {
  const style = {
    border: border || "none",
    color: color || "#333333",
    backgroundColor: containerBackgroundColor || "transparent",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    fontSize: fontSize || "13px",
    padding: padding || "10px 25px",
    paddingBottom: paddingBottom || "none",
    paddingLeft: paddingLeft || "none",
    paddingRight: paddingRight || "none",
    paddingTop: paddingTop || "none",
  };

  return (
    <table style={style} {...props}>
        <thbody>
        {children}
        </thbody>
    </table>
  );
};

export default MjTable;
