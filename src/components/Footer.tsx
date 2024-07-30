import React from "react";
import logofooter from "../assets/Footer.png";
import footicons from "../assets/Socialicons.png";
import MasterLogo from "../assets/Mastercard.png";
import VisaLogo from "../assets/Visa.png";
import Amex from "../assets/Amex.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-zinc-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Social Icons */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="mb-4">
              <img src={logofooter} alt="Logo" className="max-w-full h-auto" />
            </div>
            <p className="font-Inter font-normal text-sm mb-4">
              DevCut is a YouTube channel for <br />
              practical project-based learning.
            </p>
            <div>
              <img
                src={footicons}
                alt="Social Icons"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Support, Company, and Shop Links */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/3 px-2 mb-4">
                <h6 className="font-Inter font-medium text-gray-500 text-base mb-4">
                  SUPPORT
                </h6>
                <ul className="text-gray-400">
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
              <div className="w-1/3 px-2 mb-4">
                <h6 className="font-Inter font-medium text-gray-500 text-base mb-4">
                  COMPANY
                </h6>
                <ul className="text-gray-400">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      About Us
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
              <div className="w-1/3 px-2 mb-4">
                <h6 className="font-Inter font-medium text-gray-500 text-base mb-4">
                  SHOP
                </h6>
                <ul className="text-gray-400">
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
              </div>
            </div>
          </div>

          {/* Accepted Payments */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h6 className="font-Inter font-medium text-gray-500 text-base mb-4">
              ACCEPTED PAYMENTS
            </h6>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 mb-2">
                <img src={MasterLogo} alt="Mastercard" className="h-8" />
              </div>
              <div className="px-2 mb-2">
                <img src={Amex} alt="American Express" className="h-8" />
              </div>
              <div className="px-2 mb-2">
                <img src={VisaLogo} alt="Visa" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
