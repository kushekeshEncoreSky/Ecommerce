import React from "react";

interface CheckboxWithLabelProps {
  id: string;
  label: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ id, label }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id={id}
        className="mr-2 border-2 border-solid border-red-900"
      />
      <label
        htmlFor={id}
        className="text-gray-700 font-Inter  font-normal text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
