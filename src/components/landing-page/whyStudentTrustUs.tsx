import React from "react";

const WhyStudentsTrustUs: React.FC = () => {
  return (
    <div className="bg-white  py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <div className=" absolute right-[26%]  rotate-[30deg] bg-[#F8AC3B] text-black px-6 py-1 rounded-full text-sm font-semibold shadow-md">
            NO AI CONTENT
          </div>
        </div>

        <div className="text-center mt-4">
          <h1 className="text-5xl font-bold tracking-tight font-poppins text-gray-900">
            Why Students Trust Us
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 font-poppins">
          <div className="text-center">
            <h3 className="text-[#55C360] text-[45px] font-bold">No AI</h3>
            <p className="mt-1 text-base text-gray-500">
              100% human-written essays, no bots involved. Every essay is
              crafted by skilled writers, ensuring originality and human
              expertise.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-[#55C360] text-[45px] font-bold">24/7</h3>
            <p className="mt-1 text-base text-gray-500">
              Help is always just a message away. Our support team is always
              available to assist you, no matter the time or question.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-[#55C360] text-[45px] font-bold">98%</h3>
            <p className="mt-1 text-base text-gray-500">
              Assignments delivered on time, every time. We consistently deliver
              essays on time, maintaining reliability and trust.
            </p>
          </div>
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
