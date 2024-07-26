import React from "react";
import { useNavigate } from "react-router";

interface LinkButtonProps {
  label: string;
  path: string;
  className?: string;
}
const LinkButton: React.FC<LinkButtonProps> = ({ label, path, className }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`text-blue-600 hover:underline ${className}`}
      onClick={() => navigate(path)}
    >
      {label}
    </button>
  );
};
export default LinkButton;
