import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  inStock: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  inStock,
}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-100 h-96 p-4 rounded">
        <img src={image} alt={title} className="w-full  object-cover" />
      </div>
      <div className="bg-white p-4 mt-2 rounded">
        <h3 className="text-lg font-semibold mb-2 truncate">{title}</h3>
        <div className="flex justify-between items-center">
          <span
            className={`text-sm ${inStock ? "text-green-600" : "text-red-600"}`}
          >
            {inStock ? "IN STOCK" : "OUT OF STOCK"}
          </span>
          <span className="text-gray-700 font-bold">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
