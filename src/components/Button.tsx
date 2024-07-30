// Button.tsx
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      className={`w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
