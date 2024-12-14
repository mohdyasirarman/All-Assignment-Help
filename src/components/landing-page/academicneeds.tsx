import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AcademicNeedsProps {
  title?: string;
  buttons?: string[];
}

const AcademicNeeds: React.FC<AcademicNeedsProps> = ({
  title = "We cover all Academic Needs,",
  buttons = [
    "Finish My Course for Me",
    "Get Homework Done",
    "Ace My Online Test",
    "Craft My Essay",
    "Guide Me Through My Exam",
    "Get Help on My Project",
    "Find Help for Other Needs",
  ],
}) => {
  return (
    <div
      className="py-12 bg-cover bg-center -mt-16"
      style={{ backgroundImage: "url('/static/images/academicneeds.svg')" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-[38px] text-center leading-[41px] font-[500] font-poppins text-[#010101] mb-2">
          {title}
          <div className="mr-[100px] inline-flex flex-col items-center">
            <span>Select</span>
            <Image
              src="/static/images/cursor1.svg"
              alt="cursor"
              width={96.45}
              height={96.45}
              className="mt-[-70px] mr-[-200px]"
            />
            <span className="mt-[-70px] mr-[-400px]">below</span>
          </div>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mx-56 mt-12">
        {buttons.map((buttonText, index) => (
          <Link
            key={index}
            href="/order"
            className="bg-[#55C360] text-white font-poppins mb-2 font-[500] text-[18px] leading-[35px] py-2 px-6 rounded-[40px] shadow-md hover:bg-green-600 transition-all"
          >
            {buttonText}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AcademicNeeds;
