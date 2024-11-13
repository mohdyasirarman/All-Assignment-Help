import { AcademicSuccessCard } from "@/components/ui/assignment-expert-card";

const UnmatchedAcademicSuccess = () => {
  return (
    <>
      <div className="w-full mt-32 mb-16">
        <div className="container px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-col gap-5 lg:gap-0">
          {/* Heading */}
          <div className="w-full text-center mb-16 px-48 text-6xl font-inter font-bold leading-[76px] tracking-[-2px]">
            <span className="text-[#2E2F35]">
              Our Unmatched Features – Built for Your{" "}
            </span>
            <span className="text-[#09B14F]">Academic Success</span>
          </div>
          {/* Something */}
          <div className="flex flex-col space-y-[30px] justify-center items-center mx-20">
            <div className="w-full flex justify-center space-x-[30px]">
              <AcademicSuccessCard color="blue" />
              <AcademicSuccessCard color="green" />
              <AcademicSuccessCard color="blue" />
            </div>
            <div className="w-full flex justify-center space-x-[30px]">
              <AcademicSuccessCard color="green" />
              <AcademicSuccessCard color="blue" />
              <AcademicSuccessCard color="green" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnmatchedAcademicSuccess;
