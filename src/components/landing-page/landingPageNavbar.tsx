"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCog, FaTh, FaUser, FaHandshake } from "react-icons/fa";

export default function LandingPageNavbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/static/images/logo1.png"
              alt="AllAssignmentHelp"
              width={42}
              height={35}
              priority
            />
            <span className="ml-2 text-[18px] font-bold text-gray-700">
              <i>AllAssignmentHelp</i>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center mr-40">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-black font-semibold px-5 py-[22px] pb-5 bg-transparent">
                <FaCog />
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
              {/* Dropdown Menu for Services */}
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg">
                <Link
                  href="/services/write-my-essay-for-me"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Write My Essay for Me
                </Link>
                <Link
                  href="/services/easy-editing-services"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Easy Editing Services
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-black font-semibold px-5 py-[22px] pb-5 bg-transparent">
                <FaTh />
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

            <div className="relative group">
              <button className="flex items-center space-x-1 text-black font-semibold px-5 py-[22px] pb-5 bg-transparent">
                <FaUser />
                <span>Experts</span>
              </button>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/earn"
              className="hidden lg:flex items-center font-semibold text-[14px] leading-[20px] text-gray-700 hover:text-blue-600"
            >
              <FaHandshake className="mr-2" />
              <span>Earn $1500</span>
            </Link>

            <Link
              href="/reviews"
              className="hidden lg:block px-[8px] py-[11px] font-bold rounded-[6px] bg-[#1653c4] border border-[#1653c4] text-white uppercase shadow-[2px_2px_8px_rgba(111,142,179,0.8)] hover:bg-blue-700"
            >
              REVIEWS 4.92/5
            </Link>

            <Link
              href="/order"
              className="bg-transparent text-[#232e45] uppercase font-bold px-[8px] py-[10px] rounded-[6px] shadow-[inset_0_0_8px_rgba(186,206,230,0.8),2px_2px_8px_rgba(186,206,230,0.8)] [text-shadow:0_0_8px_rgba(186,206,230,0.8)] border-2 border-[#232e45]"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
