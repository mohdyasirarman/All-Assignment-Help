"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LandingPageNavbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      title: "Assignment Help",
      subItems: ["Management", "Engineering", "Programming", "Law", "Finance"],
    },
    {
      title: "Essay Writing",
      subItems: [
        "Essay Help",
        "Essay Editing",
        "Essay Topics",
        "Essay Examples",
      ],
    },
    {
      title: "Dissertation Help",
      subItems: [
        "PhD Dissertation",
        "Masters Dissertation",
        "Research Proposal",
      ],
    },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="pl-4">
            <Image
              src="/static/images/logo1.png"
              alt="Assignment Help Logo"
              width={220}
              height={60}
              priority
            />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center space-x-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  {service.title}
                  <span className="ml-1">▼</span>
                </button>
                <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg hidden group-hover:block z-50">
                  {service.subItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/samples"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Samples
            </Link>
            <Link
              href="/reviews"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Reviews
            </Link>
          </div>

          <div className="flex items-center space-x-4 pr-4">
            <Link
              href="/login"
              className="hidden md:block text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              href="/order"
              className="bg-orange-500 text-white px-6 py-2.5 rounded-md hover:bg-orange-600 transition font-medium"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
