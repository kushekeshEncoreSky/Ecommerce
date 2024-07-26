// GoogleLoginButton.tsx
import React from "react";
import { FaGoogle } from "react-icons/fa";

interface GoogleLoginButtonProps {
  onClick?: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-full py-2 mb-4 text-gray-600 bg-white rounded-lg flex items-center justify-center font-Inter border-2 border-zinc-100"
      onClick={onClick}
    >
      <FaGoogle className="mr-2" /> Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
