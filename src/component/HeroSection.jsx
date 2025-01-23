import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <img
        src="https://storage.googleapis.com/a1aa/image/HEchmScIiFqDCV79t7hmceAyTLvWIGG3uqfVg7xqat2QHRHUA.jpg"
        alt="Shop Banner"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Shop</h1>
      </div>
    </section>
  );
};

export default HeroSection;
