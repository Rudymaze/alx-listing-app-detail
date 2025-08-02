import React from "react";

interface CardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}

export const Card: React.FC<CardProps> = ({ image, name, price, rating }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-1">Price: ${price}</p>
        <p className="text-gray-700 text-base">Rating: {rating.toFixed(2)}</p>
      </div>
    </div>
  );
};

const listNames: readonly string[] = ["Rudiger", "Njock"];

const productType: {
  productName: string;
  cost: number;
  rating: number;
  discountPercentage?: number;
} = {
  productName: "Smartphone",
  cost: 699,
  rating: 4.5,
  discountPercentage: 10,
};
productType.productName = "Smartphone Pro";

console.log(productType.productName);
