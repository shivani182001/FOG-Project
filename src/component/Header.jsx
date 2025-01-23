import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/lMrivN25HpbyN9PB51Mr4tGzHgStTkVUw0fXV5OLPoAnjoDKA.jpg"
            alt="Furniro Logo"
            className="mr-2"
            width="40"
            height="40"
          />
          <span className="text-xl font-bold">Furniro</span>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Home
          </a>
          <a href="#shop" className="text-gray-700 hover:text-yellow-500">
            Shop
          </a>
          <a href="#about" className="text-gray-700 hover:text-yellow-500">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-yellow-500">
            Contact
          </a>
        </nav>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            <i className="fas fa-search"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            <i className="fas fa-heart"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
