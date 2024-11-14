// MjButton.js
import React from "react";

const MjHero = ({
  backgroundColor,
  backgroundHeight,
  backgroundPosition,
  backgroundWidth,
  backgroundUrl,
  color,
  borderRadius,
  fontSize,
  fontWeight,
  height,
  mode,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  children,
}) => {
  const style = {
    backgroundColor: backgroundColor || "transparent",
    backgroundHeight: backgroundHeight || "auto",
    backgroundPosition: backgroundPosition || "center",
    backgroundWidth: backgroundWidth || "auto",
    backgroundUrl: backgroundUrl || "",
    color: color || "inherit",
    borderRadius: borderRadius || "0",
    fontSize: fontSize || "16px",
    fontWeight: fontWeight || "normal",
    height: height || "auto",
    mode: mode || "fluid",
    padding: padding || "0",
    paddingBottom: paddingBottom || "0",
    paddingLeft: paddingLeft || "0",
    paddingRight: paddingRight || "0",
    paddingTop: paddingTop || "0",
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default MjHero;
