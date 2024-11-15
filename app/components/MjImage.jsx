// MjImage.js
import React from "react";

const MjImage = ({
  src,
  alt,
  width,
  height,
  align,
  borderRadius,
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  containerBackgroundColor,
}) => {
  const style = {
    src: src || "",
    alt: alt || "",
    width: width || "100%",
    maxWidth:'600px',
    maxHeight:'600px',
    height: height || "auto",
    borderRadius: borderRadius || "0",
    border: border || "none",
    borderBottom: borderBottom || "none",
    borderLeft: borderLeft || "none",
    borderRight: borderRight || "none",
    borderTop: borderTop || "none",
  };
  const containerStyle = {
    display: "flex",
    flex: '1',
    width: "100%",
    padding: padding || "10px 25px",
    backgroundColor: containerBackgroundColor || "transparent",
    justifyContent: align || "center",
  };

  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} style={style} />
    </div>
  );
};

export default MjImage;
