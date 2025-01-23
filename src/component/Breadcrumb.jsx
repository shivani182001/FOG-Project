import React from "react";

const Breadcrumb = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <nav className="text-gray-600">
        <a href="#" className="hover:text-yellow-500">
          Home
        </a>{" "}
        / <span>Shop</span>
      </nav>
    </div>
  );
};

export default Breadcrumb;