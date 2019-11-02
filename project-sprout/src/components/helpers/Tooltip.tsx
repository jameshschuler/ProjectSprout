import React, { useEffect } from "react";

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
  if (visible === undefined) visible = true;

  // TODO: this can be improved to only affect this tooltip
  useEffect(() => {
    var tooltipElems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(tooltipElems, {
      margin: 0
    });
  }, []);

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
