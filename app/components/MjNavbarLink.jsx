// MjNavbarLink
import React from "react";

const MjNavbarLink = ({
color,
fontFamily,
href,
target,
fontSize,
fontWeight,
fontStyle,
padding,
paddingTop,
paddingBottom,
paddingLeft,
paddingRight,
}) => {
  const style = {
    color: color || "#333333",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    href: href || "#",
    target: target || "_blank",
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
    <a href={href} target={target} style={style}>
    </a>
  );
};

export default MjNavbarLink;
