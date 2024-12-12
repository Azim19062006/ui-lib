import React, { useState } from "react";
import "./index.css";

const Tooltip = ({ text, position, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`tooltip-box tooltip-${position}`}>{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
