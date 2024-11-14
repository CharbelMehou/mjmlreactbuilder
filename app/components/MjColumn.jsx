// MjColumn.js
import React from "react";

const MjColumn = ({
  backgroundColor,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderRadius,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  width,
  children,
}) => {
  const style = {
    width: width || "100%",
    display: "flex",
    flexDirection:"column",
    verticalAlign: "top",
    flexWrap: "wrap",
    backgroundColor: backgroundColor || "transparent",
    border: border || "none",
    padding: padding || "10px 25px",
    boxSizing: 'border-box',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default MjColumn;
