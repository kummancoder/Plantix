import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use any icon library you like

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const features = ["Home", "Services", "Library", "About", "Contact"];

  return (
    <div className="w-full bg-[#ffffff] shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo and Desktop Links */}
        <div className="flex items-center gap-12">
          <img
            src="https://plantix.net/en/assets/lib/logos/plantix-color/plantix-logo-color-en.svg"
            alt="Plantix Logo"
            className="h-[30px]"
          />
          <div className="hidden md:flex gap-6">
            {features.map((feature, index) => (
              <NavLink
                key={index}
                to={`/${feature.toLowerCase()}`}
                className="text-md font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {feature}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Sign Up
          </button>
          <button className="text-base font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <NavLink
                key={index}
                to={`/${feature.toLowerCase()}`}
                className="text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {feature}
              </NavLink>
            ))}
            <button className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Sign Up
            </button>
            <button className="text-base font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
