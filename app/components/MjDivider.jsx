// MjColumn.js
import React from "react";

const MjDivider = ({
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
    containerBackgroundColor: containerBackgroundColor || "transparent",
    borderColor: borderColor || "transparent",
    borderStyle: borderStyle || "solid",
    borderWidth: borderWidth || "1px",
    padding: padding || "0",
    paddingTop: paddingTop || "0",
    paddingBottom: paddingBottom || "0",
    paddingLeft: paddingLeft || "0",
    paddingRight: paddingRight || "0",
  };

  return (
    <p style={style}>
</p>
  );
};

export default MjDivider;
