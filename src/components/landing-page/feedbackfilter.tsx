import React from "react";
import Image from "next/image";

const FeedbackFilter: React.FC = () => {
  return (
    <section className="text-center py-10">
      <h2 className="font-poppins font-bold text-[48px] leading-[52.8px] text-[#1C1C1C] mb-2">
        See What Students Are Saying
      </h2>
      <p className="font-poppins font-[400] text-[18px] leading-[19.8px] mb-6 text-[#000000] text-opacity-[60%]">
        Explore genuine feedback from students who have experienced our expert
        services
      </p>

      <div className="flex justify-center space-x-4 mt-[20px]">
        {/* Dropdown 1 */}
        <div className="relative">
          <select
            className="border-[3px] w-[293px] h-[70px] border-[#55C360] font-poppins font-[500] text-[20px] leading-[26px] text-[#000000] text-opacity-[60%] rounded-full px-5 py-2 appearance-none focus:outline-none cursor-pointer"
          >
            <option>All Subjects</option>
          </select>
          <Image
            src="/static/images/Vector.svg"
            alt="arrow"
            width={12}
            height={15}
            className="absolute right-5 top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* Dropdown 2 */}
        <div className="relative">
          <select
            className="border-[3px] w-[270px] h-[70px] border-[#55C360] font-poppins font-[500] text-[20px] leading-[26px] text-[#000000] text-opacity-[60%] rounded-full px-5 py-2 appearance-none focus:outline-none cursor-pointer"
          >
            <option>Latest</option>
          </select>
          <Image
            src="/static/images/Vector.svg"
            alt="arrow"
            width={12}
            height={15}
            className="absolute right-5 top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* Dropdown 3 */}
        <div className="relative">
          <select
            className="border-[3px] w-[281px] h-[70px] border-[#55C360] font-poppins font-[500] text-[20px] leading-[26px] text-[#000000] text-opacity-[60%] rounded-full px-5 py-2 appearance-none focus:outline-none cursor-pointer"
          >
            <option>All Ratings</option>
          </select>
          <Image
            src="/static/images/Vector.svg"
            alt="arrow"
            width={12}
            height={15}
            className="absolute right-5 top-[40%] transform -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default FeedbackFilter;
