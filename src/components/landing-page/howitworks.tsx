import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-[#2BAFFC66] h-[820px] bg-cover md:px-10 flex flex-col md:flex-row items-center gap-[100px] mt-[50px] mb-[50px]">
      <div>
        <Image
          src="/static/images/woman.svg"
          alt="Student holding books"
          width={600}
          height={854}
          priority
          className="mb-[42px] drop-shadow-lg hover:drop-shadow-2xl transition-all ease-in"
        />
      </div>

      <Image
        src="/static/images/vectorThree.svg"
        alt="Arrow"
        width={54}
        height={129}
        priority
        className="mr-[-95px] mt-[330px] "
      />
      <div className="mb-[80px] leading-[50px] mr-[-200px]">
        <h2 className="text-[48px] leading-[56px] font-bold font-poppins text-[#1C1C1C] mb-[30px]">
          How it Works?
        </h2>
        <p className="text-[18px] text-[#1C1C1C] leading-[30px] font-[400] font-poppins w-[577px]">
          A seamless process to deliver top-quality work, from start to finish.
        </p>

        <div className="flex items-start bg-white w-[565px] h-[161px] rounded-lg mt-[20px] p-5">
          <div className="text-[#010101] text-[36px] font-bold font-poppins leading-[54px]">
            01
          </div>

          <div className="mt-[10px]">
            <h3 className="text-[22px] font-bold font-poppins leading-[28px] mb-[20px] ml-[45px] text-[#010101]">
              Share Your Requirements
            </h3>
            <Link
              href="/order"
              className="bg-[#55C360]  text-white text-[16px] px-4  py-4 mt-[10px] ml-[-40px] rounded-[40px] font-poppins hover:bg-green-600 font-semibold"
            >
              Talk to Expert
            </Link>
          </div>
        </div>

        <div className="flex items-center mb-[40px] bg-white w-[565px] h-[74px] rounded-lg mt-[30px] p-5">
          <div className=" flex items-center justify-center  text-[#010101] text-[36px] font-bold font-poppins leading-[54px]">
            02
          </div>
          <div className="ml-4">
            <h3 className="text-[22px] font-bold font-poppins leading-[24px] ml-[30px] text-[#010101]">
              Pay for Services
            </h3>
          </div>
        </div>

        <div className="flex items-center mb-[40px] bg-white w-[565px] h-[74px] rounded-lg p-5">
          <div className="flex items-center justify-center text-[#010101] text-[36px] font-bold font-poppins leading-[54px]">
            03
          </div>
          <div className="ml-4">
            <h3 className="text-[22px] font-bold font-poppins leading-[24px] ml-[30px] text-[#010101]">
              Get it done on time
            </h3>
          </div>
        </div>

        <div className="flex items-center bg-white w-[565px] h-[74px] rounded-lg p-5 ">
          <div className="flex items-center justify-center text-[#010101] text-[36px] font-bold font-poppins leading-[54px]">
            04
          </div>
          <div className="ml-4">
            <h3 className="text-[22px] font-bold font-poppins leading-[24px] ml-[30px] text-[#010101]">
              Make it perfect
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Image
          src="/static/images/vectorOne.svg"
          alt="Arrow"
          width={55}
          height={166}
          priority
          className="ml-[90px] mt-[-50px]"
        />
        <Image
          src="/static/images/vectorTwo.svg"
          alt="Arrow"
          width={55}
          priority
          height={113}
          className="ml-[90px] mt-[10px]"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
