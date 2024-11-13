import { AcademicSuccessCard } from "@/components/ui/assignment-expert-card";

const UnmatchedAcademicSuccess = () => {
  const AcademicSuccessData = [
    {
      id: 1,
      color: "blue",
      image: "/static/images/quality-5-svgrepo-com.svg",
      title: "Quality Writing, No AI",
      description: `Get quality writing with zero AI,
      crafted by real experts holding
      scholarly degrees and extensive
      academic insights.`,
    },
    {
      id: 2,
      color: "green",
      image: "/static/images/Group.svg",
      title: "Timely Submissions",
      description: `
        If you need assignments on
      time, we are the best option for
      you. 
      `,
    },
    {
      id: 3,
      color: "blue",
      image: "/static/images/privacy-policy-pana.svg",
      title: "Friendly Policies",
      description: `
     Our student-friendly policies
    include a money-back
    guarantee. 
      `,
    },
    {
      id: 4,
      color: "green",
      image: "/static/images/experts-amico.svg",
      title: "Reliable Experts",
      description: `Every assignment writer on our
      website has completed their
      Master’s or Doctorate degree. `,
    },
    {
      id: 5,
      color: "blue",
      image: "/static/images/Currency-pana.svg",
      title: "Pocket-Friendly Services",
      description: `
       We always ensure to provide
      affordable services through our
      dynamic pricing system
      `,
    },
    {
      id: 6,
      color: "green",
      image: "/static/images/service-24_7-pana.svg",
      title: "24/7 Support",
      description: `
      24/7 Availability
      Feel free to get in touch with our academic
      writers whenever you want. 
      `,
    },
  ];
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
          {/* Cards */}
          <div className="flex flex-col space-y-[30px] justify-center items-center mx-20">
            <div className="w-full flex justify-center space-x-[30px]">
              <AcademicSuccessCard
                title={AcademicSuccessData[0].title}
                image={AcademicSuccessData[0].image}
                description={AcademicSuccessData[0].description}
                color={AcademicSuccessData[0].color}
              />
              <AcademicSuccessCard
                title={AcademicSuccessData[1].title}
                image={AcademicSuccessData[1].image}
                description={AcademicSuccessData[1].description}
                color={AcademicSuccessData[1].color}
              />
              <AcademicSuccessCard
                title={AcademicSuccessData[2].title}
                image={AcademicSuccessData[2].image}
                description={AcademicSuccessData[2].description}
                color={AcademicSuccessData[2].color}
              />
            </div>
            <div className="w-full flex justify-center space-x-[30px]">
              <AcademicSuccessCard
                title={AcademicSuccessData[3].title}
                image={AcademicSuccessData[3].image}
                description={AcademicSuccessData[3].description}
                color={AcademicSuccessData[3].color}
              />
              <AcademicSuccessCard
                title={AcademicSuccessData[4].title}
                image={AcademicSuccessData[4].image}
                description={AcademicSuccessData[4].description}
                color={AcademicSuccessData[4].color}
              />
              <AcademicSuccessCard
                title={AcademicSuccessData[5].title}
                image={AcademicSuccessData[5].image}
                description={AcademicSuccessData[5].description}
                color={AcademicSuccessData[5].color}
              />
            </div>
          </div>
          <div className="w-full mt-20 flex justify-center font-poppins">
            <button className="bg-[#09B14F] text-white font-normal text-lg px-8 py-2 rounded-md">
              Hire Real Writers
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnmatchedAcademicSuccess;
