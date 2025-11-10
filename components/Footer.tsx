"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#630700] text-white py-12 rounded-tl-[60px] rounded-tr-[60px]">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/brand-logo.png"
                alt="Alburaq"
                width={80}
                height={40}
                className="mb-4"
              />
            </div>
            <p className="text-xl text-white mb-6">
              Rapid Supermarket Serves Sweets perfectly, complementing tender
              cuts of meat to.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-nowrap gap-2 sm:gap-3 overflow-x-auto">
              {/* X (Twitter) */}
              <Link
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-8 h-8 min-w-[2rem] min-h-[2rem] border-2 border-red-300 rounded-full flex items-center justify-center hover:bg-red-700 hover:bg-opacity-20 transition-all aspect-square"
              >
                <svg
                  className="w-3 h-3 text-red-200 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/Alburaqemb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-8 h-8 min-w-[2rem] min-h-[2rem] bg-red-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors aspect-square"
              >
                <svg
                  className="w-4 h-4 text-white flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-8 h-8 min-w-[2rem] min-h-[2rem] border-2 border-red-400 rounded-full flex items-center justify-center hover:bg-red-700 hover:bg-opacity-20 transition-all aspect-square"
              >
                <svg
                  className="w-4 h-4 text-red-200 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-8 h-8 min-w-[2rem] min-h-[2rem] border-2 border-red-400 rounded-full flex items-center justify-center hover:bg-red-700 hover:bg-opacity-20 transition-all aspect-square"
              >
                <svg
                  className="w-3 h-3 text-red-200 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">COMPANY INFO</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonial"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Al+Rashidiya+1+Ajman+United+Arab+Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-policy"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-card"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Gift Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">HELP & SUPPORT</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/help-support"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link
                  href="/help-support"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/help-support"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  How to order
                </Link>
              </li>
              <li>
                <Link
                  href="/help-support"
                  className="text-xl text-white hover:text-white transition-colors"
                >
                  How to track Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-red-200 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 12a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1 1 0 003.8 21.454l3.032-.892A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
                <p className="text-xl text-white">058 201 5468</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-red-200 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <p className="text-xl text-white">
                  info@mizanursupermarket.com
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-red-200 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <p className="text-xl text-white">
                  Al Rashidiya 1 - Ajman - United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {/* Scroll to Top Button - Bottom Left */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="absolute -top-16 -left-12 w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Scroll to top"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>

            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-xl text-white">
                Developed by{" "}
                <span className="text-white font-semibold">Rapid</span>
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-xl text-white">
                Copyright © MizanurSuperMarket. All Rights Reserved
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded px-2 py-1">
                <Image src={"/visa.png"} alt="visa" width={60} height={20} />
              </div>
              <div className="bg-white rounded px-2 py-1">
                <div className="flex space-x-1">
                  <Image src={"/mc.png"} alt="visa" width={32} height={10} />
                </div>
              </div>
              <div className="bg-white rounded px-2 py-1">
                <Image src={"/paypal.png"} alt="visa" width={65} height={20} />
              </div>
              <div className="bg-white rounded px-2 py-1">
                <Image src={"/ipay.png"} alt="visa" width={40} height={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
