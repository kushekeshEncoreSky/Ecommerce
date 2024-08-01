import React, { useState } from "react";

interface ColorOption {
  name: string;
  value: string;
}

interface SizeOption {
  label: string;
  value: string;
}

const colors: ColorOption[] = [
  { name: "Blue", value: "#3B82F6" },
  { name: "Yellow", value: "#FBBF24" },
  { name: "Green", value: "#34D399" },
  { name: "Indigo", value: "#6366F1" },
];

const sizes: SizeOption[] = [
  { label: "S", value: "small" },
  { label: "M", value: "medium" },
  { label: "L", value: "large" },
  { label: "XL", value: "xlarge" },
  { label: "XXL", value: "xxlarge" },
];

const ProductOptions: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(890);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="font-Inter font-medium text-sm mb-2">Color</h3>
        <div className="flex space-x-2">
          {colors.map((color) => (
            <label key={color.value} className="cursor-pointer">
              <input
                type="radio"
                name="color"
                value={color.value}
                checked={selectedColor === color.value}
                onChange={() => setSelectedColor(color.value)}
                className="sr-only"
              />
              <span
                className={`block w-6 h-6 rounded-full ${
                  selectedColor === color.value
                    ? "ring-2 ring-offset-2 ring-gray-400"
                    : ""
                }`}
                style={{ backgroundColor: color.value }}
              ></span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-Inter font-medium text-sm mb-2">Size</h3>
        <div className="flex flex-wrap space-x-2 ">
          {sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => setSelectedSize(size.value)}
              className={`px-3 m-2 py-1 border ${
                selectedSize === size.value
                  ? "border-black"
                  : "border-gray-300 hover:border-gray-400"
              } rounded`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-Inter font-medium text-sm mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full "
        />
        <div className="flex justify-between mt-2">
          <span className="bg-black text-white  px-2 py-1 rounded">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
