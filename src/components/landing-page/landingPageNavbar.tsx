"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCog, FaTh, FaHandshake } from "react-icons/fa";

export default function LandingPageNavbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

 
  const handleDropdownToggle = () => {
    setDropdownVisible((prev) => !prev);
  };


  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  
  const handleLinkClick = () => {
    setDropdownVisible(false);
  };

  const writingServices = [
    "Write My Essay for Me",
    "Essay Editing Service",
    "Cheap Essay Writing Services",
    "MBA Essay Writing Service",
    "Essay Help",
    "Research Proposal Writing Service",
    "Research Paper Writing",
    "Write My Paper",
    "Ghost Writer",
    "Academic Writing",
  ];

  const problemSolvingServices = [
    "Programming Assignment Help",
    "Assessment Help",
    "Do My Assignment",
    "College Homework Help",
    "Urgent Assignment Help",
    "Pay Someone To Do My Homework",
    "Do My Coursework",
    "Do My Homework",
    "Take My Online Class",
  ];

  const moreServices = [
    "Take My Online Exam",
    "Dissertation Help",
    "Term Paper Help",
    "Homework Help",
  ];

  return (
    <nav className="sticky shadow-md mx-[5%] rounded-lg top-5 px-2 z-50 backdrop-filter backdrop-blur-xl border border-slate-300">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
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
        <div className="hidden lg:flex items-center space-x-8">
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className="flex items-center space-x-1 text-black font-semibold px-5 py-[22px] bg-transparent"
              aria-expanded={isDropdownVisible}
              aria-controls="services-dropdown"
            >
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
            {isDropdownVisible && (
              <div
                id="services-dropdown"
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl p-4 w-[800px]"
              >
                <div className="grid grid-cols-3 gap-8">
                  <ServiceColumn
                    title="Writing"
                    services={writingServices}
                    onClick={handleLinkClick}
                  />
                  <ServiceColumn
                    title="Problem Solving"
                    services={problemSolvingServices}
                    onClick={handleLinkClick}
                  />
                  <ServiceColumn
                    title="More Services"
                    services={moreServices}
                    onClick={handleLinkClick}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Resources Link */}
          <button className="flex items-center space-x-1 text-black font-semibold px-5 py-[22px] bg-transparent">
            <FaTh />
            <span>Resources</span>
          </button>
        </div>

        {/* Right Side Actions */}
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
            className="hidden lg:block px-[8px] py-[11px] font-bold rounded-3xl bg-[#09b14f] border border-[] text-white uppercase shadow-[2px_2px_8px_rgba(111,142,179,0.8)] hover:bg-blue-500"
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
    </nav>
  );
}

interface ServiceColumnProps {
  title: string;
  services: string[];
  onClick: () => void;
}

const ServiceColumn: React.FC<ServiceColumnProps> = ({
  title,
  services,
  onClick,
}) => (
  <div>
    <h3 className="font-bold text-md text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-1">
      {services.map((service, index) => (
        <li key={index}>
          <Link
            href={`/services/${title.toLowerCase().replace(/ /g, "-")}/${service
              .toLowerCase()
              .replace(/ /g, "-")}`}
            className="block text-gray-700 hover:text-[#09b14f]"
            onClick={onClick}
          >
            {service}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
