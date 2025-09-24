"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footar = () => {
  return (
    <footer className="bg-[#212121] text-white text-sm mx-2 mt-2 pt-5">
      {/* Top Section */}
      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-8 py-8 border-b border-gray-700">
        {/* ABOUT */}
        <div>
          <h1 className="font-medium text-gray-400 mb-3 text-sm">ABOUT</h1>
          <ul className="space-y-0">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* GROUP COMPANIES */}
        <div>
          <h1 className="font-medium text-gray-400 text-sm mb-3">GROUP COMPANIES</h1>
          <ul className="space-y-0">
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h1 className="font-medium text-gray-400 text-sm mb-3">HELP</h1>
          <ul className="space-y-0">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* CONSUMER POLICY */}
        <div>
          <h1 className="font-medium text-gray-400 text-sm mb-3">CONSUMER POLICY</h1>
          <ul className="space-y-0">
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        {/* MAIL US */}
        <div>
          <h1 className="font-medium text-gray-400 mb-2">Mail Us:</h1>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* REGISTERED OFFICE */}
        <div>
          <h1 className="font-medium text-gray-400 mb-2">
            Registered Office Address:
          </h1>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <p className="mt-2">CIN: U51109KA2012PTC066107</p>
          <p>
            Telephone:{" "}
            <span className="text-blue-400">044-45614700 / 044-67415800</span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-full mx-auto flex flex-col lg:flex-row justify-between items-center px-8 py-4 text-gray-400 text-xs gap-4">
        {/* Links */}
        <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
          <span className="flex items-center gap-5  cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
              alt="seller"
              className="w-4 h-4"
            />
            Become a Seller
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684831.png"
              alt="advertise"
              className="w-4 h-4"
            />
            Advertise
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2545/2545590.png"
              alt="gift"
              className="w-4 h-4"
            />
            Gift Cards
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
              alt="help"
              className="w-4 h-4"
            />
            Help Center
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center">© 2007-2025 Flipkart.com</p>

        {/* Payments */}
        <div className="flex gap-3 flex-wrap justify-center">
          <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
          <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="MasterCard" className="h-6" />
          <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-6" />
          <img src="https://img.icons8.com/color/48/discover.png" alt="Discover" className="h-6" />
          <img src="https://img.icons8.com/color/48/rupay.png" alt="RuPay" className="h-6" />
          <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" className="h-6" />
          <img src="https://img.icons8.com/color/48/paytm.png" alt="Paytm" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footar;








