import React from "react";

const ProductCard = ({ image, label, name, price }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span
          className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded bg-${label.color}`}
        >
          {label.text}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
