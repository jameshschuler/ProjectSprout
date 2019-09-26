import React from "react";

interface PanelProps {
  classes: string;
  _id?: string;
}

const Panel: React.FC<PanelProps> = ({ classes, _id, children }) => {
  return (
    <div id={`${_id || ""}`} className={`col ${classes}`}>
      {children}
    </div>
  );
};

export default Panel;
