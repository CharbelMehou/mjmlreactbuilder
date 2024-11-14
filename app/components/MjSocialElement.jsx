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
  iconSize,
  children,
  name,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}) => {
  const style = {
    display: "flex",
    width: iconSize || "30px",
    height: iconSize || "30px",
    justifyContent: align || "center",
    backgroundColor: backgroundColor || "transparent",
    borderRadius: borderRadius || "3px",
    color: color || "#333333",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    fontSize: fontSize || "13px",
    fontStyle: fontStyle || "normal",
    fontWeight: fontWeight || "normal",
    margin: "4px",
  };

  const imgStyle = {
    width: iconSize || "30px",
    height: iconSize || "30px",
  };

  // Map of names to URLs
  const nameToUrlMap = {
    facebook: 'https://res.cloudinary.com/dk79hhqvp/image/upload/v1728425559/facebook-rounded-border-outlined_qonydd.png',
    twitter: 'https://res.cloudinary.com/dk79hhqvp/image/upload/v1728425556/twitter-rounded-border-outlined_zbqyc2.png',
    instagram: 'https://res.cloudinary.com/dk79hhqvp/image/upload/v1728425557/instagram-rounded-border-outlined_pjxnss.png',
    linkedin: 'https://res.cloudinary.com/dk79hhqvp/image/upload/v1728425556/linkedin-rounded-border-outlined_ll8c06.png',
    youtube:'https://res.cloudinary.com/dk79hhqvp/image/upload/v1728425555/youtube-rounded-outlined_yqtkb9.png',
    google:'https://res.cloudinary.com/dk79hhqvp/image/upload/v1728425557/gplus-rounded-border-outlined_amli5s.png',
    github:'https://res.cloudinary.com/dk79hhqvp/image/upload/v1728425558/github-rounded-border-outlined_xgbyq9.png',
  };

  // Use `src` if provided, otherwise fall back to the URL from `name`
  const imageSrc = src || (nameToUrlMap[name] || '');

  return (
    <div style={style}>
      <a style={{ width: "auto", height: 'auto' }} href={href} target={target}>
        {imageSrc && <img style={imgStyle} src={imageSrc} alt={alt || name} />}
        {children}
      </a>
    </div>
  );
};

export default MjmlSocialElement;