import React from "react";
import Image from "next/image";

interface Props {
  imageSrc: string;
}

const VerificationProcess = ({ imageSrc }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 p-22">
      <div className="relative w-1/2 p-24 ">
        <Image
          src={imageSrc}
          alt="Verification Process"
          className="rounded-[60px] shadow-md"
          layout="responsive"
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-col items-start gap-5 md:w-1/2">
        <h2 className="text-[50px] font-bold text-[#2C2C2C] leading-tight font-poppins">
          Our 4-Step Expert <br /> Verification Process
        </h2>
        <p className="text-[#00000089] font-poppins">
          Ensuring Only the Best for Your Assignments. We follow a <br />
          rigorous process to select and verify experts, guaranteeing top-{" "}
          <br /> quality work every time.
        </p>
        <ul className="grid grid-cols-2 gap-6 items-center mt-[10px]">
          <li className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#2BAFFC" />
              <path
                d="M13.5516 22.0001L7.85156 16.3001L9.27656 14.8751L13.5516 19.1501L22.7266 9.9751L24.1516 11.4001L13.5516 22.0001Z"
                fill="white"
              />
            </svg>
            <span className=" text-[#000000] font-poppins font-semibold">
              Application Screening
            </span>
          </li>
          <li className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#2BAFFC" />
              <path
                d="M13.5516 22.0001L7.85156 16.3001L9.27656 14.8751L13.5516 19.1501L22.7266 9.9751L24.1516 11.4001L13.5516 22.0001Z"
                fill="white"
              />
            </svg>
            <span className=" text-[#000000] font-poppins font-semibold">
              Expert Interviews
            </span>
          </li>
          <li className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#2BAFFC" />
              <path
                d="M13.5516 22.0001L7.85156 16.3001L9.27656 14.8751L13.5516 19.1501L22.7266 9.9751L24.1516 11.4001L13.5516 22.0001Z"
                fill="white"
              />
            </svg>
            <span className=" text-[#000000] font-poppins font-semibold">
              Quality Assurance
            </span>
          </li>
          <li className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#2BAFFC" />
              <path
                d="M13.5516 22.0001L7.85156 16.3001L9.27656 14.8751L13.5516 19.1501L22.7266 9.9751L24.1516 11.4001L13.5516 22.0001Z"
                fill="white"
              />
            </svg>
            <span className=" text-[#000000] font-poppins font-semibold">
              Final Review
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerificationProcess;
