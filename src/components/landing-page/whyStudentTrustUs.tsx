import React from "react";

// Define an interface for the section data
interface SectionData {
  title: string;
  description: string;
  number: string;
}

interface WhyStudentsTrustUsProps {
  sections?: SectionData[]; 
}

const WhyStudentsTrustUs: React.FC<WhyStudentsTrustUsProps> = ({
  sections = [
    {
      title: "No AI",
      description:
        "100% human-written essays, no bots involved. Every essay is crafted by skilled writers, ensuring originality and human expertise.",
      number: "No AI",
    },
    {
      title: "24/7",
      description:
        "Help is always just a message away. Our support team is always available to assist you, no matter the time or question.",
      number: "24/7",
    },
    {
      title: "98%",
      description:
        "Assignments delivered on time, every time. We consistently deliver essays on time, maintaining reliability and trust.",
      number: "98%",
    },
  ], 
}) => {
  return (
    <div className="bg-white font-poppins py-28 px-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="absolute right-[27%] font-poppins rotate-[25deg] bg-[#F8AC3B] text-black text-[18p] px-6 py-1 rounded-xl text-sm shadow-md">
            NO AI CONTENT
          </div>
        </div>

        <div className="text-center mt-4">
          <h1 className="text-5xl font-bold tracking-tight font-poppins text-gray-900">
            Why Students Trust Us
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 font-poppins">
          {sections.map((section, index) => (
            <div key={index} className="text-center">
              <h3 className="text-[#55C360] text-[45px] font-bold">
                {section.number}
              </h3>
              <p className="mt-1 text-left text-gray-500 ">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-[#55C360] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-green-700 transition"
          >
            Talk to Expert
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyStudentsTrustUs;
