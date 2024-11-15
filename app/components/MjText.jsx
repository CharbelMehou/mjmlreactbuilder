// MjText.js
import React from 'react';

const MjText = ({ align, fontSize, fontWeight, color,padding,paddingTop,paddingBottom,paddingLeft,paddingRight, children}) => {
  const style = {
    display:"flex",
    flexDirection:"column",
    justifyContent:align || 'left',
    textAlign: align || 'left',
    fontSize: fontSize || '14px',
    fontWeight: fontWeight || 'normal',
    color: color || '#000000',
    padding: padding || '10px 25px',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default MjText;
