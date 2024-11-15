// MjColumn.js
import React from "react";

const MjDivider = ({
  align,
  containerBackgroundColor,
  borderColor,
  borderStyle, //Dashed dotted solid
  borderWidth,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  width,
}) => {
  const style = {
    borderColor: borderColor || "#000000",
    borderStyle: borderStyle || "solid",
    borderWidth: borderWidth || "1px",// la widht des composant du divider
    width: width || "100%",//divider width
    borderBottom:"none",
    borderLeft:"none",
    borderRight:"none",
    height:"0"
  };
  const containerStyle = {
    display: "flex",
    justifyContent: align || "center",
    padding: padding || "10px 25px",
    backgroundColor: containerBackgroundColor || "transparent",
  };
  return (
    <div style={containerStyle}>
      <p style={style}></p>
    </div>
  );
};

export default MjDivider;
