import React from "react";

type cardData = {
  icon: string;
  title: string;
  description: string;
};

const Card: React.FC<cardData> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
export default Card;
