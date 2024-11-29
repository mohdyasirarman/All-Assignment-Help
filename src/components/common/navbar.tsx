"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    "Assignment Help",
    "Essay Writing",
    "Dissertation Help",
    "Thesis Writing",
    "Research Paper",
    "Homework Help",
    "Case Study",
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-12 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/static/images/logo1.png"
              alt="Assignment Help Logo"
              width={200}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/${service.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/samples" className="text-gray-700 hover:text-blue-600">
              Samples
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-blue-600">
              Reviews
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link
              href="/order"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={`/${service.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-blue-600 px-4"
                >
                  {service}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 px-4"
              >
                Login
              </Link>
              <Link
                href="/order"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition mx-4"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
