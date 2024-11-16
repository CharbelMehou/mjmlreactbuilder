// MjAccordion.js
import React, { useState } from "react";

const MjAccordion = ({
  border,
  containerBackgroundColor,
  fontFamily,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
}) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleToggle = (index) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const enhancedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: activeIndices.includes(index),
      onToggle: () => handleToggle(index),
    });
  });

  const style = {
    display:'flex',
    flexDirection:"column",
    border: border || "2px solid black",
    backgroundColor: containerBackgroundColor || "transparent",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    padding: padding || "10px 25px",
    paddingTop: paddingTop || "none",
    paddingBottom: paddingBottom || "none",
    paddingLeft: paddingLeft || "none",
    paddingRight: paddingRight || "none",
    with:'100%'
  };

  return <div style={style}> {enhancedChildren}</div>;
};

export default MjAccordion;
