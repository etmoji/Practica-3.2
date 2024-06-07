import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({ onClick, children, type, color, position }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`floating-button ${type}`}
      style={{ backgroundColor: color, right: position.right, bottom: position.bottom }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default FloatingButton;
