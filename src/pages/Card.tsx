import React from "react";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-4 w-full md:w-1/4">
      <img src={icon} alt={title} className="w-10 h-8 mb-2" />
      <h3 className="font-bold font-Inter text-base  mb-1">{title}</h3>
      <p className="text-base text-gray-600 font-Inter">{description}</p>
    </div>
  );
};

export default Card;
