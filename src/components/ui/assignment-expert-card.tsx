"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export function AssignmentExpertCard({}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "overflow-hidden relative card h-[350px] rounded-[20px] shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-white bg-cover"
        )}
      >
        {/* <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-[#09B14F] opacity-60"></div> */}
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/static/images/Profile_avatar_placeholder_large.png"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex flex-col font-poppins">
            <p className="font-bold text-base text-[#2C2C2C] leading-4 relative z-10">
              Name
            </p>
            <p className="text-sm text-[#8A8A8A]">Qualifications</p>
            <div className="flex gap-1">
              <FaStar className="text-[#09B14F] text-base" />
              <FaStar className="text-[#09B14F] text-base" />
              <FaStar className="text-[#09B14F] text-base" />
              <FaStar className="text-[#09B14F] text-base" />
              <FaStar className="text-[#09B14F] text-base" />
            </div>
          </div>
        </div>
        <div className="text content -mt-10">
          {/* <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Author Card
          </h1> */}
          <p className="font-poppins font-normal text-sm text-[#2C2C2C] relative  z-10 my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem sed
            et facere nemo animi praesentium harum placeat, suscipit sint totam
            nam? Iusto alias aut obcaecati aperiam est cupiditate quod rem.
          </p>
        </div>
        <div className="mb-5 w-full flex justify-center text-white font-normal font-poppins">
          <button className="bg-[#09B14F] w-2/6 h-10 rounded cursor-pointer transition duration-300 hover:bg-[#09B14F]/70">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

interface AcademicSuccessCardProps {
  title: string;
  image: string;
  description: string;
  color: string;
}

export function AcademicSuccessCard({
  title,
  image,
  description,
  color,
}: AcademicSuccessCardProps) {
  return (
    <>
      <div className="max-w-xs w-full group/card">
        <div
          className={cn(
            "overflow-hidden relative card h-[390px] rounded-[13px] max-w-sm mx-auto backgroundImage flex flex-col p-4",
            color === "blue" ? "bg-[#E6F2FF] bg-cover" : "bg-[#CCF3E5] bg-cover"
          )}
        >
          <div className="p-[5px] h-52 w-full flex justify-center items-center">
            <Image
              height={150}
              width={150}
              alt="Avatar"
              src={image}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col font-poppins text-center p-1">
            <p className="w-full font-bold text-xl leading-8">{title}</p>
            <p className="w-full font-normal text-base text-[#58595D] relative p-2">
              {description}
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

interface ComprehensiveHelpCardProps {
  image: string;
  title: string;
  description: string;
}

export function ComprehensiveHelpCard({
  image,
  title,
  description,
}: ComprehensiveHelpCardProps) {
  return (
    <>
      <div className="w-full group/cards">
        <div
          className={cn(
            "overflow-hidden relative drop-shadow-lg card h-[200px] w-[380px] rounded-[13px] backgroundImage flex flex-col p-3 bg-white "
          )}
        >
          <div className="pt-5 pb-1 pl-3 w-full flex justify-start items-center">
            <Image
              height={48}
              width={48}
              alt="Avatar"
              src={image}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col font-poppins text-start pl-3 pt-2">
            <p className="w-full  font-semibold text-xl">{title}</p>
            <p className="w-full font-montserrat font-normal text-base text-[#8A8A8A] pt-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

type  PricingCardProps = {
  title: string;
  price: string;
};

export function PricingCard() {
  const pricingData =  [
    {
      id: 1,
      title: "Referencing",
      price: "$20.99",
    },
    {
      id: 2,
      title: "Revision",
      price: "$19.99",
    },
    {
      id: 3,
      title: "Plagiarism Checks",
      price: "$14.99",
    },
    {
      id: 4,
      title: "Formatting",
      price: "$12.99",
    },
    {
      id: 5,
      title: "Proofreading & Editing",
      price: "$10.99",
    },
    {
      id: 6,
      title: "Unlimited Edits",
      price: "$06.99",
    },
  ] ;

  const pricingStrip = (pricingData: PricingCardProps) => {
    return (
      <div className="w-full flex justify-between items-center font-poppins">
        <div className="flex gap-3">
          <Image
            height={24}
            width={24}
            src="/static/images/pricing/green-tick.svg"
            alt="tick"
          />
          <div className="font-normal text-[#5F5F5F] text-base leading-6">
            {pricingData.title}
          </div>
        </div>
        <div className="flex justify-between font-normal text-base leading-6 gap-3">
          <div className="text-[#5F5F5F] line-through">{pricingData.price}</div>
          <div className="text-[#09B14F]">FREE</div>
        </div>
      </div>
    );
  };
  return (
    <div className="border-2 border-[#2E2F35] h-[450px] w-[490px] rounded-xl font-poppins ">
      {/* Heading */}
      <div className="font-bold text-xl leading-8 text-center my-5 ">
        FREE Features
      </div>
      {/* Pricing */}
      <div className="flex flex-col gap-2">
        {pricingData.map((data) => (
          <div key={data.id} className="flex justify-between px-5 py-1">
            {pricingStrip(data)}
          </div>
        ))}
      </div>
      {/* Button */}
      <div className="mt-8 font-normal text-center w-full">
        <div className="text-[#5F5F5F] text-md">
          Get These Premium Features Today
        </div>
        <div className="w-full my-4">
          <button className="bg-[#09B14F] h-12 w-2/5 rounded text-white text-lg">
            Unlock More
          </button>
        </div>
      </div>
    </div>
  );
}

type WritingToolCardProps = {
  title: string;
  description: string;
};

import { useState } from 'react';

export function WritingToolCard({ title, description }: WritingToolCardProps) {
  const [isExpanded, setIsExpanded] = useState(false); // State to track expanded state
  const text = 75;
  const truncatedDescription = description.length > text ? description.slice(0, text) + '...' : description;

  const handleClick = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <div className="w-full group/cards" onClick={handleClick}>
      <div
        className={cn(
          "overflow-hidden relative drop-shadow-lg card lg:w-[265px] rounded-[13px] backgroundImage flex flex-col p-5 bg-[#e2f4ff] transition-all duration-300 ease-in-out", // Add transition
          isExpanded ? "lg:h-[300px]" : "lg:h-[230px]" // Adjust height when expanded
        )}
      >
        <div className="flex flex-col font-poppins text-start pl-3 pt-2 flex-grow">
          <p className="w-full font-bold text-[22px] font-poppins leading-6 text-[#2C2C2C]">{title}</p>
          <p className="w-full font-montserrat text-base text-[#8A8A8A] pt-3">
            {isExpanded ? description : truncatedDescription} {/* Conditionally render full or truncated description */}
          </p>
        </div>
        <div className="text-center flex font-poppins mt-auto">
          <div className="w-full font-semibold text-[#55C360]">Check Now</div>
        </div>
      </div>
    </div>
  );
}
