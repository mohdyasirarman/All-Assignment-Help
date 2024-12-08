"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCog, FaBook, FaHome } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdRoundaboutLeft } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function LandingPageNavbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeService, setActiveService] = useState(""); 
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

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

  const handleLinkClick = (servicePath: string) => {
    setActiveService(servicePath); 
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
    <nav className="sticky shadow-sm mx-[30px] rounded-3xl top-5 z-50 backdrop-filter backdrop-blur-xl">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
       
        <Link href="/" className="flex items-center">
          <Image
            src="/static/images/logo1.png"
            alt="AllAssignmentHelp"
            width={42}
            height={35}
            priority
          />
          <span className="ml-1 text-[18px] font-bold text-gray-700">
            <i>AllAssignmentHelp</i>
          </span>
        </Link>

       
        <Link 
          href="/" 
          className={`flex items-center space-x-1 px-4 py-[22px] ${pathname === '/' ? 'text-blue-500 font-bold' : 'text-black font-semibold'}`}>
          <FaHome />
          <span>Home</span>
        </Link>

       
        <div className="hidden lg:flex items-center space-x-8">
        
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className={`flex items-center space-x-1 px-4 py-[22px] text-black font-semibold ${pathname.startsWith('/services') ? 'text-blue-500 font-bold' : ''}`}
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
                    currentPath={pathname}
                    activeService={activeService} 
                    onClick={handleLinkClick}
                  />
                  <ServiceColumn
                    title="Problem Solving"
                    services={problemSolvingServices}
                    currentPath={pathname}
                    activeService={activeService}
                    onClick={handleLinkClick}
                  />
                  <ServiceColumn
                    title="More Services"
                    services={moreServices}
                    currentPath={pathname}
                    activeService={activeService}
                    onClick={handleLinkClick}
                  />
                </div>
              </div>
            )}
          </div>

       
          <Link href="/courses" className="flex items-center space-x-1 px-4 py-[22px] text-black font-semibold">
            <FaBook />
            <span>Courses</span>
          </Link>
          <Link href="/pricing" className="flex items-center space-x-1 px-4 py-[22px] text-black font-semibold">
            <IoIosPricetags />
            <span>Pricing</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-1 px-4 py-[22px] text-black font-semibold">
            <MdRoundaboutLeft />
            <span>About</span>
          </Link>
        </div>

      
        <div className="flex items-center space-x-4">
          <button className="hidden lg:block mr-8 px-[10px] py-[10px] font-bold rounded-3xl bg-[#F8AC3B] border-t-2 text-white uppercase shadow-[2px_2px_10px_rgba(111,142,179,0.7)] hover:bg-blue-500">
            <div className="flex gap-2">Get Reward</div>
          </button>
          <div>
            <Link href="/order" className="text-black font-semibold">
              Sign In
            </Link>
            <Link href="/order" className="text-white font-semibold uppercase ml-4 bg-[#2BAFFC] px-[20px] text-center rounded-3xl py-[10px]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface ServiceColumnProps {
  title: string;
  services: string[];
  currentPath: string;
  activeService: string; 
  onClick: (servicePath: string) => void; 
}

const ServiceColumn: React.FC<ServiceColumnProps> = ({
  title,
  services,
  activeService,
  onClick,
}) => (
  <div>
    <h3 className="font-bold text-md text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-1">
      {services.map((service, index) => {
        const servicePath = `/services/${title.toLowerCase().replace(/ /g, "-")}/${service.toLowerCase().replace(/ /g, "-")}`;
        return (
          <li key={index}>
            <Link
              href={servicePath}
              className={`block text-gray-700 hover:text-[#09b14f] ${activeService === servicePath ? 'text-blue-500 font-bold' : ''}`}
              onClick={() => onClick(servicePath)} 
            >
              {service}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);