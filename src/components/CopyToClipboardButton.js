// components/CopyToClipboardButton.js
"use client"

import React, { useState } from 'react';

const CopyToClipboardButton = ({ textToCopy }) => {
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(str);
    }
    return Promise.reject("The Clipboard API is not available.");
  };

  // Inline styles for the button
  const buttonStyle = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    backgroundColor: isHovered ? 'rgb(28, 4, 36)' : 'rgb(105, 71, 117 , 0.5)', // Change color on hover
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '5px 5px',
    border:'1px dashed red'
  };

  return (
    <button
      onClick={() => copyToClipboard(textToCopy)}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Copy
    </button>
  );
};

export default CopyToClipboardButton;
