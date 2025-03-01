import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
}

interface ProductGridProps {
  startIndex: number;
  endIndex: number;
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  startIndex,
  endIndex,
  title,
  subtitle,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products.slice(startIndex, endIndex)));
  }, [startIndex, endIndex]);

  return (
    <div className="container">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-base align-middle mb-4 mt-[120px] text-gray-400 text-center font-Inter font-medium">
          {subtitle}
        </h2>
        <h3 className="text-2xl font-bold mb-6 text-center font-Inter">
          {title}
        </h3>

        {/* ProductGrid content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mb-32">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              inStock={product.stock > 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
