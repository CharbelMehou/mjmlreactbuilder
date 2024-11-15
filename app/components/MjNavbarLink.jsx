// MjNavbarLink
import React, { Children } from "react";

const MjNavbarLink = ({
children,
color,
fontFamily,
href,
target,
fontSize,
fontWeight,
fontStyle,
lineHeight,
textTransform,
textDecoration,
padding,
paddingTop,
paddingBottom,
paddingLeft,
paddingRight,
}) => {
  const style = {
    href: href || "#",
    target: target || "_blank",
    color: color || "#000000",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    fontSize: fontSize || "13px",
    fontWeight: fontWeight || "",
    fontStyle: fontStyle || "",
    lineHeight: lineHeight || '22px',
    padding: padding || "10px 25px",
    textTransform : textTransform || 'uppercase',
    textDecoration : textDecoration || 'none',
    cursor:"pointer"
  };

  return (
    <a href={href} target={target} style={style}>
      {children}
    </a>
  );
};

export default MjNavbarLink;
