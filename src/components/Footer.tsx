import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"
              alt="Ecommerce Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-xl font-bold">Ecommerce</span>
          </div>
          <p className="text-gray-600">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div className="flex mt-4">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-600 hover:text-gray-800"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-gray-900 font-bold mb-4">SUPPORT</h2>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-gray-900 font-bold mb-4">COMPANY</h2>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-gray-900 font-bold mb-4">SHOP</h2>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Checkout
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
          </ul>
          <h2 className="text-gray-900 font-bold mb-4 mt-6">
            ACCEPTED PAYMENTS
          </h2>
          <div className="flex space-x-4">
            <img
              src="/images/mastercard.png"
              alt="Mastercard"
              className="h-8"
            />
            <img
              src="/images/amex.png"
              alt="American Express"
              className="h-8"
            />
            <img src="/images/visa.png" alt="Visa" className="h-8" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-8 border-t pt-4">
        <p className="text-gray-600 text-center">
          © 2023 DevCut. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
