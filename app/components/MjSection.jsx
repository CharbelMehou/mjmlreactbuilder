// MjSection.js
import React from "react";
import './style.css';
const MjSection = ({
  backgroundColor,
  backgroundUrl,
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
  children,
}) => {
  const style = {
    backgroundColor: backgroundColor || "transparent",
    border: border || "none",
    padding: padding || "20px 0",
  };

  return (
    <div style={style} className="section">
      {children}
    </div>
  );
};

export default MjSection;
