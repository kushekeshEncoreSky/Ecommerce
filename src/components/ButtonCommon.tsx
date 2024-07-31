import React from "react";

// Define the props type for the button
type ButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
};

// Define the ButtonCommon functional component
const ButtonCommon: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      className={`w-full  text-white bg-black rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { ButtonCommon };
