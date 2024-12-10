import React from "react";
import Image from "next/image";

const AcademicNeeds: React.FC = () => {
  return (
    <div
      className="py-10 bg-cover bg-center mt-[20px]"
      style={{ backgroundImage: "url('/static/images/academicneeds.svg')" }}
    >
      <div className="ml-[280px]">
        <h1 className="text-[38px] leading-[41px] font-[500] font-poppins text-[#010101] mb-6">
          We cover all Academic Needs,{" "}
          <div className="inline-flex flex-col items-center">
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
      <div className="flex flex-wrap justify-center gap-8">
        <button className="bg-[#55C360] text-white font-poppins font-[500px] text-[18px] leading-[35px] py-2 px-6 rounded-[40px] shadow-md hover:bg-green-600 transition-all">
          Finish My Course for Me
        </button>
        <button className="bg-[#55C360] text-white py-2 px-6 font-poppins font-[500px] text-[18px] leading-[35px] rounded-[40px] shadow-md hover:bg-green-600 transition-all">
          Get Homework Done
        </button>
        <button className="bg-[#55C360] text-white py-2 px-6 font-poppins font-[500px] text-[18px] leading-[35px] rounded-[40px] shadow-md hover:bg-green-600 transition-all">
          Ace My Online Test
        </button>
        <button className="bg-[#55C360] text-white font-poppins font-[500px] text-[18px] leading-[35px] py-2 px-6 rounded-[40px] shadow-md hover:bg-green-600 transition-all">
          Craft My Essay
        </button>
        <div className="flex flex-wrap justify-center gap-8">
          <button className="bg-[#55C360] text-white font-poppins font-[500px] text-[18px] leading-[35px] py-2 px-6 rounded-[40px] shadow-md hover:bg-green-600 transition-all">
            Guide Me Through My Exam
          </button>
          <button className="bg-[#55C360] text-white font-poppins font-[500px] text-[18px] leading-[35px] py-2 px-6 rounded-[40px] shadow-md hover:bg-green-600 transition-all">
            Get Help on My Project
          </button>
          <button className="bg-[#55C360] text-white font-poppins font-[500px] text-[18px] leading-[35px] py-2 px-6 rounded-[40px] shadow-md hover:bg-green-600 transition-all">
            Find Help for Other Needs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicNeeds;
