"use client";
import { AssignmentExpertCard } from "@/components/ui/assignment-expert-card";

const BestAssignmentWiter = () => {
  return (
    <>
      <div className="w-full h-[548px] my-10 bg-slider-wave bg-cover bg-center bg-no-repeat absolute "></div>
      <div className="w-full bg-[#F3F3F7] my-10 bg-opacity-100">
        <div className="container px-4 lg:w-[1400px] mx-auto flex flex-row lg:flex-col gap-5 lg:gap-0">
          {/* Headings */}
          <div className="font-poppins text-center my-5">
            <div className="font-bold text-5xl leading-[55px] mb-3">
              Connect with Top Assignment Experts
            </div>
            <div className="font-normal text-lg text-[#5F5F5F] leading-7">
              Your success is in the hands of the best in the industry{" "}
            </div>
          </div>
          {/* Cards */}
          <div className="w-full">
            <div className="w-full flex justify-center gap-3 py-8">
              <AssignmentExpertCard />
              <AssignmentExpertCard />
              <AssignmentExpertCard />
              <AssignmentExpertCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestAssignmentWiter;
