"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LandingPageNavbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeService, setActiveService] = useState("");
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const auth = useAuth();
  const router = useRouter();

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
    setMobileMenuVisible(false);
  };

  const handleScroll = () => {
    const targetElement = document.getElementById("AffordablePricing");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
    try {
      await auth.logout();
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
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
    "Case Study Help",
    "Coursework Help",
    "Thesis Help",
    "PowerPoint Presentation Services",
  ];

  return (
    <>
      <nav className="sticky shadow-sm mx-12 rounded-lg top-5 z-50 backdrop-blur-3xl bg-white/30">
        <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
          <Link
            href="/"
            className="logo flex hue-rotate-[40rad] mb-3 items-center hover:scale-105 transition-all drop-shadow-sm"
          >
            <Image
              src="/static/images/logoNew.png"
              alt="AllAssignmentHelp"
              width={190}
              height={10}
              priority
            />
          </Link>

          <div
            className={`lg:flex items-center space-x-8  ${
              isMobileMenuVisible ? "flex" : "hidden"
            } bg-white lg:bg-transparent transition-all duration-300`}
          >
            <Link
              href="/"
              className={`flex items-center space-x-1 px-2 py-[22px] ${
                pathname === "/"
                  ? "text-black font-bold"
                  : "text-gray-500 font-semibold"
              }`}
            >
              <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">
                Home
              </span>
            </Link>

            <div className="relative " ref={dropdownRef}>
              <button
                onClick={handleDropdownToggle}
                className={`flex items-center space-x-1 px-4 py-[22px] font-semibold ${
                  pathname.startsWith("/services")
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
                aria-expanded={isDropdownVisible}
                aria-controls="services-dropdown"
              >
                <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">
                  Services
                </span>
              </button>
              <div
                id="services-dropdown"
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded-xl p-4 w-[300px] lg:w-[800px] transition-all duration-300 ease-in-out transform ${
                  isDropdownVisible
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            </div>

            <div
              onClick={handleScroll}
              className="flex items-center space-x-1 px-4 py-[22px] text-gray-500 font-semibold cursor-pointer"
            >
              <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">
                Pricing
              </span>
            </div>
            <Link
              href="/review"
              className={`flex items-center space-x-1 px-4 py-[22px] text-black font-semibold ${
                pathname === "/review"
                  ? "text-black font-semibold"
                  : "text-gray-500 font-semibold"
              }`}
            >
              <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">
                Reviews
              </span>
            </Link>
            <Link
              href="/experts"
              className={`flex items-center space-x-1 px-4 py-[22px] text-black font-semibold ${
                pathname === "/experts"
                  ? "text-black font-semibold"
                  : "text-gray-500 font-semibold"
              }`}
            >
              <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">
                Expert
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4 mr-10">
            {auth.isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className={`text-gray-700 hover:text-blue-600 ${
                  pathname === "/login" ? "text-blue-600" : ""
                }`}
              >
                Login
              </Link>
            )}
            <div>
              <button className="text-white shadow-[2px_2px_10px_rgba(111,142,179,0.7)] font-bold uppercase ml-2 mr-2 border-t-2 bg-[#2BAFFC] transition-all  hover:bg-[#4fa3d4] px-4 text-center rounded-3xl py-[10px]">
                <Link href="/order" className="flex gap-2">
                  Order Now
                  <Image
                    height={25}
                    width={25}
                    src="/static/images/order-now.svg"
                    alt="order-now"
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuVisible && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <div className="flex flex-col space-y-4">
            {auth.isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuVisible(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </>
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
        const servicePath = `/services/${title
          .toLowerCase()
          .replace(/ /g, "-")}/${service.toLowerCase().replace(/ /g, "-")}`;
        return (
          <li key={index}>
            <Link
              href={servicePath}
              className={`block text-gray-700 hover:text-[#09b14f] ${
                activeService === servicePath ? "text-black font-semibold" : ""
              }`}
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
