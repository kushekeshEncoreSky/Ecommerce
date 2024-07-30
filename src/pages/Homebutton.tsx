import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface HomeButtonProps {
  color?: string;
  children: React.ReactNode;
  
}

const HomeButton: React.FC<HomeButtonProps> = ({
  color = { color },
  children,
}) => {
  return (
    <button
      className={`flex items-center  mt-12 justify-center ${color} text-white rounded py-2 px-4`}
    >
      {children}
     
    </button>
  );
};

export default HomeButton;
