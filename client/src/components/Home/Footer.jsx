import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
          <Link to="/" className="text-sm text-gray-600 transition-colors hover:text-gray-900 md:text-base">
            Home
          </Link>
          <Link to="/features" className="text-sm text-gray-600 transition-colors hover:text-gray-900 md:text-base">
            Features
          </Link>
          <Link to="/pricing" className="text-sm text-gray-600 transition-colors hover:text-gray-900 md:text-base">
            Pricing
          </Link>
          <Link to="/faqs" className="text-sm text-gray-600 transition-colors hover:text-gray-900 md:text-base">
            FAQs
          </Link>
          <Link to="/about" className="text-sm text-gray-600 transition-colors hover:text-gray-900 md:text-base">
            About
          </Link>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Copyright & Social Links */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Shopping-Cart. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-gray-600" aria-label="Facebook">
              <i className="fa-brands fa-facebook text-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-gray-600" aria-label="Twitter">
              <i className="fa-brands fa-twitter text-lg"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-gray-600" aria-label="Instagram">
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-gray-600" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
