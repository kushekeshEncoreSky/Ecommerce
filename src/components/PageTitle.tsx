// PageTitle.tsx
import React from "react";

interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-zinc-100 w-full">
      <div className="py-4 items-center justify-between max-w-screen-lg mx-auto">
        <div className="container mx-auto px-[1rem]">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
