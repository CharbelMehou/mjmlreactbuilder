// MjSocial.js
import React from "react";
import "./style.css"
const MjSocial = ({
borderRadius,
color,
containerBackgroundColor,
fontFamily,
fontSize,
fontWeight,
fontStyle,
align,
padding,
paddingTop,
paddingBottom,
paddingLeft,
paddingRight,
children
}) => {
  const style = {
    display:"flex",
    flexDirection:"row",
    justifyContent:align || "center",
    borderRadius: borderRadius || "3px",
    color: color || "#333333",
    backgroundColor: containerBackgroundColor || "transparent",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    fontSize: fontSize || "13px",
    fontWeight: fontWeight || "normal",
    fontStyle: fontStyle || "normal",
    padding: padding || "10px 25px",
    paddingTop: paddingTop || "none",
    paddingBottom: paddingBottom || "none",
    paddingLeft: paddingLeft || "none",
    paddingRight: paddingRight || "none",
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default MjSocial;
