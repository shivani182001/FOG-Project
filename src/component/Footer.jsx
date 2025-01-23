import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <i className="fas fa-check-circle text-3xl text-yellow-500 mb-2"></i>
          <h3 className="text-lg font-bold">High Quality</h3>
          <p className="text-gray-600">crafted from top materials</p>
        </div>
        <div>
          <i className="fas fa-check-circle text-3xl text-yellow-500 mb-2"></i>
          <h3 className="text-lg font-bold">Warranty Protection</h3>
          <p className="text-gray-600">Over 2 years</p>
        </div>
        <div>
          <i className="fas fa-check-circle text-3xl text-yellow-500 mb-2"></i>
          <h3 className="text-lg font-bold">Free Shipping</h3>
          <p className="text-gray-600">Order over $150</p>
        </div>
        <div>
          <i className="fas fa-check-circle text-3xl text-yellow-500 mb-2"></i>
          <h3 className="text-lg font-bold">24/7 Support</h3>
          <p className="text-gray-600">Dedication support</p>
        </div>
        {/* Repeat other sections */}
      </div>
    </footer>
  );
};

export default Footer;
