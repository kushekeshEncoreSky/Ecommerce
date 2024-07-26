// Input.tsx
import React from "react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  autoComplete,
  required,
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
