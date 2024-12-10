import React from "react";
import Image from "next/image";

const AffordablePricing: React.FC = () => {
  return (
    <div className="bg-white py-10 px-5 flex flex-col items-center">
      {/* Heading Section */}
      <h2 className="text-[48px] w-[671px] font-bold font-poppins leading-[57px] text-[#010101] text-center mb-4">
        Top-Rated Assignment
      </h2>
      <h2 className="text-[48px] w-[671px] font-bold font-poppins leading-[57px] text-[#010101] text-center mb-4">
        Help with Affordable Pricing
      </h2>
      <p className="text-[18px] text-[#666666] text-center w-[586px] mb-8 font-poppins font-[500] leading-[24px]">
        Get expert assignment help that combines high-quality writing with
        affordable, student-friendly pricing.
      </p>

      {/* Pricing Section */}
      <div className="grid grid-cols-2 gap-[100px] max-w-[800px]">
        {/* Individual Service */}
        <div className="ml-[20px] flex items-start">
          <Image
            src="/static/images/tick.svg"
            alt="Referencing Icon"
            width={24}
            height={24}
            className="mr-4"
          />
          <div>
            <h3 className="text-[24px] font-[400] font-poppins leading-[24px] text-[#5F5F5F] mb-1">
              Referencing
            </h3>
            <div className="flex flex-row items-center mt-[15px]">
              <p className="text-[20px] font-poppins font-[400] leading-[24px] line-through text-[#5F5F5F]">
                20.99
              </p>
              <p className="text-[white] bg-[#55C360] ml-[20px] w-[80px] flex justify-center p-2 text-[15px] font-[400] font-poppins leading-[24px] rounded-[40px]">
                FREE
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[20px] flex items-start ">
          <Image
            src="/static/images/tick.svg"
            alt="Referencing Icon"
            width={24}
            height={24}
            className="mr-4"
          />
          <div>
            <h3 className="text-[24px] font-[400] font-poppins leading-[24px] text-[#5F5F5F] mb-1">
              Formatting
            </h3>
            <div className="flex flex-row items-center mt-[15px]">
              <p className="text-[20px] font-poppins font-[400] leading-[24px] line-through text-[#5F5F5F]">
                12.99
              </p>
              <p className="text-[white] bg-[#55C360] ml-[20px] w-[80px] flex justify-center p-2 text-[15px] font-[400] font-poppins leading-[24px] rounded-[40px]">
                FREE
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[20px] flex items-start ">
          <Image
            src="/static/images/tick.svg"
            alt="Referencing Icon"
            width={24}
            height={24}
            className="mr-4"
          />
          <div>
            <h3 className="text-[24px] font-[400] font-poppins leading-[24px] text-[#5F5F5F] mb-1">
              Revision
            </h3>
            <div className="flex flex-row items-center mt-[15px]">
              <p className="text-[20px] font-poppins font-[400] leading-[24px] line-through text-[#5F5F5F]">
                19.99
              </p>
              <p className="text-[white] bg-[#55C360] ml-[20px] w-[80px] flex justify-center p-2 text-[15px] font-[400] font-poppins leading-[24px] rounded-[40px]">
                FREE
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[20px] flex items-start ">
          <Image
            src="/static/images/tick.svg"
            alt="Referencing Icon"
            width={24}
            height={24}
            className="mr-4"
          />
          <div>
            <h3 className="text-[24px] font-[400] font-poppins leading-[24px] text-[#5F5F5F] mb-1">
              Proofreading and Editing
            </h3>
            <div className="flex flex-row items-center mt-[15px]">
              <p className="text-[20px] font-poppins font-[400] leading-[24px] line-through text-[#5F5F5F]">
                10.99
              </p>
              <p className="text-[white] bg-[#55C360] ml-[20px] w-[80px] flex justify-center p-2 text-[15px] font-[400] font-poppins leading-[24px] rounded-[40px]">
                FREE
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[20px] flex items-start ">
          <Image
            src="/static/images/tick.svg"
            alt="Referencing Icon"
            width={24}
            height={24}
            className="mr-4"
          />
          <div>
            <h3 className="text-[24px] font-[400] font-poppins leading-[24px] text-[#5F5F5F] mb-1">
              Plagiarism Checks
            </h3>
            <div className="flex flex-row items-center mt-[15px]">
              <p className="text-[20px] font-poppins font-[400] leading-[24px] line-through text-[#5F5F5F]">
                14.99
              </p>
              <p className="text-[white] bg-[#55C360] ml-[20px] w-[80px] flex justify-center p-2 text-[15px] font-[400] font-poppins leading-[24px] rounded-[40px]">
                FREE
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[20px] flex items-start ">
          <Image
            src="/static/images/tick.svg"
            alt="Referencing Icon"
            width={24}
            height={24}
            className="mr-4"
          />
          <div>
            <h3 className="text-[24px] font-[400] font-poppins leading-[24px] text-[#5F5F5F] mb-1">
              Unlimited Edits
            </h3>
            <div className="flex flex-row items-center mt-[15px]">
              <p className="text-[20px] font-poppins font-[400] leading-[24px] line-through text-[#5F5F5F]">
                6.99
              </p>
              <p className="text-[white] bg-[#55C360] ml-[20px] w-[80px] flex justify-center p-2 text-[15px] font-[400] font-poppins leading-[24px] rounded-[40px]">
                FREE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <button className="bg-[#55C360] mt-[70px] text-white mr-[25px] text-[16px] font-semibold py-3 px-6 rounded-[40px]">
        Unlock Now
      </button>
    </div>
  );
};

export default AffordablePricing;
