"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface Expert {
  name: string;
  qualification: string;
  description: string;
  image: string;
}

const experts: Expert[] = [
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
  {
    name: "Alexis Jiang",
    qualification: "Masters of Ph.D. in Accounting",
    description: "",
    image: "/static/images/picture.svg",
  },
];

const Experts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#F5F6FB] py-12">
      <div className="mx-auto px-4">
        <div className="text-center mb-8">
          <button className="text-[#2BAFFC] bg-white rounded-xl p-1 font-bold text-[18px] leading-[27px]">
            OUR EXPERTS
          </button>
          <h1 className="text-[48px] font-poppins leading-[72px] font-bold text-gray-800 mt-[10px]">
            Connect with Top Assignment Experts
          </h1>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide pb-4"
        >
          <div className="bg-white rounded-lg mb-8 p-6 flex items-start w-[625px] h-[336px]">
            <div className="flex flex-col items-start w-[300px]">
              <Image
                src="/static/images/picture.svg"
                alt="Featured Expert"
                width={248}
                height={196}
                className="rounded-md mb-4"
              />
              <h2 className="text-[18px] font-poppins leading-[16px] font-bold text-[#2C2C2C] mb-2">
                Alexis Jiang
              </h2>
              <p className="text-[#8A8A8A] font-poppins font-[400] text-[16px] leading-[21px] mb-4">
                Masters of Ph.D. in Accounting
              </p>
              <div className="flex flex-row gap-[4px] mt-[-10px]">
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />{" "}
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />{" "}
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />{" "}
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center w-[280px] mt-[100px]">
              <p className="text-[#343434] mb-4 font-poppins font-[500] text-[16px] leading-[24px]">
              With a decade of experience in the ever-evolving landscape of digital marketing, James brings practical insights and hands-on strategies to her assignments.
              </p>
              <button className="bg-[#55C360] text-white px-3 py-2 rounded-[30px] w-[120px] mt-[10px]">
                Hire Now
              </button>
            </div>
          </div>
          {experts.map((expert, index) => (
            <div
              key={index}
              className="w-[400px] h-[336px] bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              <Image
                src={expert.image}
                alt={expert.name}
                width={248}
                height={196}
                className="rounded-md mb-4 mt-[20px]"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {expert.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {expert.qualification}
              </p>
              {expert.description && (
                <p className="text-sm text-gray-600 mb-4">
                  {expert.description}
                </p>
              )}
              <div className="flex flex-row gap-[4px]">
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />
                <Image
                  src="/static/images/star.svg"
                  alt="Rating"
                  width={15}
                  height={16}
                  className="mt-2"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-4">
          <button className="bg-white font-poppins font-semibold text-[18px] leading-[27px] text-[#55C360] px-6 py-2 rounded-[30px] border-[2px] border-green-500">
            View More
          </button>

          {/* Horizontal Line */}
          <hr className="w-[900px] h-1 bg-gray-300 mx-4" />

          <div className="flex  space-x-2">
            <Image 
            src="/static/images/arrow1.svg"
            alt="arrow"
            width={56}
            height={56}
            onClick={scrollLeft}
            className="cursor-pointer"
            />
            <Image 
            src="/static/images/arrow2.svg"
            alt="arrow"
            width={56}
            height={56}
            onClick={scrollRight}
            className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
