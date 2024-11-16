// MjAccordionTitle.js
import React from "react";

const MjAccordionTitle = ({
  backgroundColor,
  color,
  onClick,
  fontFamily,
  fontSize,
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  iconHeight,
  iconPosition,
  iconWidth,
  iconWrappedUrl,
  iconUnwrappedUrl,
  isActive,
  onToggle,
  children,
}) => {
  const style = {
    display:"flex",
    justifyContent:'space-between',
    width:"100%",
    backgroundColor: backgroundColor || "#ffffff",
    color: color || "",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    fontSize: fontSize || "18px",
    padding: padding || "15px",
  };
  const icoUnwrappedUrl = iconWrappedUrl || "https://i.imgur.com/Xvw0vjq.png";
  const icoWrappedUrl = iconUnwrappedUrl || "https://i.imgur.com/KKHenWa.png";
  const icoPosition= iconPosition || "right";
  const iconStyle = {
    height: iconHeight || "32px",
    width: iconWidth || "32px",
  };
  return (
    <div style={style}>
      {icoPosition && icoPosition == "left" && (
        <img
          src={isActive ? icoWrappedUrl : icoUnwrappedUrl}
          alt={isActive ? "Minus Icon" : "Plus Icon"}
          style={iconStyle}
          onClick={onToggle}
        />
      )}
      {children}
      {icoPosition && icoPosition == "right" && (
        <img
          src={isActive ? icoWrappedUrl : icoUnwrappedUrl}
          alt={isActive ? "Minus Icon" : "Plus Icon"}
          style={iconStyle}
          onClick={onToggle}
        />
      )}
    </div>
  );
};

export default MjAccordionTitle;
