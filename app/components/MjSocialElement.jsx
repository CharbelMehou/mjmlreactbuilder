// MjColumn.js
import React from "react";

const MjmlSocialElement = ({
  src,
  target,
  alt,
  href,
  align,
  backgroundColor,
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  iconSize="20px",
  name,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}) => {
  const style = {
    display:"flex",
    width:"fit-content",
    justifyContent:align || "center",
    backgroundColor: backgroundColor || "transparent",
    borderRadius: borderRadius || "3px",
    color: color || "#333333",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    fontSize: fontSize || "13px",
    fontStyle: fontStyle || "normal",
    fontWeight: fontWeight || "normal",
    padding: padding || "10px 25px",
    paddingTop: paddingTop || "none",
    paddingBottom: paddingBottom || "none",
    paddingLeft: paddingLeft || "none",
    paddingRight: paddingRight || "none",

  };

  return (
    <a style={style} href={href} target={target} >
      <img src={src} alt={alt}  width={iconSize} height={iconSize}/>
      {name}
    </a>
  );
};


export default MjmlSocialElement;
