import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../assets/Logo.png";
import logoMobileView from "../assets/Logomark.png";
import { useUser } from "./UserContext";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userName, setUserName } = useUser();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUserName(null);
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <header className="bg-white p-4 align-middle w-full">
        <div className="hidden md:flex items-center justify-between max-w-screen-xl mx-auto">
          <img src={logoImage} alt="Logomark" className="h-8" />

          <nav className="flex-1 flex justify-center space-x-6">
            <a href="#home" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="search products"
                className="w-64 px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <div
                  className="bg-cover bg-center w-6 h-6"
                  style={{ backgroundImage: "url('path/to/your/icon.svg')" }}
                ></div>
              </div>
            </div>
            <FaShoppingCart className="text-gray-600 hover:text-gray-900" />
            {userName ? (
              <div className="flex items-center space-x-2">
                <FaUser
                  className="text-gray-600 hover:text-gray-900"
                  onClick={handleProfileClick}
                />
                <span className="text-gray-600">{userName}</span>
                <button
                  onClick={handleLogout}
                  className="text-blue-600 hover:underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <FaUser
                className="text-gray-600 hover:text-gray-900"
                onClick={handleProfileClick}
              />
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between max-w-screen-xl mx-auto">
          <img src={logoMobileView} alt="Logomark" className="h-8" />
          <div className="relative">
            <input
              type="text"
              placeholder="search products"
              className="w-32 px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <div
                className="bg-cover bg-center w-6 h-6"
                style={{ backgroundImage: "url('path/to/your/icon.svg')" }}
              ></div>
            </div>
          </div>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-gray-600 hover:text-gray-900" />
            ) : (
              <FaBars className="text-gray-600 hover:text-gray-900" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-2 mt-2 px-4 bg-white shadow-lg">
            <a href="#home" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <div className="flex space-x-4 mt-2">
              <FaShoppingCart className="text-gray-600 hover:text-gray-900" />
              {userName ? (
                <div className="flex items-center space-x-2">
                  <FaUser
                    className="text-gray-600 hover:text-gray-900"
                    onClick={handleProfileClick}
                  />
                  <span className="text-gray-600">{userName}</span>
                  <button
                    onClick={handleLogout}
                    className="text-blue-600 hover:underline"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <FaUser
                  className="text-gray-600 hover:text-gray-900"
                  onClick={handleProfileClick}
                />
              )}
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
