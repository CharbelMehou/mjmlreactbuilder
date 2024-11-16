// MjAccordionText.js
import React from "react";

const MjAccordionText = ({
    backgroundColor,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    isActive,
  children,
}) => {
  const style = {
    backgroundColor: backgroundColor || '#fafafa',
    color: color || '',
    fontFamily: fontFamily || 'Ubuntu, Helvetica, Arial, sans-serif',
    fontSize: fontSize || '14px',
    fontWeight: fontWeight || '',
    letterSpacing: letterSpacing || 'none',
    lineHeight: lineHeight || '1px',
    padding: padding ||'15px',
    width:'100%'
  };
  if (!isActive) {
    return null;
  }
  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default MjAccordionText;
