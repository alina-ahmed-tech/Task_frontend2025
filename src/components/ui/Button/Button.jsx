import React from "react";
import "./Button.scss";

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  ariaLabel,
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`ui-button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
