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
          <button className="bg-[#09B14F] w-2/6 h-12 rounded cursor-pointer transition duration-300 hover:bg-[#09B14F]/70">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
