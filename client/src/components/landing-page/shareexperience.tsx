import React from "react";
import Image from "next/image";

const ShareExperience: React.FC = () => {
  return (
    <section className="bg-[#F5F6FB] py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left ml-[50px]">
        <h2 className="font-bold font-poppins text-[48px] leading-[50px] text-[#000000] mb-4">
          Share Your <br /> Experience with Us
        </h2>
        <p className="font-poppins font-[400] text-[18px] leading-[32px] text-[#000000] mb-6 w-[501px]">
          Help us improve and inspire others by sharing your experience.
        </p>
        <button className="bg-[#55C360] w-[174px] h-[56px] text-[#FFFFFF] px-3 py-3 rounded-[40px] font-poppins font-semibold text-[18px] leading-[24px] hover:bg-[#45a350] transition duration-300">
          Write a Review
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/static/images/i1.svg" 
          alt="Share your experience"
          width={449}
          height={300}
          className="rounded-[50px]"
        />
      </div>
    </section>
  );
};

export default ShareExperience;
