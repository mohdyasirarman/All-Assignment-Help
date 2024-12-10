import React from "react";
import Image from "next/image";

const ThingAboutUs: React.FC = () => {
  return (
    <div className="bg-white py-10 px-5 flex flex-col items-center">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-16">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/static/images/thing1.svg"
            alt="No AI Content"
            width={540}
            height={400}
            className="rounded-[24px]"
          />
        </div>
        {/* Text Content */}

        <div className="text-center lg:text-left max-w-[500px]">
          <Image
            src="/static/images/prize.svg"
            alt="Expert Verification"
            width={56}
            height={56}
          />
          <h3 className="text-[48px] leading-[62px] font-poppins font-bold text-[#010101] mb-4">
            No AI Content: 100% Human Expertise
          </h3>
          <p className="text-[16px] text-[#666666] font-poppins leading-[24px] mb-6 font-[400]">
            Every piece of content is created by skilled professionals, ensuring
            originality, creativity, and precision without relying on AI tools.{" "}
          </p>
          <div className="text-[15px] flex flex-row font-poppins leading-[21px] text-[#666666] font-[400] mb-6">
            <Image
              src="/static/images/elements.svg"
              alt="Expert Verification"
              width={19}
              height={19}
              className="rounded-[24px] mr-[5px]"
            />
            <p>Every word is written by professionals, ensuring originality.</p>
          </div>
          <div className="text-[15px] flex flex-row font-poppins leading-[21px] text-[#666666] font-[400] mb-6">
            <Image
              src="/static/images/elements.svg"
              alt="Expert Verification"
              width={19}
              height={19}
              className="rounded-[24px] mr-[5px]"
            />
            <p>Great ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <button className="bg-[#55C360] text-white text-[14px] font-semibold py-3 px-6 rounded-[40px]">
            Do My Assignment
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/static/images/thing2.svg"
            alt="Expert Verification"
            width={540}
            height={400}
            className="rounded-[24px]"
          />
        </div>
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-[500px]">
          <h3 className="text-[48px] leading-[62px] font-poppins font-bold text-[#010101] mb-4">
            Expert Verification: Ensuring Excellence
          </h3>
          <p className="text-[16px] text-[#666666] font-poppins leading-[24px] mb-6 font-[400]">
            Every expert goes through a strict verification process, ensuring
            you receive the highest standard of assignments.Our experts are
            thoroughly vetted to guarantee they have the skills and expertise
            needed for top-quality work.{" "}
          </p>
          <div className="text-[15px] flex flex-row font-poppins leading-[21px] text-[#666666] font-[400] mb-6">
            <Image
              src="/static/images/elements.svg"
              alt="Expert Verification"
              width={19}
              height={19}
              className="rounded-[24px] mr-[5px]"
            />
            <p className="w-[311px]">
              You’ll be Only qualified professionals, verified through our
              rigorous process
            </p>
          </div>
          <div className="text-[15px] flex flex-row font-poppins leading-[21px] text-[#666666] font-[400] mb-6">
            <Image
              src="/static/images/elements.svg"
              alt="Expert Verification"
              width={19}
              height={19}
              className="rounded-[24px] mr-[5px]"
            />
            <p>Guaranteed Top Quality </p>
          </div>
          <button className="bg-[#55C360] text-white text-[14px] font-semibold py-3 px-6 rounded-[40px]">
            Talk to Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThingAboutUs;
