"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPageNavbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/static/images/logo.png"
              alt="AllAssignmentHelp"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <span>Services</span>
                <svg
                  className="w-4 h-4"
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
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <span>Resources</span>
                <svg
                  className="w-4 h-4"
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
            </div>

            <Link href="/experts" className="text-gray-700 hover:text-blue-600">
              Experts
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/earn"
              className="hidden lg:flex items-center text-gray-700 hover:text-blue-600"
            >
              <Image
                src="/static/images/icons/earn.svg"
                alt="Earn"
                width={16}
                height={16}
                className="mr-2"
              />
              <span>Earn $1500</span>
            </Link>

            <Link
              href="/reviews"
              className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              REVIEWS 4.92/5
            </Link>

            <Link
              href="/order"
              className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
