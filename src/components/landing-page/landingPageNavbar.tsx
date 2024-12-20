"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LandingPageNavbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeService, setActiveService] = useState("");
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
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
    setMobileMenuVisible(false);
  };

  const handleScroll = () => {
    const targetElement = document.getElementById("AffordablePricing");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
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
          <Link href="/" className="logo flex hue-rotate-[40rad] mb-3 items-center hover:scale-105 transition-all drop-shadow-sm">
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
              <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">Home</span>
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
                <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">Services</span>
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
              <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">Pricing</span>
            </div>
            <Link
              href="/review"
              className={`flex items-center space-x-1 px-4 py-[22px] text-black font-semibold ${
                pathname === "/review"
                  ? "text-black font-semibold"
                  : "text-gray-500 font-semibold"
              }`}
            >
              <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">Reviews</span>
            </Link>
            <Link
              href="/experts"
              className={`flex items-center space-x-1 px-4 py-[22px] text-black font-semibold ${
                pathname === "/experts"
                  ? "text-black font-semibold"
                  : "text-gray-500 font-semibold"
              }`}
            >
              <span className="hover:text-[#09b14f] drop-shadow-sm duration-400 transition-all hover:scale-105">Expert</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden  lg:block mr-8 px-[10px] py-[10px] font-bold rounded-3xl bg-[#F8AC3B] border-t-2 text-white uppercase shadow-[2px_2px_10px_rgba(111,142,179,0.7)] hover:bg-blue-500 transition-all">
              <div className="flex gap-2 drop-shadow-sm">
                Get Reward
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="23" height="23" fill="url(#pattern0_602_1396)" />
                  <defs>
                    <pattern
                      id="pattern0_602_1396"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        href="#image0_602_1396"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_602_1396"
                      width="512"
                      height="512"
                      href="data:image/png;base64,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JKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGmQAkCSpQQYASZIaZACQJKlBBgBJkhpkAJAkqUEGAEmSGlQZAK4pbFuSpDG4uqrhygBweWHbkiSNwWVVDVcGgOWFbUuSNAYGAEmSGtRkALiksG1JksagrC+sDABnFbYtSdIY/Kyq4coAcHph25IkjcFPqho2AEiSVMcAIElSg06rajiqGs7MDYCLgc2qapBWFREl50RmZkW7VTzOEgC/AbaLiJL3ZdkIQERcC5xY1b4kScW+UNX5Q/1eAF8ubl+SpCqfr2y8OgB8qbh9SZKqfLGy8eoAcBLw6+IaJEka2o8i4peVBZQGgIi4DvhQZQ2SJBV4b3UBZU8BrJCZ9wC+V12HBM5OH4rHWY27FrhdRPy2sojqWwBExPeBk6vrkCRpIMdVd/4wggDQ+6/qAiRJGsi7qwuAEdwCAMjMTYGzgW2KS1HjHJoehsdZDfsecO/K5/9XGMUIQERcAbytug5JkibsH8bQ+cNIRgAAMnNL4Bxgy+pa1C6vTIfhcVajRnP1DyMZAQCIiEuBo6rrkCRpQl40ls4fRjQCAJCZmwCnAjtV16I2eWU6DI+zGvTBiPjr6iJWNpoRAICIuAo4oroOSZKW0MXAc6uLWNWoAgBARBwLHFddhyRJS+T5ETG6Ze9HdQtghczcnm6fgK2ra1FbHJoehsdZDTkeOHBM9/5XGN0IAEC/QcITgdEdMEmS5ugc4NAxdv4w0gAAEBGfBo6srkOSpAX4PfDIiLioupA1GW0A6L0UOKG6CEmS5iGBp/V73YzWqANARFwLHAD8sLoWSZLm6EURcXR1Eesy6gAANywQ9DC6vQIkSRqz10TE66uLmIvRBwCAiDgPeChwYXUtkiStwTsi4qXVRczVVAQAgIg4DdgH+EV1LZIkreIo4FnVRczH1AQAuCEE3Bf4UXUtkiQB1wFPj4jDx/q435pMVQAAiIjzgQfi0wGSpFqX0S3y82/VhSzE1AUAgIi4GNgXeCVwfXE5kqT2fBe4Z79mzVQa5VLA85GZ+wHvB7atrkXTzyVqh+Fx1hRL4K106/tfU13MYkzlCMDKIuILwL2AT1bXIkmaaacD+/f3+6e684cZCAAAEXFuRBxEt2jQWdX1SJJmypV0t5zvGhFfrC5mqUz9LYBVZeYmwAuBI4AtisvRlHFoehgeZ02Ja4EPAC/t16OZKTMXAFbIzM2BJwMvArYrLkdTwo5pGB5njdzVwEeAV0XEz6qLmZSZDQArZOZmwFOAJwF7FZejkbNjGobHWSN1FvA+uhX9fl1dzKTNfABYWWbuCRwMHIKjAloNO6ZheJw1IpcAxwFHA1+ctsV8FqOpALCyzNwZ2K9/7Q9sVVuRxsCOaRgeZxW6EvgG8HXgROBrszCjfyGaDQAry8z1gd361679r7sAmwGb04WDzYANq2rUMOyYhuFx1oRcA1xOd1W/vP/9GcBP+9fpwOn9VvPN+//gODk/CqBnZwAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
              </div>
            </button>

            <div>
              
              <Link
                href="/order"
                className="text-white drop-shadow-sm font-semibold uppercase ml-4 border-t-2 bg-[#2BAFFC] transition-all  hover:bg-[#4fa3d4] px-[20px] text-center rounded-3xl py-[10px]"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
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
