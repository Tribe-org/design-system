import "./button.css";

import React from "react";

interface ButtonProps {
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  className,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={className}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
