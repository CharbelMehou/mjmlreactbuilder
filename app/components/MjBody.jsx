// MjBody.js
import React from 'react';

const MjBody = ({ backgroundColor, fontFamily, children, ...props }) => {
  const style = {
    backgroundColor: backgroundColor || '#FFFFFF',
    fontFamily: fontFamily || 'Arial, sans-serif',
    padding: '0',
    margin: '0',
    width: '100%',
    flexDirection:"columm"
  };

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default MjBody;
