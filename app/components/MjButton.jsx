// MjButton.js
import React from "react";

const MjButton = ({
  children,
  target,
  href,
  width,
  height,
  fontSize,
  fontWeight,
  backgroundColor,
  color,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}) => {
  const style = {
    backgroundColor: backgroundColor || "#346DB7",
    color: color || "#FFFFFF",
    fontSize: fontSize || "16px",
    fontWeight: fontWeight || "normal",
    textDecoration: "none",
    display: "flex",
    border: border || "none",
    height: height || "auto",
    width: width || "auto",
    padding: padding || "10px 25px",
    target: target || "_self",
    href: href || "#",
    borderRadius: "3px",
    cursor: "pointer",
  };

  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
    <a href={href} target={target} style={style}>
      {children}
    </a>
    </div>
  );
};

export default MjButton;