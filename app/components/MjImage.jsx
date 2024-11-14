// MjImage.js
import React from "react";

const MjImage = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  containerBackgroundColor,
}) => {
  const style = {
    src: src || "",
    alt: alt || "",
    width: width || "100%",
    height: height || "auto",
    borderRadius: borderRadius || "0",
    border: border || "none",
    borderBottom: borderBottom || "none",
    borderLeft: borderLeft || "none",
    borderRight: borderRight || "none",
    borderTop: borderTop || "none",
    containerBackgroundColor: containerBackgroundColor || "transparent",
  };

  return (
    <img src={src} alt={alt} style={style}  />
  );
};

export default MjImage;
