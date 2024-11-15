// MjNavbar.js
import React, { useState, useEffect } from "react";

// Hook personnalisé pour détecter la largeur de la fenêtre
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    
    // Nettoyage de l'événement à la destruction du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const MjNavbar = ({
  align,
  baseUrl,
  hamburger,
  icoAlign,
  icoColor,
  icoOpen,
  icoClose,
  icoFontSize,
  icoPadding,
  icoPaddingBottom,
  icoPaddingLeft,
  icoPaddingRight,
  icoPaddingTop,
  icoLineHeight,
  children,
}) => {
  const width = useWindowWidth();
  const isMobile = width < 600;

  const style = {
    display: "flex",
    justifyContent: align || "center",
  };
  
  const icoContainerStyle = {
    display: "flex",
    justifyContent: icoAlign || "center",
    cursor: "pointer",
    color: icoColor || "#000000",
    padding: icoPadding || "10px",
    paddingTop: icoPaddingTop || "10px",
    paddingBottom: icoPaddingBottom || "10px",
    paddingLeft: icoPaddingLeft || "10px",
    paddingRight: icoPaddingRight || "10px",
    fontSize: icoFontSize || '30px',
    lineHeight: icoLineHeight || '30px',
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isMobile && hamburger && (
        <div style={icoContainerStyle} onClick={toggleMenu} aria-label="Menu Toggle" aria-expanded={isOpen}>
          {isOpen ? (icoClose || '⊗') : (icoOpen || '☰')}
        </div>
      )}
      {isOpen && (
        <div style={style} className="icoChildrenContainer">
        {children}
      </div>
     )}
    </div>
  );
};

export default MjNavbar;