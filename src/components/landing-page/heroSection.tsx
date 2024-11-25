"use client";
// import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaStar } from "react-icons/fa";

interface heroHelpProps {
  changeInForm: string;
  changeInH: string;
  changeInP: string;
}

export default function HeroSection({changeInForm,changeInH,changeInP} : heroHelpProps) {
  const tabs = ["Writing", "Rewriting", "Editing"];
  const [selectedTab, setSelectedTab] = useState(2); // Initially select "Editing"

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <>
      <div className="w-full h-[585px] bg-hero-pattern bg-cover bg-center bg-no-repeat absolute top-18 left-0"></div>
      <div className="w-full h-[585px]">
        <div className="container h-full px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0">
          <div className="w-full flex items-center justify-between pt-4 pb-4 relative">
            {/* Left Section */}
            <div className="flex flex-col gap-5 pt-5 pl-12 pr-4 w-2/4">
              {/* Headings */}
              <div className="flex flex-col gap-5 ">
                <div className="text-[54px] leading-[70px] font-poppins font-bold mb-0">
                  {changeInH ? <div>{changeInH}</div> :  <div>Ace Your Assignments with Expert Help</div>} 
                  <div className="text-[#09B14F]">Anytime, Anywhere!</div>
                </div>
                <div className="mb-8 font-poppins font-normal text-[#5F5F5F] text-lg leading-8">
                 { changeInP ? <p>{changeInP}</p> :<p> Top-rated assignment experts are ready to boost your grades.
                  Get personalized, plagiarism-free assistance now! Instantly!! </p>}
                </div>
              </div>
              {/* Reviews */}
              <div className="flex justify-between w-4/5">
                {/* Talk to Expert Button */}
                <div className="block text-start w-2/5 mt-3 mb-2 ">
                  <button className="bg-[#09B14F] border-none text-lg font-poppins font-normal text-white w-full py-3 px-10 rounded-sm cursor-pointer transition-all duration-300 hover:bg-[#09B14F]/80">
                    Talk to Expert
                  </button>
                </div>
                {/* 5 Star Rating */}
                <div className="flex flex-col mt-3 mb-2">
                  <div className="flex gap-1 ">
                    <FaStar className="text-[#FDC639] text-2xl" />
                    <FaStar className="text-[#FDC639] text-2xl" />
                    <FaStar className="text-[#FDC639] text-2xl" />
                    <FaStar className="text-[#FDC639] text-2xl" />
                    <FaStar className="text-[#FDC639] text-2xl" />
                  </div>
                  <div className="font-inter font-medium text-base leading-6 text-[#2E2F35]">
                    5.0 Academia Rating
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="border-white p-1 mb-4 rounded-xl flex flex-col gap-5 w-2/5">
              <div className="bg-white border-white border-[4px] bg-opacity-10 px-3 pt-5 pb-3 rounded-xl shadow">
                {/* Heading */}
                {changeInForm?<div className="text-lg px-12 text-[#2c2c2c] text-center font-poppins font-bold mb-3 ">{changeInForm}</div>:<div className="text-lg px-12 text-[#2c2c2c] text-center font-poppins font-bold mb-3 ">
                  Fill in your details and get started with a
                  <div className="text-orange-500 inline-block">
                    20% discount
                  </div>{" "}
                  on your first order!
                </div>}
                {/* Tabs */}
                <div className="flex justify-center mb-4">
                  <div className="sm:hidden relative inline-flex">
                    <label htmlFor="Tab" className="sr-only">
                      Tab
                    </label>

                    <select
                      id="Tab"
                      className="w-full rounded-md border-gray-200"
                    >
                      <option>Settings</option>
                      <option>Rewriting</option>
                      <option selected>Editing</option>
                    </select>
                  </div>

                  <div className="hidden sm:block">
                    <nav
                      className="flex border-[1px] border-spacing-2 border-[#007bff] rounded"
                      aria-label="Tabs"
                    >
                      {tabs.map((tab, index) => (
                        <div
                          key={tab}
                          className={`shrink-0 px-2 text-sm font-medium border-r-[1px] border-[#007bff] ${
                            index === selectedTab
                              ? "bg-[#3176ef] text-white hover:bg-blue-600 hover:text-white"
                              : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          }`}
                          onClick={() => handleTabClick(index)}
                        >
                          {tab}
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
                {/* Input */}
                <div className="flex  lg:flex-row gap-5">
                  <div className="pl-1 pr-1 w-2/4">
                    <div className="w-full px-2 mb-5 block relative ">
                      <Input
                        className="bg-[#f6f6fa] border-[#C8C8C8] rounded-md px-1.5 py-3 w-full"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="w-full px-2 mb-5 block relative ">
                      <Input
                        className="bg-[#f6f6fa] border-[#C8C8C8] rounded-md px-1.5 py-3 w-full"
                        type="text"
                        placeholder="Subject/Course Code"
                      />
                    </div>
                    <div className="w-full px-2 mb-5 block relative ">
                      <Input
                        className="bg-[#f6f6fa] border-[#C8C8C8] rounded-md px-1.5 py-3 w-full"
                        type="date"
                        placeholder="Deadline"
                      />
                    </div>
                    <div className="w-full px-2 mb-5 block relative ">
                      <Input
                        className="bg-[#f6f6fa] border-[#C8C8C8] rounded-md px-1.5 py-3 w-full"
                        type="number"
                        placeholder="No of Pages"
                      />
                    </div>
                  </div>
                  <div className="pl-1 pr-1 w-2/4">
                    <div className="w-full px-2 mb-5 block relative ">
                      <Input
                        className="bg-[#f6f6fa] border-[#C8C8C8] rounded-md px-1.5 py-3 w-full"
                        type="number"
                        placeholder="Mobile Number"
                      />
                    </div>
                    {/* <FileUpload /> */}
                    <div className="w-full px-2 mb-5 block relative ">
                      <textarea
                        className="bg-[#f6f6fa] border border-[#C8C8C8] rounded-md px-1.5 py-3 w-full min-h-[100px] max-h-[100px]"
                        placeholder="Description"
                      />
                    </div>
                    <div className="w-full px-2 mb-5 block relative ">
                      <Input
                        className="bg-[#f6f6fa] border-[#C8C8C8] rounded-md px-1.5 py-3 w-full"
                        type="file"
                        placeholder="Attach file"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-full flex justify-start items-center pr-5 pt-0 px-2 mb-5 relative ">
                    <input
                      className="bg-[#f6f6fa] border-[#C8C8C8] rounded-md px-1.5 py-3 w-[14px] h-[14px]"
                      type="checkbox"
                    />
                    <label
                      className="pl-2 font-inter font-medium text-sm leading-6 text-[#2E2F35]"
                      htmlFor="checkbox"
                    >
                      I accept the T&C, agree to receive offers & updates
                    </label>
                  </div>
                </div>
                <div className="block text-center mt-3 mb-2 ">
                  <button className="bg-[#09B14F] border-none text-lg max-w-[300px] text-white w-full py-3 px-10 rounded-sm cursor-pointer transition-all duration-300 hover:bg-[#09B14F]/80">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[568px] bg-hero-pattern bg-cover bg-center bg-no-repeat absolute top-24 left-0"></div> */}
    </>
  );
}
