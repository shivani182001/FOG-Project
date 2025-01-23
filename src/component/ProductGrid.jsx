import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://storage.googleapis.com/a1aa/image/GP3NESbf2F0WSSv6noxUeXeZNPQj3lE39Caz5zQ5WeaEdEdQB.jpg",
    label: { text: "Sale", color: "red-500" },
    name: "Slytherine",
    price: "Rp 2.500.000",
  },

  // Repeat product objects here...
  {
    image: "https://storage.googleapis.com/a1aa/image/GP3NESbf2F0WSSv6noxUeXeZNPQj3lE39Caz5zQ5WeaEdEdQB.jpg",
    label: { text: "Sale", color: "red-500" },
    name: "Slytherine",
    price: "Rp 2.500.000",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/GP3NESbf2F0WSSv6noxUeXeZNPQj3lE39Caz5zQ5WeaEdEdQB.jpg",
    label: { text: "Sale", color: "red-500" },
    name: "Slytherine",
    price: "Rp 2.500.000",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/GP3NESbf2F0WSSv6noxUeXeZNPQj3lE39Caz5zQ5WeaEdEdQB.jpg",
    label: { text: "Sale", color: "red-500" },
    name: "Slytherine",
    price: "Rp 2.500.000",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/GP3NESbf2F0WSSv6noxUeXeZNPQj3lE39Caz5zQ5WeaEdEdQB.jpg",
    label: { text: "Sale", color: "red-500" },
    name: "Slytherine",
    price: "Rp 2.500.000",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/GP3NESbf2F0WSSv6noxUeXeZNPQj3lE39Caz5zQ5WeaEdEdQB.jpg",
    label: { text: "Sale", color: "red-500" },
    name: "Slytherine",
    price: "Rp 2.500.000",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/GP3NESbf2F0WSSv6noxUeXeZNPQj3lE39Caz5zQ5WeaEdEdQB.jpg",
    label: { text: "Sale", color: "red-500" },
    name: "Slytherine",
    price: "Rp 2.500.000",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/GP3NESbf2F0WSSv6noxUeXeZNPQj3lE39Caz5zQ5WeaEdEdQB.jpg",
    label: { text: "Sale", color: "red-500" },
    name: "Slytherine",
    price: "Rp 2.500.000",
  },
  
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
