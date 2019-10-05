import React from "react";

interface TooltipProps {
  iconClass: string;
  tooltipClasses?: string;
  tooltipText: string;
  tooltipPosition?: string;
  visible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  iconClass,
  tooltipClasses,
  tooltipPosition,
  tooltipText,
  visible
}) => {
  return visible ? (
    <a
      className={`tooltipped ${tooltipClasses}`}
      data-position={tooltipPosition || "top"}
      data-tooltip={tooltipText || "No text found"}
    >
      <i className={iconClass}></i>
    </a>
  ) : null;
};

export default Tooltip;
