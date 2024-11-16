// MjAccordionElement.js
import React from "react";

const MjAccordionElement = ({
  backgroundColor,
  border,
  fontFamily,
  iconAlign,
  iconHeight,
  iconPosition,
  iconUnwrappedUrl,
  iconWidth,
  iconWrappedUrl,
  isActive,
  onToggle,
  children,
}) => {
  const style = {
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor: backgroundColor || "",
    border: border || "",
    fontFamily: fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
    justifyContent: iconAlign || "center",
    iconHeight: iconHeight || "32px",
    iconPosition: iconPosition || "right",
    iconWidth: iconWidth || "32px",
    iconWrappedUrl: iconWrappedUrl || "https://i.imgur.com/bIXv1bk.png",
    iconUnwrappedUrl: iconUnwrappedUrl || "https://i.imgur.com/w4uTygT.png",
    boxSizing: "border-box",
  };
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Vérifier le type de l'enfant pour passer les props appropriées
      if (child.type && child.type.name === "MjAccordionTitle") {
        return React.cloneElement(child, {
          onToggle,
          isActive,
          // Passer les props spécifiques à MjAccordionTitle si nécessaire
        });
      } else if (child.type && child.type.name === "MjAccordionText") {
        return React.cloneElement(child, {
          isActive,
          // Passer les props spécifiques à MjAccordionText si nécessaire
        });
      }
      // Pour les autres types d'enfants, les retourner sans modification
      return child;
    }
    return child;
  });
  return <div style={style}>{enhancedChildren}</div>;
};

export default MjAccordionElement;
