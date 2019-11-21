import React from "react";
import { AlertType } from "../../types/AlertType";

interface AlertProps {
  message: string;
  alertType?: AlertType;
}

const Alert: React.FC<AlertProps> = ({ alertType, message }) => {
  return (
    <div className={`alert alert-${alertType || "default"}`}>{message}</div>
  );
};

export default Alert;
